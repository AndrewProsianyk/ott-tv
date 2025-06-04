import { NextResponse } from "next/server";
import data from "@/data.json";

export async function GET(request, context) {
  const { params } = context;
  const user = data.filter((d) => params.userId === d.id.toString());
  return NextResponse.json({
    user,
  });
}
