"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, ArrowUpRight } from "lucide-react";
import PhoneMockup from "./PhoneMockup";
import { getFeaturedCaseStudy } from "@/lib/caseStudies";

export default function FeaturedCaseStudy() {
  const study = getFeaturedCaseStudy();

  return (
    <section id="case-study" className="py-24 md:py-32  overflow-hidden">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center
        ">
          {/* Phone mockups */}
          <div className="md:col-span-6 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
className="
relative
bg-blush
rounded-[32px]
py-10
md:py-16
px-3
sm:px-6
md:px-10
flex
items-center
justify-center
overflow-hidden
"            >
              <div className="relative flex items-end gap-2 md:gap-6">
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
relative
z-10
-mr-6
md:-mr-10
mb-4
md:mb-6
"
                >
                  <PhoneMockup kind="transactions" className="scale-90" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -18, 0] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.6,
                  }}
                  className="relative z-20"
                >
                  <PhoneMockup kind="balance" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Copy */}
          <div className="md:col-span-6 order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="inline-block  text-[11px] tracking-[0.1em] uppercase bg-ink text-bg rounded-full px-4 py-1.5">
                {study.badge}
              </span>
              <span className="inline-block  text-[11px] tracking-[0.1em] uppercase bg-white border border-gray text-ink rounded-full px-4 py-1.5">
                {study.badges1}
              </span>
              <span className="inline-block  text-[11px] tracking-[0.1em] uppercase bg-white border border-gray text-ink rounded-full px-4 py-1.5">
                {study.badges2}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-balance text-4xl md:text-5xl text-ink mb-6"
            >
              {study.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-body text-[15px] leading-relaxed text-muted mb-8 max-w-md"
            >
              {study.overview}
            </motion.p>

            <motion.dl
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
    grid
    grid-cols-3
    max-w-[620px]
    overflow-hidden
    rounded-[26px]
    border
    border-[#E8E3DF]
    bg-white
    mb-10
  "
            >
              <div className="px-7 py-4 border-r border-[#EEE9E6]">
                <dt className="mb-2 text-[13px] uppercase tracking-[0.22em] text-[#7D7D7D]">
                  Role
                </dt>

                <dd className="text-[15px] leading-5 text-[#161616]">
                  {study.role}
                </dd>
              </div>
              <div className="px-7 py-4 border-r border-[#EEE9E6]">
                <dt className=" text-[13px] uppercase tracking-[0.22em] text-[#7D7D7D]">
                  Timeline
                </dt>

                <dd className="text-[15px] leading-8 text-[#161616]">
                  {study.timeline}
                </dd>
              </div>
              <div className="px-7 py-4">
                <dt className=" text-[13px] uppercase tracking-[0.22em] text-[#7D7D7D]">
                  Tools
                </dt>

                <dd className="text-[15px] leading-8 text-[#161616]">
                  {study.tools}
                </dd>
              </div>
            </motion.dl>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-wrap items-center gap-4 mb-8"
            >
              <a
                href={study.caseStudyUrl}
                className="group inline-flex items-center gap-2 rounded-full bg-ink text-bg px-6 py-3.5 text-[13px] transition-colors duration-300 hover:bg-ink/90"
              >
                View case study
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
              <a
                href={study.prototypeUrl}
                className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-[13px] transition-colors duration-300 hover:bg-white"
              >
                <ExternalLink size={14} />
                View prototype
              </a>
            </motion.div>

            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              href="/case-studies/coming-soon"
              className="group inline-flex items-center gap-1.5 text-[13px] text-muted underline-hover"
            >
              View all case studies
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
