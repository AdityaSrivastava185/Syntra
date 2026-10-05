import React from "react";
import UsageCard from "../utility/UsageCard";
import UsageWorkTitleCard from "../ui/UsageWorkTitleCard";

const autonomousWorkItems = [
  {
    title: "Accelerate development cycle.",
    description:
      "Reduce time-to-market with a copilot that understands your coding standards and processes",
    buttonText: "Dev cycles",
    image: "/images/image01.webp",
    imageAlt: "Intelligent agents",
    tags: [
      "MULTI-STEP REASONING",
      "TOOL USE",
      "TASK AUTOMATION",
      "WORKFLOW EXECUTION",
      "PERSISTENT CONTEXT",
    ],
  },

  {
    title: "Enhance code quality.",
    description:
      "Quickly understand complex codebases with intelligent exploration and contextual explanation",
    buttonText: "code quality",
    image: "/images/image02.webp",
    imageAlt: "Knowledge systems",
    tags: [
      "KNOWLEDGE SEARCH",
      "DOCUMENT UNDERSTANDING",
      "SEMANTIC RETRIEVAL",
      "PRIVATE DATA",
    ],
  },

  {
    title: "Streamline onboarding.",
    description:
      "Experiment with models, evaluate their behavior, and adapt them for the problems that matter to your organization.",
    buttonText: "Onboarding",
    image: "/images/image03.webp",
    imageAlt: "Model development",
    tags: ["MODEL EVALUATION", "FINE-TUNING", "BENCHMARKING", "REASONING"],
  },

  {
    title: "Standardize best practices",
    description:
      "Embed your organization's coding standards and architectural patterns directly into completion suggestions.",
    buttonText: "Best practices",
    image: "/images/image04.webp",
    imageAlt: "Production AI",
    tags: ["AI DEPLOYMENT", "SCALABLE INFERENCE", "OBSERVABILITY", "SECURITY"],
  },
];

const Usages = () => {
  return (
    <section className="w-full">
      <div className="border-b border-border-primary">
        <div className="container">
          <div className="py-7 pt-32 px-4 xl:px-0">
            <h2 className="text-4xl xl:text-5xl">How enterprise teams use Syntra Vibe.</h2>
          </div>
        </div>
      </div>

      <div className="border-b border-border-primary">
        <div className="container">
          <section className="section w-full md:px-10">
            <div className="mx-auto w-full max-w-432">
              <div className="grid grid-cols-1 md:grid-cols-11 xl:grid-cols-10 md:gap-6">
                {/* LEFT */}
                <div className="hidden md:col-span-3 xl:col-span-2 md:block">
                  <div className="sticky top-10 my-10 overflow-hidden rounded-xl border border-border-primary">
                    <UsageWorkTitleCard title="Accelerated development cycle" />
                    <UsageWorkTitleCard title="Enhance code quality" />
                    <UsageWorkTitleCard title="Streamline onboarding" />
                    <UsageWorkTitleCard title="Standardize best practices" />
                  </div>
                </div>

                {/* RIGHT */}
                <div className="col-span-1 border-border-primary md:col-span-8 md:border-x">
                  {autonomousWorkItems.map((item) => (
                    <UsageCard key={item.title} {...item} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Usages;
