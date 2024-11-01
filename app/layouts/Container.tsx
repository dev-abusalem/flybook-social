import React from "react";

interface ContainerTypes {
  children: React.ReactNode;
  className?: string;
}

export const container_width = "1050px";

const Container = ({ children, className }: ContainerTypes) => {
  return (
    <div
      className={`${
        className ? className : ""
      } md:w-[${container_width}] md:px-10 mx-auto `}
    >
      {children}
    </div>
  );
};

export default Container;
