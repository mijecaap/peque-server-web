import useSWR from "swr"
import type { ExarotonServer } from "@/types/exaroton"

/**
 * Generic fetcher function for SWR
 * Throws error if response is not ok
 */
async function fetcher<T>(url: string): Promise<T> {
  const res = await fetch(url)

  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.")
    // Attach extra info to the error object
    const errorData = await res.json().catch(() => ({}))
    throw Object.assign(error, {
      info: errorData,
      status: res.status,
    })
  }

  const data = await res.json()

  // Check if our API returned success: false
  if (data.success === false) {
    throw new Error(data.error || "Request failed")
  }

  return data.data
}

/**
 * Hook to fetch all servers from Exaroton
 * Automatically revalidates every 30 seconds
 * Revalidates on focus and reconnect
 */
export function useServers() {
  const { data, error, isLoading, isValidating, mutate } = useSWR<ExarotonServer[]>(
    "/api/exaroton/servers",
    fetcher,
    {
      refreshInterval: 30000, // Refresh every 30 seconds
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      dedupingInterval: 5000, // Dedupe requests within 5 seconds
    }
  )

  return {
    servers: data,
    error,
    isLoading,
    isValidating,
    mutate, // For manual revalidation
  }
}

/**
 * Hook to fetch a specific server by ID
 * Automatically revalidates every 30 seconds
 * Revalidates on focus and reconnect
 */
export function useServer(id: string | null) {
  const { data, error, isLoading, isValidating, mutate } = useSWR<ExarotonServer>(
    id ? `/api/exaroton/servers/${id}` : null, // Conditional fetching
    fetcher,
    {
      refreshInterval: 30000, // Refresh every 30 seconds
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      dedupingInterval: 5000,
      shouldRetryOnError: true,
      errorRetryCount: 3,
      errorRetryInterval: 5000,
    }
  )

  return {
    server: data,
    error,
    isLoading,
    isValidating,
    mutate,
  }
}

/**
 * Export the fetcher for use in other hooks or components
 */
export { fetcher }
