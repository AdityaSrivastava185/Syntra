import Link from "next/link";
import React from "react";

const FooterCta = () => {
  return (
    <div className="relative mt-12 md:mt-20">
      <div className="flex flex-col items-start justify-between gap-8 bg-[#ff5229] p-6 sm:p-8 md:flex-row md:items-center md:gap-6 md:p-10 lg:p-20">
        {/* Heading */}
        <div className="w-full pb-3 md:flex-1">
          <div>
            <p className="text-sm font-thin sm:text-base">
              BUILD YOUR OWN AI IDEA
            </p>
          </div>

          <div className="mt-3 max-w-4xl">
            <p className="text-2xl leading-tight sm:text-4xl xl:text-5xl">
              Transform software development, with complete control.
            </p>
          </div>
          <p className="text-sm">
            Image Source -{" "}
            <Link
              href={"https://mistral.ai/"}
              className="text-sm text-foreground underline"
            >
              Mistral AI
            </Link>
          </p>
        </div>

        {/* Buttons */}
        <button className="flex w-full items-center justify-between gap-3 rounded-md bg-foreground p-3 md:px-4 md:py-3 text-sm text-background sm:w-auto sm:text-lg">
          <span>Contact for sales</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0"
          >
            <path d="m6 17 5-5-5-5" />
            <path d="m13 17 5-5-5-5" />
          </svg>
        </button>
      </div>

      {/* Noise overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 size-full bg-[url('/images/noise-rectangle.png')] bg-repeat bg-size-[160px_160px] mix-blend-plus-lighter"
        aria-hidden="true"
      />
    </div>
  );
};

export default FooterCta;
