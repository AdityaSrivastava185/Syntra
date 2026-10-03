import React from "react";

const deployItems = [
  {
    title: "Private infrastructure.",
    description:
      "Run Tensorly within your own cloud, data center, or edge environment. Keep your models and data under your control .",
  },
  {
    title: "Tensorly Cloud.",
    description:
      "Build and deploy AI applications on Tensorly's managed infrastructure with scalable compute, APIs, and tools for production workloads.",
  },
  {
    title: "Cloud partners.",
    description:
      "Run Tensorly through supported cloud environments and use your existing infrastructure and cloud resources to deploy AI workloads.",
  },
];

const Features = () => {
  return (
    <section className="w-full border-b border-[#27272b]">
      <div className="container">
        <div className="flex flex-col gap-7 py-10">
          <div className="pt-10">
            <h2 className="text-5xl">
              Purpose-built coding models, at your fingertips.
            </h2>
          </div>
          <div>
            <p className="text-xl">
              Our unique mix of models delivers an unmatched combination of
              lightning-fast completions , deep code understanding
            </p>
          </div>
          <div className="border-y border-[#27272b]">
            <div className="grid grid-cols-1 md:gap-0 md:grid-cols-3 px-4 md:px-0">
              {deployItems.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start justify-between border border-[#27272b] p-5 py-10 rounded-sm md:min-h-0 md:h-[500px] md:rounded-none md:border-x md:border-y-0"
                >
                  <div>
                    <p className="text-3xl">{item.title}</p>
                  </div>

                  <div className="py-3 md:py-0">
                    <p>{item.description}</p>
                     <button className="bg-[#1a1a1e] text-foreground px-5 py-3 rounded-xl mt-3">
                    Explore More
                  </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
