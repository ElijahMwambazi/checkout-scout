import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "List price votes" });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: "Create price votes", body }, { status: 201 });
}
