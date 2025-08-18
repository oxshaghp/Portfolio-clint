"use client";

import Image from "next/image";
import { motion } from "framer-motion";

function Experince() {
  return (
    <motion.section
      className="mt-20 mb-20"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Head Section */}
      <motion.div
        className="flex items-center justify-center mb-20"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="sm:text-6xl text-5xl font-bold text-center">
          My <span className="text-[var(--bg-orange)]">Work Experience</span>
        </h1>
      </motion.div>

      <div className="flex items-center justify-around flex-wrap gap-3">
        {/* Left Side */}
        <motion.div
          className="flex flex-col items-start justify-center gap-15"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-2xl text-[var(--text-p)] font-bold">
              Cognizant, Mumbai
            </h2>
            <p className="text-sm text-gray-500">Sep 2016- July 2020</p>
          </div>
          <div>
            <h2 className="text-2xl text-[var(--text-p)] font-bold">
              Sugee Pvt limited, Mumbai
            </h2>
            <p className="text-sm text-gray-500">Sep 2020- July 2023</p>
          </div>
          <div>
            <h2 className="text-2xl text-[var(--text-p)] font-bold">
              Cinetstox, Mumbai
            </h2>
            <p className="text-sm text-gray-500">Sep 2023</p>
          </div>
        </motion.div>

        {/* Center Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Image
            src="/svg/Frame 11.png"
            alt="Experience Image"
            width={300}
            height={300}
            className="hidden sm:flex sm:w-[280px] md:w-auto mx-auto"
          />
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="flex flex-col items-start justify-center gap-15 p-5"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-2xl text-[var(--text-p)] font-bold">
              Experince Designer
            </h2>
            <p className="text-sm text-gray-500 sm:max-w-96 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
              nunc, posuere in justo vulputate, bibendum sodales
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-[var(--text-p)] font-bold">
              UI/UX Designer
            </h2>
            <p className="text-sm text-gray-500 sm:max-w-96">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
              nunc, posuere in justo vulputate, bibendum sodales
            </p>
          </div>
          <div>
            <h2 className="text-2xl text-[var(--text-p)] font-bold">
              Lead UX Designer
            </h2>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Experince;
