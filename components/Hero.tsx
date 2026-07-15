"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download } from "lucide-react";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative  min-h-screen py-10 bg-[#F8F7F5] overflow-hidden flex items-center"
    >
      {/* Soft Glow */}
      <div className="absolute -left-48 -top-48 h-[420px] w-[420px] rounded-full bg-[#F3E8E5]/60 blur-[120px]" />

      {/* Right Outline Circle */}
      <div className="hidden lg:block absolute right-10 top-[200px] h-56 w-56 rounded-full border border-[#ECE9E5]" />

      <div className="mx-auto flex w-full max-w-[1380px] justify-center pt-36 gap-40  px-20 lg:px-20">
        {/* LEFT */}

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="justify-between"
        >
          <motion.div
            variants={fadeUp}
            className="mb-4 mt-10 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-[#9A9A9A]" />

            <span
              className="
              text-[14px]
              uppercase
              tracking-[0.35em]
              text-[#707070]
            "
            >
              Portfolio 2026
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="
            font-display
            text-[72px]
            mb-6
            leading-[0.95]
            tracking-[-0.03em]
            text-[#151515]
          "
          >
            Hey, I'm Sachin Saha.
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            className="
            
            font-display
            text-[72px]
            italic
            font-normal
            leading-none
            text-[#8C8C8C]
          "
          >
            UI/UX Designer
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="
            mt-5
            max-w-[520px]
            text-[16px]
            leading-[1.8]
            text-[#555]
          "
          >
            I design calm, considered digital experiences — pairing research and
            craft to turn complex products into interfaces that feel effortless.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-12 flex items-center gap-5"
          >
            <a
              href="#case-study"
              className="
              group
              inline-flex
              h-[58px]
              items-center
              gap-3
              rounded-full
              bg-[#111]
              px-8
              text-white
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            "
            >
              <span className="text-[15px]">View my work</span>

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
             href="/resume/Sachin_Saha_Resume.pdf"
              className="
              group
              inline-flex
              h-[58px]
              items-center
              gap-3
              rounded-full
              border
              border-[#262626]
              bg-transparent
              px-8
              text-[#111]
              transition-all
              duration-300
              hover:bg-white
              hover:-translate-y-1
            "
            >
              <span className="text-[15px]">Download résumé</span>

              <Download
                size={18}
                className="transition-transform duration-300 group-hover:translate-y-[2px]"
              />
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative flex justify-end"
        >
          <div
            className="
              relative
              h-[480.61px]
              w-[370px]
              overflow-hidden
              rounded-[34px]
              bg-[#ECE9E5]
            "
          >
            {/* Replace this with your portrait later */}
            <div className="absolute inset-0 flex  items-center justify-center">
              <span className="font-display text-[120px] italic text-[#D2CFCA]">
                <Image
                  src="/images/profile.png"
                  alt="Sachin Saha"
                  fill
                  priority
                  className="object-cover"
                />
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll */}

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          gap-2
          text-[#7A7A7A]
        "
      ></motion.a>
    </section>
  );
}
