"use client";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SwitchCamera } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import Logo from "./Logo";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        {/* <Link href={"/"} className="sidebar-logo">
          <SwitchCamera className="text-orange-400 size-10" />
          <span className="text-4xl font-bold bg-clip-text bg-gradient-to-b from-yellow-300 to-orange-600 text-transparent">
            PIXELVERT
          </span>
        </Link> */}
        <Logo />
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 6).map((item) => {
                const isActive = item.route === pathname;
                return (
                  <li
                    key={item.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-gradient-to-br to-yellow-400 to from-orange-600 text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Link className="sidebar-link" href={item.route}>
                      <Image
                        src={item.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />

                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* separator ====================================== */}
            <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((item) => {
                const isActive = item.route === pathname;
                return (
                  <li
                    key={item.route}
                    className={`sidebar-nav_element group ${
                      isActive
                        ? "bg-gradient-to-br to-yellow-400 to from-orange-600 text-white"
                        : "text-gray-700"
                    }`}
                  >
                    <Link className="sidebar-link" href={item.route}>
                      <Image
                        src={item.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />

                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl="/" showName />
              </li>
            </ul>
          </SignedIn>

          <SignedOut>
            <Button asChild className="button bg-purple-gradient">
              <Link href={"/sign-in"}>Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
