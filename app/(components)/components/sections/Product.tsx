import React from "react";

const deployItems = [
  {
    title: "Customization for coding excellence.",
    description:
      "Further enhance our purpose-built coding models by training and integrating them with your proprietary code, knowledge bases, and technology stacks for deep contextual understanding, information retrieval, and workflow automation.",
  },
  {
    title: "Coding agents for all surfaces.",
    description:
      "Offload migrations, refactors, and feature work to autonomous coding agents powered by frontier models, available across terminal, IDE, and web. Write, test, debug, and document with full codebase understanding and deep awareness of project structure, dependencies, and file relationships.",
  },
  {
    title: "From use case to production value",
    description:
      "Design high-impact coding use cases aligned with your engineering goals and workflows, deploy securely at enterprise scale across public cloud, private infrastructure, or on‑prem, and move from proof of value to full rollout with expert enablement and measurable outcomes without compromising privacy",
  },
];

const Product = () => {
  return (
    <section className="w-full">
      <div className="container">
        <div>
          <div>
            <div className="grid grid-cols-1 md:gap-0 md:grid-cols-3 px-4 md:px-0">
              {deployItems.map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-start justify-between border border-[#27272b] p-5 py-10 md:min-h-0 md:h-[500px] md:rounded-none md:border-x md:border-y-0"
                >
                  <div>
                    <p className="text-3xl">{item.title}</p>
                  </div>

                  <div className="py-3 md:py-0 block md:hidden xl:block">
                    <p>{item.description}</p>
                  </div>
                  <button className="bg-[#1a1a1e] text-foreground px-5 py-3 rounded-xl mt-3">
                    Explore More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
