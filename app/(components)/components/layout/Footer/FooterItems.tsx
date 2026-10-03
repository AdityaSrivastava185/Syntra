import Link from "next/link";
import React from "react";

const footerItems = [
  {
    title: "Products",
    items: [
      { name: "Agents", href: "/" },
      { name: "Workbench", href: "/" },
      { name: "Model Lab", href: "/" },
      { name: "AI Solutions", href: "/" },
      { name: "Syntra Models", href: "/" },
      { name: "Syntra Compute", href: "/" },
    ],
  },

  {
    title: "Solutions",
    items: [
      { name: "Delivery methodology", href: "/" },
      { name: "Model customization", href: "/" },
      { name: "Coding", href: "/" },
      { name: "Document intelligence", href: "/" },
      { name: "Speech", href: "/" },
      { name: "Syntra for finance", href: "/" },
      { name: "Syntra for public institutions", href: "/" },
      { name: "Syntra for manufacturing", href: "/" },
      { name: "Syntra for energy & utilities", href: "/" },
    ],
  },

  {
    title: "Why Syntra",
    items: [
      { name: "About us", href: "/" },
      { name: "Careers", href: "/" },
      { name: "Partners", href: "/" },
      { name: "Our customers", href: "/" },
      { name: "Our models", href: "/" },
      { name: "Brand", href: "/" },
    ],
  },
  {
    title: "Company",
    items: [
      { name: "Terms of Service", href: "/" },
      { name: "Privacy Policy", href: "/" },
      { name: "Data processing agreement", href: "/" },
      { name: "Trust Center", href: "/" },
    ],
  },
];

const FooterItems = () => {
  return (
    <div>
      {/* Footer links */}
      <div className="container">
        <section className="section">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {footerItems.map((section) => (
              <div
                key={section.title}
                className="border-b border-[#27272b] sm:border-x sm:border-b lg:border-x lg:border-b-0"
              >
                <div className="p-5 sm:p-6 md:p-7">
                  <div className="pb-3">
                    <p className="text-xl text-[#6d6d78] md:text-xl">
                      {section.title}
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-2  md:text-md">
                    {section.items.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="transition-colors duration-200 hover:text-[#ff5229]"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Bottom footer */}
      <div className="border border-[#27272b]">
        <div className="container flex flex-col gap-5 border-x border-[#27272b] p-5 sm:p-6 md:flex-row md:items-center md:justify-between md:p-7">
          {/* Source */}
          <div className="text-lg">
            <span>
              Source and Inspiration from{" "}
              <Link
                href="https://mistral.ai/solutions/coding/"
                className="text-[#ff5229] transition-colors hover:text-[#ff5229]/80"
              >
                Mistral AI
              </Link>
            </span>
          </div>

          {/* Legal / brand links */}
          <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2 md:justify-end md:text-base">
            <Link href="" className="hover:text-[#ff5229]">
              Syntra
            </Link>

            <Link href="" className="hover:text-[#ff5229]">
              Privacy policy
            </Link>

            <Link href="" className="hover:text-[#ff5229]">
              Terms and conditions
            </Link>

            <Link href="" className="hover:text-[#ff5229]">
              Terms of use
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterItems;
