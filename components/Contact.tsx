"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const links = [
  {
    label: "Email",
    href: "mailto:sachin.saha.official@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sachinsaha2004/",
    icon: Linkedin,
  },
  {
    label: "Behance",
    href: "https://www.behance.net/sachinsaha2",
    icon: () => (
      <span className="font-body text-[13px] font-semibold leading-none">
        Be
      </span>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/Sachin-Saha",
    icon: Github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-container mx-auto px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-[13px] tracking-[0.2em] uppercase text-muted mb-6"
        >
          — Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-balance text-4xl md:text-6xl leading-[1.12] text-ink mb-6 max-w-2xl mx-auto"
        >
          Let&rsquo;s build meaningful experiences together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-[15px] leading-relaxed text-muted max-w-md mx-auto mb-14"
        >
          I&rsquo;m currently open to internship opportunities and design
          collaborations. Whether you have a project in mind or just want to
          talk design, my inbox is always open.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {links.map(({ label, href, icon: Icon }, i) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-card px-8 py-6 transition-colors duration-300 hover:bg-blush/30"
            >
              <Icon size={18} strokeWidth={1.5} className="text-ink" />
              <span className="font-body text-[13px] text-ink">{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
