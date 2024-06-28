"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
      {/* <Link href={"/"} className="flex items-center gap-2 md:py-2">
        <Image src={"/"} alt="logo" width={180} height={28} />
      </Link> */}
      <Logo />
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Menu
                size={30}
                className="hover:text-orange-400 transition-all"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
                <Logo textSize="text-2xl" logoSize="size-7" />
                {/* nav items */}
                <ul className="header-nav_elements">
                  {navLinks.map((item) => {
                    const isActive = item.route === pathname;
                    return (
                      <li
                        key={item.route}
                        className={`${
                          isActive && "text-orange-500 hover:text-orange-500"
                        } p-18 flex whitespace-nowrap text-gray-700 hover:text-yellow-500 transition-all`}
                      >
                        {/* sidebar-link */}
                        <Link className="flex gap-2" href={item.route}>
                          <Image
                            src={item.icon}
                            alt="logo"
                            width={24}
                            height={24}
                            className={`${
                              isActive && "brightness-50"
                            } brightness-500`}
                          />
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </SheetContent>
          </Sheet>
        </SignedIn>
        <SignedOut>
          <Button asChild className="button bg-purple-gradient">
            <Link href={"/sign-in"}>Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
