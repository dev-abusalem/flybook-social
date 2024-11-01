import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
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
} from "@/components/ui/alert-dialog"

type Props = {
  children: React.ReactNode;
  image: string;
};

function ImageModal({ children, image }: Props) {
  return (
     
    <AlertDialog >
    <AlertDialogTrigger>{children}</AlertDialogTrigger>
    <AlertDialogContent className="p-0 border-none bg-transparent">
      <AlertDialogHeader>
         <AlertDialogDescription>
         <Carousel>
            <CarouselContent>
              {
                [1,2,3,4].map((item)=> <CarouselItem key={item}>
                <Image
                  src={image}
                  alt="images"
                  width={500}
                  height={500}
                  className="rounded-2xl w-full h-auto"
                />
                </CarouselItem>)
              }
            </CarouselContent>
            <CarouselPrevious />
         <CarouselNext />
        </Carousel>
        </AlertDialogDescription>
      </AlertDialogHeader>
       <AlertDialogCancel className="absolute -top-4 -right-4  p-0 w-8 h-8 bg-red-600 border-none text-white rounded-full">X</AlertDialogCancel>
     </AlertDialogContent>
  </AlertDialog>
  
  );
}

export default ImageModal;
