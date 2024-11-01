import prisma from "@/app/lib/prisma";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    // Create a new post in the database
    const posts = await prisma.post.findMany();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
