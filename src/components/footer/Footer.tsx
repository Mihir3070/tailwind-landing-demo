import React from "react";
// import { FaLinkedinIn, FaYoutube, FaXTwitter } from "react-icons/fa6";

type FooterLink = {
  label: string;
  href: string;
};

type FooterSection = {
  title: string;
  links: FooterLink[];
};

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "What is ClickLearn?", href: "#" },
      { label: "Why use ClickLearn?", href: "#" },
      { label: "How to use ClickLearn?", href: "#" },
      { label: "Features", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    title: "Integrations",
    links: [
      { label: "Microsoft Dynamics", href: "#" },
      { label: "Microsoft ISVs", href: "#" },
      { label: "IFS", href: "#" },
      { label: "SAP", href: "#" },
      { label: "Oracle", href: "#" },
      { label: "Salesforce", href: "#" },
      { label: "Acumatica", href: "#" },
      { label: "Windows, Web and Office", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Podcast", href: "#" },
      { label: "eBooks", href: "#" },
      { label: "Webinars", href: "#" },
      { label: "Community", href: "#" },
      { label: "Events", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#" },
      { label: "Partner Program", href: "#" },
      { label: "Strategic Alliances", href: "#" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0E2742] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="col-span-full lg:col-span-1 text-center lg:text-left">
            <div className="block items-center gap-2 mb-4 lg:flex">
              <span className="text-xl font-semibold">ClickLearn</span>
            </div>

            <p className="text-sm text-blue-100 leading-relaxed">
              Digital Adoption & User Training
              <br />
              <br />
              Auto-produce & update training content and documentation in
              7 different formats and 45 languages with just a few clicks.
            </p>
          </div>

          {/* Footer Sections */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-blue-100">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-900 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-200">
          <span>© 2026 · ClickLearn</span>

          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Cookie Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Terms & Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4 text-lg">
            <a href="#" className="hover:text-white">
              {/* <FaLinkedinIn /> */}
            </a>
            <a href="#" className="hover:text-white">
              {/* <FaXTwitter /> */}
            </a>
            <a href="#" className="hover:text-white">
              {/* <FaYoutube /> */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
