"use client";

import { motion } from "framer-motion";
import { GraduationCap, PenTool, Code2, MapPin, Sparkles } from "lucide-react";

const details = [
  {
    icon: GraduationCap,
    label: "Education",
    value: "Computer Science Graduate",
  },
  { icon: PenTool, label: "Focus", value: "UI/UX Designer" },
  { icon: Code2, label: "Foundation", value: "Frontend Background" },
  { icon: MapPin, label: "Based in", value: "Nagpur, India" },
  {
    icon: Sparkles,
    label: "Availability",
    value: "Open to Internship Opportunities",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function About() {
  return (
    <section id="about" className="py-24  mt-20  md:py-32">
      <div className="max-w-container mx-auto px-6 md:px-20">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="font-body mr-[800px] text-[15px] tracking-[0.2em] uppercase text-muted mb-5"
        >
          — About
        </motion.p>

        <div className="grid md:grid-cols-12 center gap-12 md:gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-7"
          >
            <h2 className="mt-[77px] font-display text-balance text-4xl md:text-5xl leading-[1.15] text-ink  mb-8">
              Designing with intent, clarity, and a quiet attention to detail.
            </h2>
            <div className="space-y-5 font-body text-[15px]  leading-relaxed text-muted max-w-lg">
              <p>
                I&rsquo;m a UI/UX designer with a computer science background
                and a genuine love for the craft of interfaces. My work sits at
                the intersection of research and aesthetics — understanding
                people first, then shaping experiences that feel considered and
                human.
              </p>
              <p>
                Having built things on the frontend, I care deeply about how a
                design behaves, not just how it looks. I believe the best
                products are the ones that get out of the way and let people
                move with confidence.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-5 flex flex-col gap-4"
          >
            {details.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="
group
flex
items-center
gap-5
rounded-[28px]
border
border-[#ECE7E4]
bg-white
px-5
py-6
transition-all
duration-500
ease-out
hover:-translate-y-1
hover:border-[#DDD5D1]
hover:shadow-[0_12px_40px_rgba(0,0,0,0.05)]
"
              >
                <span
                  className="
flex
h-14
w-14
shrink-0
items-center
justify-center
rounded-full
bg-[#F6EAEA]
transition-transform
duration-500
group-hover:scale-110
"
                >
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    className="transition-transform duration-500 group-hover:rotate-6"
                  />
                </span>
                <span>
                  <span className="block text-[12px] tracking-[0.22em] uppercase text-[#777] mb-0.5">
                    {label}
                  </span>
                  <span className="block font-medium leading-none mt-1 text-[14px] text-ink">
                    {value}
                  </span>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
