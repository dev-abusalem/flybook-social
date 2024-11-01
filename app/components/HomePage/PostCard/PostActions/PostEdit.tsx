import React, { useEffect, useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profile from "@/public/images/team-3.jpg";
import Image from 'next/image';

interface PostEditProps {
  children: React.ReactNode,
  postId:string,
  caption:string,
    userId:string
}

const PostEdit = ({ children,postId,caption,userId }: PostEditProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents the dropdown from closing
  };


  const [updateCaption, setUpdateCaption] = useState<string>("")

  useEffect(()=>{
    if(caption){
        setUpdateCaption(caption)
    }
  },[ caption])


 
  return (
    <AlertDialog >
      <AlertDialogTrigger asChild>
        <div onClick={handleClick}>{children}</div>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
        
        <AlertDialogTitle></AlertDialogTitle>
        
          <AlertDialogDescription>
            <form>
              <div className="flex justify-start gap-x-4 items-start">
                <Image
                  className="rounded-full"
                  src={profile}
                  alt="profile"
                  width={45}
                  height={45}
                />
                <textarea
                    value={updateCaption}
                    onChange={(e)=>setUpdateCaption(e.target.value)}
                  rows={3}
                  placeholder="Write what you want to share."
                  className="bg-gray-100 dark:bg-slate-900 dark:border-slate-800 dark:focus:border-slate-800 rounded-lg outline-none border-2 flex justify-start border-gray-200 focus:border-gray-300 py-2 px-3 w-full"
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
                    className="px-6 py-1 h-[2.3rem] rounded-xl"
                  >
                    Update
                  </Button>
                </div>
              </div>
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
           <AlertDialogCancel className='absolute -top-5 -right-5 '>X</AlertDialogCancel>
       </AlertDialogContent>
    </AlertDialog>
  );
};

export default PostEdit;
