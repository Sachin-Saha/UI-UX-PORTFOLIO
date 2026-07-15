"use client";

import { motion } from "framer-motion";
import { Figma, Smile } from "lucide-react";

type Tool =
  | { name: string; kind: "icon"; icon: typeof Figma }
  | { name: string; kind: "badge"; label: string };

const tools: Tool[] = [
  { name: "Figma", kind: "icon", icon: Figma },
  { name: "FigJam", kind: "icon", icon: Smile },
  { name: "Adobe Photoshop", kind: "badge", label: "Ps" },
  { name: "Adobe Illustrator", kind: "badge", label: "Ai" },
  { name: "Notion", kind: "badge", label: "N" },
];

const cardVariants = {
  rest: {
    backgroundColor: "#FFFFFF",
    y: 0,
    boxShadow: "0 1px 2px rgba(17,17,17,0.04)",
  },
  hover: {
    backgroundColor: "#F5E8E8",
    y: -8,
    boxShadow: "0 20px 40px -12px rgba(17,17,17,0.16)",
  },
};

const iconVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.12,
    rotate: -6,
    transition: { type: "spring" as const, stiffness: 320, damping: 14 },
  },
};

export default function Tools() {
  return (
    <section className="py-20 md:py-24 ">
      <div className="max-w-container mx-auto px-6 md:px-[50px] py-10 ">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-[13px] tracking-[0.2em] uppercase text-muted mb-3"
        >
           — Toolkit
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-3xl md:text-5xl text-ink mb-3"
        >
          Tools I use
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-[14px] text-muted mb-12 max-w-md"
        >
          A focused set of tools I reach for across research, ideation, and
          high-fidelity design.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-9">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <motion.div
                initial="rest"
                whileHover="hover"
                whileTap="hover"
                animate="rest"
                variants={cardVariants}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
className="
group
w-full
h-40
flex
flex-col
items-center
justify-center
gap-5
rounded-[28px]
border
px-6
cursor-default
"              >
                <motion.div variants={iconVariants}>
                  {tool.kind === "icon" ? (
                    <tool.icon
                      size={40}
                      strokeWidth={1.3}
                      className="text-ink"
                    />
                  ) : (
                    <span className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-ink text-bg font-body text-[15px] font-semibold tracking-tight">
                      {tool.label}
                    </span>
                  )}
                </motion.div>
                <span className="font-body text-[13px] text-ink">
                  {tool.name}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
