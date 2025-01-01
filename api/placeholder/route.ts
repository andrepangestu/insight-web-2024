import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function POST() {
  return NextResponse.json(
    { error: "Method POST Not Allowed" },
    { status: 405 }
  );
}
