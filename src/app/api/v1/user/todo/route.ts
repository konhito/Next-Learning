import { NextResponse } from "next/server";
import { title } from "process";

export function GET() {
  const TODO = [
    { id: 1, title: "go gmym" },
    { id: 2, title: "go college" },
    { id: 3, title: "go home" },
  ];
  return NextResponse.json(TODO, { status: 200 });
}
export async function POST(res: Request) {
  const { todo } = await res.json();
  return NextResponse.json({
    msg: "successfully created todo",
  });
}
