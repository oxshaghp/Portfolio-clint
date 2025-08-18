"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

function Serves() {
  // Animation Variants
  const headVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const boxVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: i * 0.3 },
    }),
  };

  return (
    <section className="relative sm:mt-[32.5rem] text-white w-full h-full bg-[var(--bg-black)] rounded-[4rem] p-12 overflow-hidden">
      {/* Head Of Section */}
      <motion.div
        className="flex items-center sm:justify-between justify-center flex-wrap z-20 gap-4 relative"
        variants={headVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold">
          <span className="text-white">My</span>{" "}
          <span className="text-[var(--bg-orange)]">Services</span>
        </h1>
        <p className="text-sm max-w-md leading-relaxed text-right z-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
          nunc, posuere in justo vulputate, bibendum sodales.
        </p>
      </motion.div>

      {/* Boxes Of Section */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-40">
        {[
          { title: "UI/ UX Design", img: "/Frame1.png" },
          { title: "Web Design", img: "/Frame2.png" },
          { title: "Landing Page", img: "/Frame3.png" },
        ].map((service, i) => (
          <motion.div
            key={i}
            className="relative z-20"
            custom={i}
            variants={boxVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Image */}
            <div className="w-full flex items-center justify-center mb-6 relative">
              <Image
                src={service.img}
                alt={service.title}
                width={350}
                height={350}
                className="object-contain rounded-xl z-20"
              />
              <div className="flex justify-end absolute sm:bottom-3 sm:right-25 right-0 bottom-5 z-30">
                <button
                  className="sm:w-28 sm:h-28 w-20 h-20 flex items-center justify-center bg-[var(--text-p)] rounded-full 
                  transition-all duration-300 hover:bg-[var(--bg-orange)] hover:scale-110 group"
                >
                  <ArrowUpRight className="text-white w-12 h-12 transition-transform duration-300 group-hover:rotate-45 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Background SVGs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/svg/light-yellow-abstract-background-3d-illustration-3d-rendering 3.svg"
          alt="Frame"
          width={280}
          height={280}
          className="absolute sm:top-20 sm:left-0 top-1/2 left-0 sm:w-[280px] md:w-auto mx-auto"
        />
        <Image
          src="/svg/light-yellow-abstract-background-3d-illustration-3d-rendering 2.svg"
          alt="Frame"
          width={280}
          height={280}
          className="absolute top-0 left-1/2 sm:w-[280px] md:w-auto mx-auto"
        />
        <Image
          src="/svg/light-yellow-abstract-background-3d-illustration-3d-rendering 1.svg"
          alt="Frame"
          width={280}
          height={280}
          className="absolute sm:top-20 sm:right-0 bottom-0 right-0 sm:w-[280px] md:w-auto mx-auto"
        />
      </div>
    </section>
  );
}

export default Serves;
