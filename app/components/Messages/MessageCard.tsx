"use client";
import React, { useEffect, useState } from "react";
import profile from "@/public/images/team-3.jpg";
import Image from "next/image";
import { Bookmark, Heart, MessageSquare } from "lucide-react";
import Link from "next/link";

type Props = {
  texts: string;
};

const MessageCard: React.FC<Props> = ({ texts }) => {
  const [hashtags, setHashtags] = useState<string[]>([]);

  useEffect(() => {
    function extractHashtags() {
      const hashtagPattern = /#\w+/g;
      const foundHashtags = texts.match(hashtagPattern) || [];
      setHashtags(foundHashtags);
    }
    extractHashtags();
  }, [texts]);

  return (
    <div className="p-4 rounded-lg shadow w-full bg-white dark:bg-slate-950 flex flex-col gap-y-2 mb-4">
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
          <p className="text-gray-400 text-[12px]">1 hour ago</p>
        </div>
      </div>
      <div className="__post__text">
        <p>
          {texts.split(" ").map((word, index) =>
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
          <div className="flex justify-start items-center gap-x-1">
            <MessageSquare className="w-5 font-semibold" />
            <p>
              <span className="font-semibold">1 </span>comments
            </p>
          </div>
        </div>
        <div className="flex justify-end items-center gap-x-1">
          <Bookmark className="w-5 font-semibold" />
        </div>
      </div>
    </div>
  );
};

export default MessageCard;
