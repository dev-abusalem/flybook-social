"use client";
import Image from "next/image";
import React, { useState } from "react";
import profile from "@/public/images/team-3.jpg";
import { ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { decodeToken } from "@/app/utils/decodeToken";

const HomePageTopPostForm = () => {

  const [caption, setCaption ] = useState<string>("")
  const [loading , setLoading] = useState<boolean>(false)
  const user = decodeToken()

  async function handleSubmit(e:React.FormEvent){
      e.preventDefault()
      try {
          setLoading(true)
          await axios.post(`/api/post/create`, { caption, userId:user?.id});
          setCaption("")
      } catch (error) {
          console.log(error)
      }finally{
        setLoading(false)
      }
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-start gap-x-4 items-start">
          <Image
            className="rounded-full"
            src={profile}
            alt="profile"
            width={45}
            height={45}
          />
          <textarea
            onChange={(e) => setCaption(e.target.value)}
            value={caption}
            rows={3}
            placeholder="Write what you want to share ."
            className="bg-gray-100 dark:bg-slate-900 dark:border-slate-800 dark:focus:border-slate-800  rounded-lg outline-none border-2  flex justify-start border-gray-200 focus:border-gray-300 py-2 px-3 w-full"
          ></textarea>
        </div>
        <div className="flex justify-end items-start mt-5">
          <div className="flex justify-end items-center gap-x-4">
            <div>
              <label htmlFor="upload__image">
                <ImageIcon className="text-primary cursor-pointer opacity-50 hover:opacity-90 transition-all" />
              </label>
              <input type="file" id="upload__image" className="hidden" />
            </div>
            <Button
              type="submit"
              disabled={caption.length === 0 || loading ? true : false}
              className=" px-6 py-1 h-[2.3rem] rounded-xl "
            >
              Post
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default HomePageTopPostForm;
