import { NextResponse } from "next/server"
import { getServers } from "@/lib/exaroton"

/**
 * GET /api/exaroton/servers
 * Returns list of all servers from Exaroton account
 */
export async function GET() {
  try {
    const servers = await getServers()

    return NextResponse.json({
      success: true,
      data: servers,
      error: null,
    })
  } catch (error) {
    console.error("[API] Error fetching servers:", error)

    return NextResponse.json(
      {
        success: false,
        data: null,
        error: error instanceof Error ? error.message : "Failed to fetch servers",
      },
      { status: 500 }
    )
  }
}
