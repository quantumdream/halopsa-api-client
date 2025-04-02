import type { TelPref } from "./enums.ts";

export type Agent = {
  id: number;
  name: string;
  onlinestatus_actual: number;
  is_online: boolean;
  lastonline: string;
  team: string;
  isdisabled: boolean;
  email: string;
  ad: string;
  lastlogindate: string;
  agentphotopath: string;
  initials: string;
  firstname: string;
  surname: string;
  colour: string;
  jobtitle: string;
  sms: string;
  is_agent: boolean;
  teams: [];
  departments: [];
  linemanager: number;
  licence_type: number;
  isapiagent: boolean;
  gotoresolve_authorized: boolean;
  use: string;
  namewithinactive: string;
  apptsync: number;
  enableshifts: boolean;
  can_approve_invoice: boolean;
  workday_id: number;
  costprice: number;
  chargerate: number;
};

export type Action = {
  id: number;
  ticket_id: number;
  outcome: string;
  who: string;
  who_type: number;
  who_imgpath: string;
  who_agentid: number;
  datetime: string;
  actiondatecreated: string;
  note: string;
  replied_to_ticket_id: number;
  replied_to_action_id: number;
  created_from_ticket_id: number;
  created_from_action_id: number;
  action_contract_id: number;
  action_travel_contract_id: number;
  project_id: number;
  personal_unread: boolean;
  actionarrivaldate: string;
  actioncompletiondate: string;
  translations: [];
  on_behalf_of_name: string;
  actionby_agent_id: number;
  guid: string;
  actioncontractid: number;
  actisbillable: boolean;
  actisreadyforprocessing: boolean;
  travelisreadyforprocessing: boolean;
  outcome_id: number;
  action_systemid: number;
  timetaken: number;
  timetakendays: number;
  timetakenadjusted: number;
  actionchargehours: number;
  actionnonchargeamount: number;
  actionnonchargehours: number;
  actionchargeamount: number;
  actionprepayhours: number;
  actionprepayamount: number;
  actiontravelchargehours: number;
  chargerate: number;
  travel_chargerate: number;
  hiddenfromuser: boolean;
  important: boolean;
  old_status: number;
  new_status: number;
  new_status_name: string;
  colour: string;
  attachment_count: number;
  unread: number;
  actionby_application_id: string;
  actionby_user_id: number;
  emaildirection?: number;
};

export type Ticket = {
  id: number;
  dateoccurred: string;
  summary: string;
  details: string;
  status_id: number;
  tickettype_id: number;
  sla_id: number;
  priority_id: number;
  client_id: number;
  client_name: number;
  site_id: number;
  site_name: string;
  user_id: number;
  user_name: string;
  team: string;
  agent_id: number;
  category_1: string;
  category_2: string;
  category_3: string;
  category_4: string;
  estimate: number;
  estimatedays: number;
  child_count: number;
  attachment_count: number;
  flagged: boolean;
  read: boolean;
  enduserstatus: number;
  onhold: boolean;
  respondbydate: string;
  fixbydate: string;
  excludefromsla: boolean;
  slaholdtime: number;
  site_timezone: string;
  lastactiondate: string;
  last_update: string;
  organisation_id: number;
  department_id: number;
  reportedby: string;
  user_email: string;
  emailtolist: string;
  emailcclist: string;
  matched_kb_id: number;
  product_id: number;
  release_id: number;
  release2_id: number;
  release3_id: number;
  lastincomingemail: string;
  workflow_id: number;
  workflow_step: number;
  pipeline_stage_id: number;
  is_vip: boolean;
  isimportantcontact: boolean;
  inactive: boolean;
  impact: number;
  urgency: number;
  starttime: string;
  starttimeslot: string;
  targetdate: string;
  targettime: string;
  targettimeslot: number;
  deadlinedate: string;
  oppcompanyname: string;
  oppvalueadjusted: number;
  cost: number;
  quantity: number;
  userdef1: string;
  userdef2: string;
  userdef3: string;
  userdef4: string;
  userdef5: string;
  source: number;
  release_important: boolean;
  releasenotegroup_id: number;
  supplier_status: number;
  appointment_type: number;
  section_timezone: string;
  projectinternaltask: boolean;
  impactlevel: number;
  guid: string;
  reviewed: boolean;
  merged_into_id: number;
  table: number;
  use: string;
  idsummary: string;
  ticketage: number;
  useful_count: number;
  notuseful_count: number;
  updateservicestatus: boolean;
  servicestatusnote: string;
  itil_requesttype_id: number;
  ticket_tags: string;
  invoiceseperatelyoverride: boolean;
  purchaseordernumber: string;
};

export type Client = {
  id: number;
  name: string;
  toplevel_id: number;
  toplevel_name: string;
  inactive: boolean;
  colour: string;
  confirmemail: number;
  actionemail: number;
  clearemail: number;
  messagegroup_id: number;
  mailbox_override: number;
  default_mailbox_id: number;
  item_tax_code: number;
  service_tax_code: number;
  prepay_tax_code: number;
  contracttax_code: number;
  pritech: number;
  sectech: number;
  accountmanagertech: number;
  use: string;
  key: number;
  table: number;
  xero_tenant_id: string;
  accountsid: string;
  excludefrominvoicesync: boolean;
  overridepdftemplateinvoice: number;
  client_to_invoice: number;
  itglue_id: string;
  sentinel_subscription_id: string;
  sentinel_workspace_name: string;
  sentinel_resource_group_name: string;
  default_currency_code: number;
  client_to_invoice_recurring: number;
  qbo_company_id: string;
  dbc_company_id: string;
  stopped: number;
  customertype: number;
  customer_relationship: [];
  customer_relationship_list: string;
  servicenow_validated: boolean;
  jira_validated: boolean;
  ref: string;
  ticket_invoices_for_each_site: boolean;
  is_vip: boolean;
  taxable: boolean;
  percentage_to_surved: number;
  overridepdftemplatequote: number;
  is_account: boolean;
};

export type RequestTokenResponse = {
  access_token: string;
  expires_in: number;
  id_token: string;
  scope: string;
  token_type: string;
  refresh_token: string;
};

export type User = {
  id: number;
  emailaddress: string;
  sitephonenumber: string;
  phonenumber: string;
  homenumber: string;
  mobilenumber: string;
  mobilenumber2: string;
  telpref: TelPref;
};

export type FindAgentsResponse = Agent[];

export type FindActionsResponse = {
  actions: Action[];
  record_count: number;
};

export type FindActionsQuery = {
  ticket_id?: number;
  count?: number;
};

export type FindTicketsResponse = {
  tickets: Ticket[];
  record_count: number;
};

export type FindTicketsQuery = {
  pageinate?: boolean;
  page_size?: number;
  page_no?: number;
  count?: number;
};

export type FindClientsResponse = {
  clients: Client[];
  record_count: number;
};

export type FindClientsQuery = {
  count?: number;
};

export type FindClientByIdResponse = Client;

export type UpdateUserDto = {
  sitephonenumber?: string;
  phonenumber?: string;
  homenumber?: string;
  mobilenumber?: string;
  mobilenumber2?: string;
  telpref?: number;
};

export type UpdateUserResponse = User;

export type FindUsersQuery = {
  pageinate?: boolean;
  page_size?: number;
  page_no?: number;
  count?: number;
};

export type FindUsersResponse = {
  users: User[];
  record_count: number;
};
