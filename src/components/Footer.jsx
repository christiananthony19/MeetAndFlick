import React from 'react';
import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import logoPic from '../assets/images/BgSub_LogoPic3.png'
import logoName from '../assets/images/BgSub_LogoCaptureX3.png'

const LINKS = [
  {
    title: "About Us",
    items: ["Mission and Vision", "Who we Are"],
  },
  {
    title: "Terms and Condition",
    items: ["Privacy", "Terms and Condition"],
  },
  {
    title: "Resource",
    items: ["Blog", "Costumer Service", "Help center"],
  },
];

const currentYear = new Date().getFullYear();

const Footer =() => {
  return (
    <footer className="relative w-full bg-cyan-800 text-slate-50">
      <div className="mx-auto w-full max-w-7xl px-8 ">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2 pt-7 ">
        <div className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-11 w-auto"
                src={logoName}
                alt="M&F Logo"
              />
          </div>
          <div className="grid grid-cols-3 justify-between gap-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <h6 className="mb-3 text-sm font-medium opacity-40">{title}</h6>
                {items.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <p className="mb-4 text-center text-sm font-normal text-blue-gray-900 md:mb-0">
            Ticketing Inc&copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/"></a>. All
            Rights Reserved.
          </p>
          <div className="flex gap-4 text-blue-gray-900 sm:justify-center">
            {/* Facebook Logo */}
            <a
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
              aria-label="Facebook"
            >
              <FaFacebook className="h-5 w-5" />
            </a>
            {/* GitHub Logo */}
            <a
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            {/* Twitter Logo */}
            <a
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
              aria-label="Twitter"
            >
              <FaTwitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;