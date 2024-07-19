import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    const job_id = req.nextUrl.searchParams.get("id")
    const res = await fetch(`http://localhost:8000/api/v1/paper/eagle-run/${job_id}`)

    const data = await res.json()

    return NextResponse.json(data)
}
