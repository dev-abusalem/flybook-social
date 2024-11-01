import React from "react";
import profile from "@/public/images/team-3.jpg";
import Image from "next/image";
import { Bookmark, Heart, MessageSquare } from "lucide-react";
import ImageModal from "@/app/global/ImageModal";

type Props = {
  images: string[]; // Array of image URLs
};

const HomePostCard: React.FC<Props> = ({ images }) => {
  const getImageElements = () => {
    return images.map((img, index) => (
      <div key={index} className="w-full h-full p-1">
        <ImageModal image={img}>
          <Image
            src={img}
            alt={`postImg${index}`}
            layout="fill"
            objectFit="cover"
            className="rounded-2xl"
          />
        </ImageModal>
      </div>
    ));
  };

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
        <p>Subscribe to our channel</p>
      </div>
      <div className="__post__has__tags">
        <a href="#endregion" className="text-primary hover:underline">
          #endregion
        </a>
      </div>
      <div className="__post__images grid gap-3">
        {images.length === 1 && (
          <div className="relative w-full h-[400px]">
            <ImageModal image={images[0]}>
              <Image
                src={images[0]}
                alt="postImg1"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </ImageModal>
          </div>
        )}
        {images.length === 2 && (
          <div className="grid grid-cols-2 gap-3">
            {getImageElements().map((element, index) => (
              <div key={index} className="relative w-full h-[400px]">
                {" "}
                {/* Adjust height as needed */}
                {element}
              </div>
            ))}
          </div>
        )}
        {images.length === 3 && (
          <div className="grid grid-cols-2 gap-3">
            {images.slice(0, 2).map((img, index) => (
              <div key={index} className="relative w-full h-[400px]">
                <ImageModal image={img}>
                  <Image
                    src={img}
                    alt={`postImg${index}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </ImageModal>
              </div>
            ))}
            <div className="relative col-span-2 w-full h-[400px]">
              <ImageModal image={images[2]}>
                <Image
                  src={images[2]}
                  alt="postImg3"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </ImageModal>
            </div>
          </div>
        )}
        {images.length > 3 && (
          <div className="grid grid-cols-2 gap-3">
            {images.slice(0, 3).map((img, index) => (
              <div key={index} className="relative w-full h-[400px]">
                <ImageModal image={img}>
                  <Image
                    src={img}
                    alt={`postImg${index}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </ImageModal>
              </div>
            ))}
            <div className="relative col-span-1 w-full h-[400px] flex justify-center items-center bg-gray-200 rounded-2xl">
              <p className="text-gray-600">+{images.length - 3} more</p>
            </div>
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

export default HomePostCard;
