import { NextResponse } from "next/server";

export async function POST(res: Request) {
  const { usrename, password } = await res.json();
  return NextResponse.json(
    {
      msg: "Succesfully SingedUp",
    },
    { status: 200 }
  );
}
