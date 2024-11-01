import React from "react";
import profile from "@/public/images/team-3.jpg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const FollowCard = () => {
  return (
    <div className="flex justify-between items-center w-full ">
      <div className="flex justify-start items-center gap-x-2">
        <Image
          className="rounded-full"
          src={profile}
          alt="profile"
          width={45}
          height={45}
        />
        <div>
          <Link
            className="text-primary hover:underline transition-all"
            href="/"
          >
            John Doe
          </Link>
          <p className="text-xs text-gray-400">Developer</p>
        </div>
      </div>
      <Button className="rounded-2xl px-5">Follow</Button>
    </div>
  );
};

export default FollowCard;
