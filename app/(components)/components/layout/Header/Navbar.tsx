import Link from "next/link";
import React from "react";

const navItems = [
  "Products",
  "Industries",
  "Research",
  "Developers",
  "Blog",
  "Company",
];

const navItemClass = "px-5 py-3";

const Navbar = () => {
  return (
    <div className="w-full border-b border-[#27272b]">
      <nav className="container  bg-[#1a1a1e]">
        <div className="max-w-full  border-[#27272b]">
          <div className="flex items-center justify-between">
            <div className="flex items-center divide-x divide-[#27272b]">
              <div className={`${navItemClass} border-l border-[#27272b]`}>
                <h1>Syntra</h1>
              </div>

              <div className="hidden xl:flex divide-x divide-[#27272b] border-r border-[#27272b]">
                {navItems.map((item) => (
                  <div key={item} className={navItemClass}>
                    <Link href="/">{item}</Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="items-center divide-x divide-[#27272b] flex">
              <Link
                className={`${navItemClass} border-l border-[#27272b] hidden md:block`}
                href=""
              >
                Start building
              </Link>

              <Link
                className={`${navItemClass} bg-foreground text-background`}
                href=""
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
