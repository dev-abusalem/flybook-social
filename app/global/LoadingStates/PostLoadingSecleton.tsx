import React from 'react'
import { Skeleton } from "@/components/ui/skeleton"
const PostLoadingSecleton = () => {
  return (
    <div className="p-4 rounded-lg shadow w-full bg-white dark:bg-slate-950 flex flex-col gap-y-2 mb-4">
      <div className="flex items-start gap-x-4">
        <Skeleton
          className="rounded-full w-[45px] h-[45px]"
            
        />
        <div className="leading-4">
        <Skeleton className="h-6 w-12" />
        <Skeleton className="h-4 w-16 mt-1" />
        </div>
      </div>
      <div className="__post__text">
        <p>
           
        </p>
      </div>
      <div className="__post__has__tags">
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 mt-2 w-full"  />

      </div>

      <div className="__post__footer pt-4 flex justify-between items-center">
        <div className="flex justify-start items-center gap-x-4">
          <div className="flex justify-start items-center gap-x-1">
          <Skeleton className="h-4 w-6" />
          </div>
          <div className="flex justify-start items-center gap-x-1">
          <Skeleton className="h-4 w-6" />
          </div>
        </div>
        <div className="flex justify-end items-center gap-x-1">
        <Skeleton className="h-4 w-4" />
        </div>
      </div>
    </div>
  )
}

export default PostLoadingSecleton