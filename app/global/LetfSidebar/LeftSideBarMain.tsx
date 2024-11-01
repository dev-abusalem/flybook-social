"use client"
import { Bell, Bookmark, Home, Mail } from "lucide-react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

type Props = {};

const LeftSideBarMain = (props: Props) => {

  const path = usePathname()
 
  return (
    <div className="flex justify-start items-start flex-col gap-y-2 px-2">
      <Link href="/"  className={`flex relative border-r-4 ${ path === "" ? "border-primary" : "border-transparent"}  justify-start items-center gap-x-3 p-2 dark:hover:bg-slate-900 transition-all w-full dark:rounded-lg`}>
        <Home className="w-6 h-6" />
        <span>Home</span>
      </Link>
      <Link href="/notifications"  className={`flex relative border-r-4 ${ path === "/notifications" ? "border-primary" : "border-transparent"}  justify-start items-center gap-x-3 p-2 dark:hover:bg-slate-900 transition-all w-full dark:rounded-lg`}>
        <Bell className="w-6 h-6" />
        <span>Notifications</span>
        <span className="w-4 leading-4 text-center rounded-full h-4 text-[10px] bg-primary text-white  absolute top-1 left-[18px]">10</span>
      </Link>
      <Link href="/messages"  className={`flex relative border-r-4 ${ path === "/messages" ? "border-primary" : "border-transparent"}  justify-start items-center gap-x-3 p-2 dark:hover:bg-slate-900 transition-all w-full dark:rounded-lg`}>
        <Mail className="w-6 h-6" />
        <span>Messages</span>
        <span className="w-4 leading-4 text-center rounded-full h-4 text-[10px] bg-primary text-white  absolute top-1 left-[18px]">06</span>
      </Link>
      <Link href="/bookmarkes" className={`flex relative border-r-4 ${ path === "/bookmarkes" ? "border-primary" : "border-transparent"}  justify-start items-center gap-x-3 p-2 dark:hover:bg-slate-900 transition-all w-full dark:rounded-lg`}>
        <Bookmark className="w-6 h-6" />
        <span>Bookmark</span>
      </Link>
    </div>
  )
};

export default LeftSideBarMain;
