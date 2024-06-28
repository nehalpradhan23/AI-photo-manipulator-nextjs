import { SwitchCamera } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = ({ textSize = "text-4xl", logoSize = "size-10" }) => {
  return (
    <Link href={"/"} className="sidebar-logo">
      <SwitchCamera className={`text-orange-400 ${logoSize}`} />
      <span
        className={`${textSize} font-bold bg-clip-text bg-gradient-to-b from-yellow-300 to-orange-600 text-transparent`}
      >
        PIXELVERT
      </span>
    </Link>
  );
};

export default Logo;
