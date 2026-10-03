import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full">
      <div className="pt-20 xl:pt-0 xl:h-[27rem]">
        <div className="container h-full">
          <div
            className="
              flex h-full w-full flex-col items-start justify-end
              px-4 sm:px-6 md:px-8
              xl:flex-row xl:items-end xl:justify-between
              xl:gap-7
              xl:border-x xl:border-[#27272b]
              xl:px-10
            "
          >
            {/* Left */}
            <div className="w-full xl:px-10">
              <p className="text-[#6d6d78]">Solutions Coding</p>

              <h1 className="py-3 text-4xl leading-tight sm:text-5xl xl:pt-7 xl:text-6xl">
                Transform how your teams build software.
              </h1>
            </div>

            {/* Right */}
            <div
              className="
                w-full border-[#27272b]
                xl:h-full xl:max-w-[30%]
                xl:border-l xl:border-t-0
                xl:px-10 xl:pt-0
                xl:flex xl:items-end
              "
            >
              <div className="flex w-full flex-col gap-7 pb-7">
                <p className="text-lg leading-relaxed sm:text-xl">
                  Designed for organizations that demand both cutting-edge
                  performance and enterprise-grade security.
                </p>

                <button className="w-fit rounded-xl bg-foreground px-5 py-3 text-background">
                  Talk to our experts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-y border-[#27272b]">
        <div className="container bg-[#1a1a1e] p-5 md:p-7 xl:p-10">
          <Image
            src="/images/hero-image01.webp"
            width={1700}
            height={800}
            alt="hero image"
            className="h-auto w-full object-cover"
          />

          <p className="text-right text-xs xl:text-base">
            Image Source -{" "}
            <Link
              href="https://mistral.ai/solutions/coding/"
              className="text-amber-400"
            >
              Mistral AI
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;