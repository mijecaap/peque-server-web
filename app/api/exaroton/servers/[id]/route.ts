import { NextResponse } from "next/server"
import { getServer } from "@/lib/exaroton"

/**
 * GET /api/exaroton/servers/[id]
 * Returns a specific server by ID
 */
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params

    if (!id) {
      return NextResponse.json(
        {
          success: false,
          data: null,
          error: "Server ID is required",
        },
        { status: 400 }
      )
    }

    const server = await getServer(id)

    return NextResponse.json({
      success: true,
      data: server,
      error: null,
    })
  } catch (error) {
    console.error(`[API] Error fetching server:`, error)

    // Check if it's a 404 error
    const errorMessage = error instanceof Error ? error.message : "Failed to fetch server"
    const status = errorMessage.includes("not found") ? 404 : 500

    return NextResponse.json(
      {
        success: false,
        data: null,
        error: errorMessage,
      },
      { status }
    )
  }
}
