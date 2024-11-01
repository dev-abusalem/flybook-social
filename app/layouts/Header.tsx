import Image from "next/image";
import React from "react";
import logo from "@/public/icons/logo.svg";
import Link from "next/link";
import { ThemeMode } from "../theme/ThemeMode";
import Container from "./Container";
import { Search } from "lucide-react";
const Header = () => {
  return (
    <header className="md:h-[65px] z-50 bg-white dark:bg-slate-950 text-primary shadow sticky top-0 ">
      <Container>
        <div className="md:grid grid-cols-5 justify-between items-center md:h-[65px]">
          <div className="logo col-span-1">
            <Link href="/" className="text-xl font-semibold">
              FLYBOOK
            </Link>
          </div>
          <div className="col-span-3 w-full">
          
          <form className="flex items-center max-w-sm mx-auto">   
              <div className="relative w-full">
                  
                  <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full  p-2.5  dark:bg-slate-900 dark:border-slate-700 dark:placeholder-gray-400 dark:text-white outline-none " placeholder="Search here...." required />
              </div>
              <button type="submit" className="p-2.5 ms-2 text-sm font-medium text-white bg-primary rounded-lg border-primary border   focus:ring-4 focus:outline-none ">
                  <Search className="w-4 h-4" />
              </button>
          </form>

          </div>
          <div className="col-span-1 flex justify-end">
            <ThemeMode />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
