import React from "react";

const deployItems = [
  {
    title: "Private infrastructure.",
    description:
      "Run Syntra within your own cloud, data center, or edge environment. Keep your models and data under your control .",
  },
  {
    title: "Syntra Cloud.",
    description:
      "Build and deploy AI applications on Syntra's managed infrastructure with scalable compute, APIs, and tools for production workloads.",
  },
  {
    title: "Cloud partners.",
    description:
      "Run Syntra through supported cloud environments and use your existing infrastructure and cloud resources to deploy AI workloads.",
  },
];

const Features = () => {
  return (
    <section className="w-full border-b border-border-primary">
      <div className="container">
        <div className="px-4 xl:px-0 flex flex-col gap-7 pb-10 xl:pb-0 xl:py-10">
          <div className="pt-10 md:max-w-lg xl:max-w-full">
            <h2 className=" text-4xl xl:text-5xl">
              Purpose-built coding models, at your fingertips.
            </h2>
          </div>
          <div className="md:max-w-lg xl:max-w-full">
            <p className="text-xl">
              Our unique mix of models delivers an unmatched combination of
              lightning-fast completions , deep code understanding
            </p>
          </div>
          <div className="md:border-y border-border-primary">
            <div className="grid grid-cols-1 md:gap-0 md:grid-cols-3 px-4 md:px-0">
              {deployItems.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start justify-between border border-border-primary p-5 py-10 rounded-sm md:min-h-0 md:h-[500px] md:rounded-none md:border-x md:border-y-0"
                >
                  <div>
                    <p className="text-3xl">{item.title}</p>
                  </div>

                  <div className="py-3 md:py-0">
                    <p>{item.description}</p>
                     <button className="bg-background-secondary text-foreground px-5 py-3 rounded-xl mt-3">
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
