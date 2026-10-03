import Link from "next/link";
import React from "react";

const supportCarditems = [
  {
    title: "AI strategy.",
    description:
      "Identify the right opportunities for AI and turn promising ideas into practical production systems.",
    buttonText: "Explore AI Strategy",
    url: "/",
  },
  {
    title: "Implementation teams.",
    description:
      "Work with engineers and AI specialists to design, build, and launch systems around your organization.",
    buttonText: "Explore teams",
    url: "/",
  },
  {
    title: "Custom AI.",
    description:
      "Adapt models, workflows, and knowledge systems to fit your domain and specific business requirements.",
    buttonText: "Explore Custom AI",
    url: "/",
  },
];

const Workflows = () => {
  return (
    <section className="w-full border-b border-[#27272b]">
      <div className="container">
        <div className="py-10 flex flex-col gap-7">
          <div className="flex flex-col gap-10">
            <h2 className="text-5xl">Your developer team's advantage</h2>
            <p className="text-xl">
              Built for code generation and understanding, optimized for
              developer workflows.
            </p>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-0">
              {supportCarditems.map((item) => (
                <Link
                  href={""}
                  key={item.title}
                  className="flex flex-col items-start justify-between h-[420px] bg-[#1a1a1e] p-7 border border-[#27272b] group md:hover:bg-transparent"
                >
                  <div>
                    <p className="text-2xl">{item.title}</p>
                  </div>
                  <div>
                    <button className="flex flex-row items-center gap-1">
                      <span>{item.buttonText}</span>

                      <span className="text-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
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
                    <div className="grid grid-rows-[0fr] transition-all duration-300 ease-in-out md:group-hover:grid-rows-[1fr]">
                      <div className="md:overflow-hidden">
                        <p className="text-xl pt-2">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflows;
