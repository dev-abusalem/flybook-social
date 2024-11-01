"use client";
import React, { useEffect, useState } from "react";
import profile from "@/public/images/team-3.jpg";
import Image from "next/image";
import { Bookmark, Heart, MessageSquare, MoreHorizontal } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { decodeToken } from "@/app/utils/decodeToken";
import PostEdit from "./PostActions/PostEdit";
import { Post } from "@/app/types/post.type";
import { calculateTimeDifference } from "./logic/calculateTimeDifference";

type Props = {
  post:Post
};

const HomePostOnlyText: React.FC<Props> = ({ post}) => {
  const [hashtags, setHashtags] = useState<string[]>([]);

  const user = decodeToken();

  useEffect(() => {
    function extractHashtags() {
      const hashtagPattern = /#\w+/g;
      const foundHashtags = post.caption.match(hashtagPattern) || [];
      setHashtags(foundHashtags);
    }
    extractHashtags();
  }, [post.caption]);

  const handleEditClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation(); // Prevents the dropdown from closing
  };


  // comments 
  const [showComments , setShowComments] = useState<boolean>(false)


  // calculate time 
  const timeAgo = calculateTimeDifference(post.createdAt);

  return (
    <div className="p-4 relative rounded-lg shadow w-full bg-white dark:bg-slate-950 flex flex-col gap-y-2 mb-4">
      <div className="flex items-start gap-x-4">
        <Image
          className="rounded-full"
          src={profile}
          alt="profile"
          width={45}
          height={45}
        />
        <div className="leading-4">
          <h4 className="font-semibold">Abu Salem</h4>
          <p className="text-gray-400 text-[12px]">{timeAgo}</p>
        </div>
      </div>
      <div className="__post__text">
        <p>
          {post.caption.split(" ").map((word, index) =>
            word.startsWith("#") ? (
              <Link
                key={index}
                href={`#${word.substring(1)}`}
                className="text-primary hover:underline"
              >
                {word}
              </Link>
            ) : (
              word + " "
            )
          )}
        </p>
      </div>
      <div className="__post__has__tags">
        {hashtags.length > 0 && (
          <div>
            {hashtags.map((hashtag, index) => (
              <Link
                key={index}
                href={hashtag}
                className="text-primary hover:underline"
              >
                {hashtag}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div className="__post__footer pt-4 flex justify-between items-center">
        <div className="flex justify-start items-center gap-x-4">
          <div className="flex justify-start items-center gap-x-1">
            <Heart className="w-5 font-semibold" />
            <p>
              <span className="font-semibold">1 </span>like
            </p>
          </div>
          <button onClick={()=>setShowComments(!showComments)} className="flex justify-start items-center gap-x-1">
            <MessageSquare className="w-5 font-semibold" />
            <p>
              <span className="font-semibold">1 </span>comments
            </p>
          </button>
        </div>
        <div className="flex justify-end items-center gap-x-1">
          <Bookmark className="w-5 font-semibold" />
        </div>
      </div>
      {user?.id === post.userId && (
        <div className="absolute top-5 right-5">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-8 w-8 p-0 outline-none border-none"
              >
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="w-full block cursor-pointer" onClick={handleEditClick}>
                <PostEdit caption={post.caption} userId={post.userId} postId={post.id} >Edit</PostEdit>
              </DropdownMenuItem>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}

      {
        showComments &&
        <div className="__comments_section mt-2 pt-2 ml-5 border-t border-slate-200 dark:border-slate-700">
        All related comments
      </div>
      }
      
    </div>
  );
};

export default HomePostOnlyText;
