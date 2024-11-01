import { prisma } from "@/app/lib/prisma";
import { NextResponse } from "next/server";
export async function POST(req: Request) {
  try {
    const { caption, imageUrl, userId } = await req.json();
    if (!caption || !userId) {
      return NextResponse.json(
        { error: "Caption and userId are required." },
        { status: 404 }
      );
    }

    // Create a new post in the database
    const newPost = await prisma.post.create({
      data: {
        caption,
        imageUrl: imageUrl || null,
        userId,
      },
    });
    return NextResponse.json({ post: newPost }, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
