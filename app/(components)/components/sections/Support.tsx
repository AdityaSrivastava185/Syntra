import React from "react";
import Product from "./Product";

const Support = () => {
  return (
    <section className="w-full">
      <div className="py-10 flex flex-col gap-7">
        <div className="text-center xl:max-w-5xl mx-auto pt-10">
          <h2 className="xl:text-7xl">AI coding solutions tailored for you, under your control.</h2>
        </div>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl">
            Partner with Mistral's expert team to build your fully integrated
            and private coding assistant that understands your codebase{" "}
          </p>
        </div>
      </div>
      <div className="w-full border-y border-[#27272b]">
        <Product/>
      </div>
    </section>
  );
};

export default Support;
