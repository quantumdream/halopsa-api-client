import { type $Fetch, type FetchOptions, ofetch } from "ofetch";
import type {
  Action,
  Agent,
  Client,
  FindActionsQuery,
  FindActionsResponse,
  FindAgentsResponse,
  FindClientByIdResponse,
  FindClientsQuery,
  FindClientsResponse,
  FindTicketsQuery,
  FindTicketsResponse,
  FindUsersQuery,
  FindUsersResponse,
  RequestTokenResponse,
  Ticket,
  UpdateUserDto,
  UpdateUserResponse,
  User,
} from "./types.ts";

export class HaloPSAApiClient {
  private authFetch: $Fetch;
  private apiFetch: $Fetch;
  private accessToken: string | undefined;
  private accessTokenExpiresAt: number = 0;

  constructor(
    baseURL: string,
    clientId: string,
    clientSecret: string,
    scope: string = "all",
  ) {
    this.authFetch = ofetch.create({
      baseURL: `${baseURL}/auth`,
    });
    this.apiFetch = ofetch.create({
      baseURL: `${baseURL}/api`,
      onRequest: async ({ options }) => {
        if (this.accessTokenExpiresAt < Date.now()) {
          await this.requestToken(clientId, clientSecret, scope);
        }

        const headers = new Headers({
          ...options.headers,
          Authorization: `Bearer ${this.accessToken}`,
        });
        options.headers = headers;
      },
    });
  }

  private async requestToken(
    clientId: string,
    clientSecret: string,
    scope: string,
  ) {
    const requestTokenBody = new URLSearchParams();

    requestTokenBody.append("grant_type", "client_credentials");
    requestTokenBody.append("client_id", clientId);
    requestTokenBody.append("client_secret", clientSecret);
    requestTokenBody.append("scope", scope);

    const { access_token, expires_in } = await this.authFetch<
      RequestTokenResponse
    >("token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: requestTokenBody,
    });

    this.accessToken = access_token;
    this.accessTokenExpiresAt = expires_in * 1000 + Date.now();
  }

  raw<T>(endpoint: string, options?: FetchOptions<"json">): Promise<T> {
    return this.apiFetch<T>(endpoint, options);
  }

  async findAgents(): Promise<{ agents: Agent[] }> {
    const agents = await this.apiFetch<FindAgentsResponse>("agent");

    return { agents };
  }

  async findActions(
    findActionsQuery?: FindActionsQuery,
  ): Promise<{ actions: Action[]; record_count: number }> {
    const { actions, record_count } = await this.apiFetch<FindActionsResponse>(
      "actions",
      {
        query: findActionsQuery,
      },
    );

    return { actions, record_count };
  }

  async findTickets(
    findTicketsQuery?: FindTicketsQuery,
  ): Promise<{ tickets: Ticket[]; record_count: number }> {
    const { record_count, tickets } = await this.apiFetch<FindTicketsResponse>(
      "tickets",
      {
        query: findTicketsQuery,
      },
    );

    return { tickets, record_count };
  }

  async findClients(
    findClientsQuery?: FindClientsQuery,
  ): Promise<{ clients: Client[]; record_count: number }> {
    const { record_count, clients } = await this.apiFetch<FindClientsResponse>(
      "client",
      {
        query: findClientsQuery,
      },
    );

    return { clients, record_count };
  }

  async findClientById(id: number): Promise<Client> {
    const client = await this.apiFetch<FindClientByIdResponse>(`client/${id}`);

    return client;
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.apiFetch<UpdateUserResponse>(`users`, {
      method: "POST",
      body: [
        {
          id,
          ...updateUserDto,
        },
      ],
    });

    return user;
  }

  async findUsers(
    findUsersQuery?: FindUsersQuery,
  ): Promise<{ users: User[]; record_count: number }> {
    const { record_count, users } = await this.apiFetch<FindUsersResponse>(
      "users",
      {
        query: findUsersQuery,
      },
    );

    return { record_count, users };
  }
}
