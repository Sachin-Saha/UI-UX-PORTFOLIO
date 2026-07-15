"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const links = [
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Case Studies", href: "#case-study" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50  transition-all  duration-500 ease-editorial ${
        scrolled
          ? "bg-bg/90 backdrop-blur-sm border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-container mx-auto px-6  md:px-[100px] flex items-center justify-between h-20">
        <a
          href="#top"
          className="font-display text-xl tracking-tight text-ink"
          aria-label="Sachin Saha — home"
        >
          Sachin Saha.
        </a>

        <ul className="hidden md:flex items-center gap-10 font-body text-[14px] text-ink/80">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="underline-hover">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
        href="/resume/Sachin_Saha_Resume.pdf"
          className="hidden md:inline-flex items-center gap-2 rounded-full border border-ink  text-ink px-5 py-2.5 text-[13px] transition-colors duration-300 hover:bg-ink/85 hover:text-white"
        >
          Resume
          <Download size={14} />
        </a>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden bg-bg border-b border-line px-6 pb-8"
        >
          <ul className="flex flex-col gap-5 pt-4 font-body text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume/Sachin_Saha_Resume.pdf"
                download="Sachin_Saha_Resume.pdf"
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-ink text-bg px-5 py-2.5 mt-2 text-[13px]"
              >
                Resume
                <Download size={14} />
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
