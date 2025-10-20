/**
 * Exaroton API Client
 * Handles all communication with the Exaroton API
 */

import axios, { AxiosInstance, AxiosError } from "axios"
import type {
  ExarotonServer,
  ServersResponse,
  ServerResponse,
  LogsResponse,
} from "@/types/exaroton"

/**
 * Base URL for Exaroton API
 */
const EXAROTON_API_URL = "https://api.exaroton.com/v1"

/**
 * Axios instance configured for Exaroton API
 */
const exarotonClient: AxiosInstance = axios.create({
  baseURL: EXAROTON_API_URL,
  timeout: 10000,
  headers: {
    Authorization: `Bearer ${process.env.EXAROTON_API_KEY}`,
    "Content-Type": "application/json",
  },
})

/**
 * Request interceptor - logs requests in development
 */
exarotonClient.interceptors.request.use(
  (config) => {
    if (process.env.NODE_ENV === "development") {
      console.log(`[Exaroton API] ${config.method?.toUpperCase()} ${config.url}`)
    }
    return config
  },
  (error) => {
    console.error("[Exaroton API] Request error:", error)
    return Promise.reject(error)
  }
)

/**
 * Response interceptor - handles errors globally
 */
exarotonClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      // Server responded with error status
      console.error(
        `[Exaroton API] Error ${error.response.status}:`,
        error.response.data
      )
    } else if (error.request) {
      // Request made but no response received
      console.error("[Exaroton API] No response received:", error.message)
    } else {
      // Error setting up request
      console.error("[Exaroton API] Request setup error:", error.message)
    }
    return Promise.reject(error)
  }
)

/**
 * Get all servers from Exaroton account
 * @returns Promise with array of servers
 * @throws Error if API key is invalid or request fails
 */
export async function getServers(): Promise<ExarotonServer[]> {
  try {
    const response = await exarotonClient.get<ServersResponse>("/servers/")

    if (!response.data.success || !response.data.data) {
      throw new Error(response.data.error || "Failed to fetch servers")
    }

    return response.data.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        `Failed to fetch servers: ${error.response?.data?.error || error.message}`
      )
    }
    throw error
  }
}

/**
 * Get a specific server by ID
 * @param id - Server ID
 * @returns Promise with server data
 * @throws Error if server not found or request fails
 */
export async function getServer(id: string): Promise<ExarotonServer> {
  try {
    const response = await exarotonClient.get<ServerResponse>(`/servers/${id}`)

    if (!response.data.success || !response.data.data) {
      throw new Error(response.data.error || "Failed to fetch server")
    }

    return response.data.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error(`Server with ID "${id}" not found`)
      }
      throw new Error(
        `Failed to fetch server: ${error.response?.data?.error || error.message}`
      )
    }
    throw error
  }
}

/**
 * Get server logs
 * @param id - Server ID
 * @returns Promise with log content as string array (split by lines)
 * @throws Error if server not found or logs unavailable
 */
export async function getServerLogs(id: string): Promise<string[]> {
  try {
    const response = await exarotonClient.get<LogsResponse>(`/servers/${id}/logs/`)

    if (!response.data.success || !response.data.data) {
      throw new Error(response.data.error || "Failed to fetch server logs")
    }

    // Split log content by newlines and filter empty lines
    const logContent = response.data.data.content || ""
    return logContent.split("\n").filter((line) => line.trim() !== "")
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error(`Server with ID "${id}" not found`)
      }
      throw new Error(
        `Failed to fetch logs: ${error.response?.data?.error || error.message}`
      )
    }
    throw error
  }
}

/**
 * Export the configured axios instance for advanced usage
 */
export { exarotonClient }
