"use client";

import { motion } from "framer-motion";
import { Search, LayoutGrid, PenTool } from "lucide-react";

const items = [
  {
    icon: Search,
    title: "UX Research",
    description:
      "Understanding people through interviews, journey mapping, and usability testing to ground every decision in real behavior.",
    tags: ["User Interviews", "Journey Maps", "Usability Testing"],
  },
  {
    icon: LayoutGrid,
    title: "Wireframing & Prototyping",
    description:
      "Translating ideas into low- and high-fidelity flows, then prototyping interactions to validate before a single pixel is polished.",
    tags: ["Flows", "Lo-fi", "Interactive prototypes"],
  },
  {
    icon: PenTool,
    title: "UI Design",
    description:
      "Crafting refined, accessible interfaces with strong systems, typography, and motion that feel cohesive at every scale.",
    tags: ["Design systems", "Typography", "Motion"],
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 md:py-32 ">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-[13px] tracking-[0.2em] uppercase text-muted mb-3"
        >
          — Capabilities
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-4xl md:text-5xl text-ink mb-4"
        >
          My expertise
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-body text-[15px] text-muted max-w-md mb-16"
        >
          Three disciplines I bring together to move a product from question
          to considered experience.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, description, tags }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
className="
group
relative
overflow-hidden
rounded-[28px]
border
border-[#ECE7E4]
bg-white
p-10
transition-all
duration-500
ease-[cubic-bezier(.22,1,.36,1)]
hover:-translate-y-2
hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
hover:border-[#DDD6D2]
"            >
              {/* <span className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-ink transition-colors duration-400 pointer-events-none" /> */}
              <div
className="
absolute
left-0
top-0
h-full
w-full
opacity-0
transition-opacity
duration-500
group-hover:opacity-100
bg-gradient-to-br
from-white
via-transparent
to-[#FDF9F8]
pointer-events-none
"
/>
              <div className="
flex
h-14
w-14
items-center
justify-center
rounded-2xl
bg-[#F6EAEA]
mb-8
transition-all
duration-500
group-hover:scale-105
group-hover:rotate-3
">
<Icon
size={24}
strokeWidth={1.8}
className="transition-transform duration-500"
/>              </div>
              <h3 className="font-display text-2xl text-ink mb-3">{title}</h3>
              <p className="font-body text-[14px] leading-relaxed text-muted mb-6">
                {description}
              </p>
    <div className="mt-8 flex flex-wrap gap-2">
  {tags.map((tag) => (
    <span
      key={tag}
      className="
      rounded-full
      border
      border-[#E6E2DF]
      px-4
      py-2
      text-[13px]
      text-[#666]
      transition-all
      duration-300
      group-hover:bg-[#FAF7F6]
      "
    >
      {tag}
    </span>
  ))}
</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
