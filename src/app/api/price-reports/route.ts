import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "List price reports" });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: "Create price reports", body }, { status: 201 });
}
