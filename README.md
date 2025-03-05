# @quantumdream/halopsa-api-client

This module exposes a HaloPSA API Client

## Disclaimer

This is an unofficial library provided by an individual, the author is not affiliated with HaloPSA

## Prerequisites

You need to provide a client_id and client_secret from an application you created inside your own HaloPSA instance, details on how to set this up can be found in the official HaloPSA documentation and is out of scope for this repository.

## Official API Documentation

[HaloPSA API Documentation](https://halo.haloservicedesk.com/apidoc/info)

## Usage

```js
const client = new HaloPSAApiClient(
  "<API_BASE_URL>",
  "<CLIENT_ID>",
  "<CLIENT_SECRET>",
  "<OPTIONAL_SCOPE(DEFAULT=ALL)>"
); // Replace <> values with your HaloPSA Api values

const { clients } = await client.findClients(); // Lists all clients, explore types to find query params and more
```

## License

[License](./LICENSE)
