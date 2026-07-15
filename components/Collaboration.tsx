"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Collaboration() {
  return (
    <section className="py-24 md:py-28 ">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="relative overflow-hidden rounded-[32px] bg-dark text-bg px-8 py-16 md:px-16 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 md:right-[-4rem] md:top-1/2 md:-translate-y-1/2 w-72 h-72 md:w-96 md:h-96 rounded-full bg-bg/[0.07] border border-bg/10"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute right-10 top-16 md:right-32 md:top-1/2 md:-translate-y-1/3 w-40 h-40 rounded-full bg-bg/10"
          />

          <div className="relative max-w-lg">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-[13px] tracking-[0.2em] uppercase text-bg/60 mb-8"
            >
              — Collaboration
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-balance text-4xl md:text-5xl leading-[1.12] mb-7"
            >
              Let&rsquo;s design experiences that matter.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-body text-[15px] leading-relaxed text-bg/70 max-w-sm mb-10"
            >
              I love working with teams and founders who care about the
              details. If you&rsquo;re building something thoughtful,
              I&rsquo;d be glad to help shape it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-bg text-ink px-6 py-3.5 text-[13px] transition-colors duration-300 hover:bg-blush"
              >
                Get in touch
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
