import React from "react";

interface UsageWorkTitleProps {
  title: string;
}

const UsageWorkTitleCard = ({ title }: UsageWorkTitleProps) => {
  return (
    <div className="border-b border-[#27272b] w-full px-5 py-3">
      <h2 className="text-lg">{title}</h2>
    </div>
  );
};

export default UsageWorkTitleCard;