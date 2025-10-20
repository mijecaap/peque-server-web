/**
 * Exaroton API Type Definitions
 * Based on official Exaroton API documentation: https://developers.exaroton.com/
 */

/**
 * Server status codes
 * 0 = OFFLINE
 * 1 = ONLINE
 * 2 = STARTING
 * 3 = STOPPING
 * 4 = RESTARTING
 * 5 = SAVING
 * 6 = LOADING
 * 7 = CRASHED
 * 8 = PENDING
 * 9 = TRANSFERRING
 * 10 = PREPARING
 */
export type ServerStatus = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

/**
 * Human-readable server status labels
 */
export type ServerStatusLabel =
  | "offline"
  | "online"
  | "starting"
  | "stopping"
  | "restarting"
  | "saving"
  | "loading"
  | "crashed"
  | "pending"
  | "transferring"
  | "preparing"

/**
 * Server software information
 */
export interface ServerSoftware {
  /** Unique software ID */
  id: string
  /** Software name (e.g., "Vanilla", "Paper", "Forge") */
  name: string
  /** Software version (e.g., "1.16.5") */
  version: string
}

/**
 * Server players information
 */
export interface ServerPlayers {
  /** Maximum player count (slots) */
  max: number
  /** Current player count */
  count: number
  /** Current player list (not always available) */
  list: string[]
}

/**
 * Exaroton server object
 */
export interface ExarotonServer {
  /** Unique server ID */
  id: string
  /** Server name */
  name: string
  /** Full server address (e.g., "example.exaroton.me") */
  address: string
  /** Server Message of the Day */
  motd: string
  /** Current server status */
  status: ServerStatus
  /** Host machine the server is running on (only available if server is online) */
  host: string | null
  /** Port the server is listening on (only available if server is online) */
  port: number | null
  /** Player information */
  players: ServerPlayers
  /** Installed server software information */
  software: ServerSoftware | null
  /** Whether the server is accessed via the Share Access feature */
  shared: boolean
}

/**
 * Generic Exaroton API response wrapper
 */
export interface ExarotonAPIResponse<T> {
  /** Whether the request was successful */
  success: boolean
  /** Error message if request failed */
  error: string | null
  /** Response data (type depends on endpoint) */
  data: T | null
}

/**
 * Response for list servers endpoint
 */
export type ServersResponse = ExarotonAPIResponse<ExarotonServer[]>

/**
 * Response for get single server endpoint
 */
export type ServerResponse = ExarotonAPIResponse<ExarotonServer>

/**
 * Server logs response
 */
export interface ServerLogs {
  /** Log file content */
  content: string | null
}

/**
 * Response for server logs endpoint
 */
export type LogsResponse = ExarotonAPIResponse<ServerLogs>

/**
 * Shared log information (mclo.gs)
 */
export interface SharedLog {
  /** Unique log ID on mclo.gs */
  id: string
  /** Full URL to the shared log */
  url: string
  /** Raw log URL */
  raw: string
}

/**
 * Response for share log endpoint
 */
export type SharedLogResponse = ExarotonAPIResponse<SharedLog>

/**
 * Server RAM information
 */
export interface ServerRAM {
  /** RAM amount in GB */
  ram: number
}

/**
 * Response for RAM endpoints
 */
export type RAMResponse = ExarotonAPIResponse<ServerRAM>

/**
 * Server MOTD information
 */
export interface ServerMOTD {
  /** Server Message of the Day */
  motd: string
}

/**
 * Response for MOTD endpoints
 */
export type MOTDResponse = ExarotonAPIResponse<ServerMOTD>

/**
 * Account information
 */
export interface Account {
  /** Account username */
  name: string
  /** Account email */
  email: string
  /** Whether email is verified */
  verified: boolean
  /** Available credits */
  credits: number
}

/**
 * Response for account endpoint
 */
export type AccountResponse = ExarotonAPIResponse<Account>

/**
 * Credit pool information
 */
export interface CreditPool {
  /** Unique pool ID */
  id: string
  /** Pool name */
  name: string
  /** Total pool credits */
  credits: number
  /** Number of servers in the pool */
  servers: number
  /** Unique account ID of the pool owner */
  owner: string
  /** Whether the current user is the owner of the pool */
  isOwner: boolean
  /** Number of members in the pool */
  members: number
  /** Share of credits owned by current user */
  ownShare: number
  /** Number of credits owned by current user in this pool */
  ownCredits: number
}

/**
 * Response for credit pool endpoints
 */
export type CreditPoolResponse = ExarotonAPIResponse<CreditPool>

/**
 * Response for credit pools list endpoint
 */
export type CreditPoolsResponse = ExarotonAPIResponse<CreditPool[]>

/**
 * Pool member information
 */
export interface PoolMember {
  /** Unique account ID */
  account: string
  /** Account name */
  name: string
  /** Share of pool credits */
  share: number
  /** Number of credits owned by this member */
  credits: number
  /** Whether this member is the pool owner */
  isOwner: boolean
}

/**
 * Response for pool members endpoint
 */
export type PoolMembersResponse = ExarotonAPIResponse<PoolMember[]>

/**
 * File information
 */
export interface FileInfo {
  /** File path */
  path: string
  /** File name */
  name: string
  /** Whether the file is a text file */
  isTextFile: boolean
  /** Whether the file is a config file */
  isConfigFile: boolean
  /** Whether the path is a directory */
  isDirectory: boolean
  /** Whether the file is a log file */
  isLog: boolean
  /** Whether the file is readable */
  isReadable: boolean
  /** Whether the file is writable */
  isWritable: boolean
  /** File size in bytes */
  size: number
  /** Child files/directories (if this is a directory) */
  children: FileInfo[] | null
}

/**
 * Response for file info endpoint
 */
export type FileInfoResponse = ExarotonAPIResponse<FileInfo>

/**
 * Config option types
 */
export type ConfigOptionType = "string" | "integer" | "float" | "boolean" | "multiselect" | "select"

/**
 * Configuration file option
 */
export interface ConfigOption {
  /** Option key */
  key: string
  /** Current value */
  value: string | number | boolean | string[]
  /** Display label */
  label: string
  /** Option type */
  type: ConfigOptionType
  /** Available options for select/multiselect types */
  options?: string[]
}

/**
 * Response for config options endpoint
 */
export type ConfigOptionsResponse = ExarotonAPIResponse<ConfigOption[]>

/**
 * Utility type to get status label from status code
 */
export function getStatusLabel(status: ServerStatus): ServerStatusLabel {
  const labels: Record<ServerStatus, ServerStatusLabel> = {
    0: "offline",
    1: "online",
    2: "starting",
    3: "stopping",
    4: "restarting",
    5: "saving",
    6: "loading",
    7: "crashed",
    8: "pending",
    9: "transferring",
    10: "preparing",
  }
  return labels[status]
}

/**
 * Utility type to check if server is online/running
 */
export function isServerOnline(status: ServerStatus): boolean {
  return status === 1
}

/**
 * Utility type to check if server is in transition state
 */
export function isServerTransitioning(status: ServerStatus): boolean {
  return [2, 3, 4, 5, 6, 9, 10].includes(status)
}
