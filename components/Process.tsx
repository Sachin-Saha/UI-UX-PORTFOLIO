"use client";

import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Research",
    description:
      "Gather context, talk to users, and map the problem space before proposing any solution.",
  },
  {
    n: "02",
    title: "Ideate",
    description:
      "Explore directions widely — sketches, flows, and quick concepts to find the strongest path.",
  },
  {
    n: "03",
    title: "UI Design",
    description:
      "Shape the chosen direction into a polished, systematic, and accessible interface.",
  },
  {
    n: "04",
    title: "Prototype & Test",
    description:
      "Bring it to life, put it in front of people, and refine based on what we learn.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-[13px] tracking-[0.2em] uppercase text-muted mb-3"
        >
          — Method
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-5xl text-ink mb-4"
        >
          My design process
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-[15px] text-muted max-w-md mb-16"
        >
          A simple, repeatable rhythm that keeps the work honest — from first
          question to tested outcome.
        </motion.p>

        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line font-body text-[12px] text-muted mb-6">
                {step.n}
              </span>
              <h3 className="font-display text-2xl text-ink mb-3">
                {step.title}
              </h3>
              <p className="font-body text-[14px] leading-relaxed text-muted">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
