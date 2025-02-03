import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  return NextResponse.json(
    {
      msg: `Hello ${username}`,
    },
    { status: 200 }
  );
}
