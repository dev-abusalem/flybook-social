"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MonitorCog, Moon, Sun } from "lucide-react";

export function ThemeMode() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="  hover:opacity-70 transition-all"
          size="icon"
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="flex justify-start items-center gap-1"
          onClick={() => setTheme("light")}
        >
          <Sun size={18} />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex justify-start items-center gap-1"
          onClick={() => setTheme("dark")}
        >
          <Moon size={18} />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex justify-start items-center gap-1"
          onClick={() => setTheme("system")}
        >
          <MonitorCog size={18} />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
