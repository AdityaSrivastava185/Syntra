import Image from "next/image";
import React from "react";
import { UsageWorkCardProps } from "@/types/UsageWorkType";
import Link from "next/link";

const UsageCard = ({
  title,
  description,
  buttonText,
  image,
  imageAlt = "content image",
  tags,
}: UsageWorkCardProps) => {
  return (
    <div>
      {/* Header */}
      <div className="border-y border-border-primary">
        <div className="flex flex-col md:flex-row min-h-26 w-full items-start md:itms-center justify-between px-4 py-6 md:px-6 gap-4 md:gap-0">
          <div>
            <p className="text-3xl md:text-4xl xl:text-5xl">{title}</p>
          </div>

          <button className=" md:hidden xl:flex items-center gap-3 rounded-md bg-background-tertiary px-4 py-3 text-lg w-full md:w-fit">
            <span className="text-md lg:text-base">{buttonText}</span>

            <span className="text-lg">
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
                className="lucide lucide-chevrons-right preview-icon"
              >
                <path d="m6 17 5-5-5-5" />
                <path d="m13 17 5-5-5-5" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Description */}
      <div className="px-4 py-6 md:px-6">
        <p className="text-lg md:text-xl">{description}</p>
      </div>

      {/* Image + Tags */}
      <div className="p-4 md:px-6">
        <Image
          src={image}
          width={1700}
          height={1200}
          alt={imageAlt}
          className="h-auto w-full object-contain"
        />
        <p className="text-sm">
          Image Source -
          <Link
            href={"https://mistral.ai/"}
            className="text-orange-600 text-sm"
          >
            Mistral AI
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UsageCard;
