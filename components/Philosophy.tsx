"use client";

import { motion } from "framer-motion";

const keywords = ["Empathy", "Simplicity", "Purpose"];

export default function Philosophy() {
  return (
    <section className="relative py-28 md:py-36 ">
      <div className="max-w-container mx-auto px-6 md:px-10 text-center">
        <motion.span
          aria-hidden
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="font-display italic text-[9rem] md:text-[12rem] leading-none text-ink/[0.06] select-none block -mb-16 md:-mb-24"
        >
          &ldquo;
        </motion.span>

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative font-display text-balance text-3xl md:text-4xl leading-[1.4] text-ink max-w-2xl mx-auto"
        >
          Good design isn&rsquo;t decoration — it&rsquo;s the quiet removal of
          everything that stands between a person and what they came to do.
        </motion.blockquote>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 font-body text-[13px] tracking-wide uppercase text-muted"
        >
          — Sachin Saha
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-14 flex items-center justify-center gap-6 md:gap-10"
        >
          {keywords.map((word, i) => (
            <span key={word} className="flex items-center gap-6 md:gap-10">
              <span className="font-body text-[12px] tracking-[0.2em] uppercase text-muted">
                {word}
              </span>
              {i < keywords.length - 1 && (
                <span className="h-1 w-1 rounded-full bg-ink/30" aria-hidden />
              )}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
