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
    <div className="w-full border-b border-border-primary">
      <nav className="container  bg-background-secondary">
        <div className="max-w-full  border-border-primary">
          <div className="flex items-center justify-between">
            <div className="flex items-center divide-x divide-border-primary">
              <div className={`${navItemClass} border-l border-border-primary`}>
                <h1>Syntra</h1>
              </div>

              <div className="hidden xl:flex divide-x divide-border-primary border-r border-border-primary">
                {navItems.map((item) => (
                  <div key={item} className={navItemClass}>
                    <Link href="/">{item}</Link>
                  </div>
                ))}
              </div>
            </div>

            <div className="items-center divide-x divide-border-primary flex">
              <Link
                className={`${navItemClass} border-l border-border-primary hidden md:block`}
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
