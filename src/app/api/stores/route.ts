import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "List stores" });
}

export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: "Create stores", body }, { status: 201 });
}
