"use client";

import Logo from "./Logo";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <nav className="flex flex-col items-center justify-center gap-2 h-min relative w-min px-0">
      {/* Container - responsive gap and widths */}
      <div className="flex flex-row items-center justify-center gap-0 md:gap-2 xl:gap-2 h-min w-min px-0 flex-none">
        {/* Works Link */}
        <div className="flex-none h-auto relative w-[106px] md:w-auto xl:w-auto order-0">
          <NavLink href="/works">Works</NavLink>
        </div>

        {/* Logo */}
        <div className="flex-none h-auto relative w-[136px] order-1">
          <Logo href="/" />
        </div>

        {/* Playground Link */}
        <div className="flex-none h-auto relative w-[106px] md:w-[126px] xl:w-[126px] order-2">
          <NavLink href="/playground">Playground</NavLink>
        </div>
      </div>
    </nav>
  );
}
