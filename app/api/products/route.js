import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    products: [
      {
        id: 1,
        name: "iPhone",
        cost: 1000,
      },
      {
        id: 2,
        name: "Samsung",
        cost: 2000,
      },
    ],
  });
}
