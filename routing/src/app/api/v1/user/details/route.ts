import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({
    name: "John Doe",
    email: "idk@example.com",
  });
}
