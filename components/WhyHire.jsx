"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

function WhyHire() {
  return (
    <motion.section
      className="mt-20 w-full h-full flex items-center justify-center sm:gap-52 gap-20 flex-wrap bg-[var(--bg-why)] rounded-[4rem] p-12"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* Img Div */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src="/svg/Frame 75.png"
          alt="Why Hire Image"
          width={500}
          height={500}
        />
      </motion.div>

      {/* Detailes Div */}
      <motion.div
        className="flex flex-col items-start justify-center gap-6 text-center md:text-left"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold text-[var(--text-p)] mb-4">
          Why <span className="text-[var(--bg-orange)]">Hire Me?</span>
        </h1>
        <p className="text-sm text-gray-500 max-w-md mb-6">
          I am a highly skilled and experienced UI/UX designer with a passion for
          creating user-friendly and visually appealing digital products. My
          expertise in design principles, user research, and prototyping allows me
          to deliver exceptional user experiences that meet both business goals and
          user needs.
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>10+ years of experience in UI/UX design</li>
          <li>Proficient in Figma, Adobe XD, and Sketch</li>
          <li>Strong understanding of user-centered design principles</li>
          <li>Excellent communication and collaboration skills</li>
        </ul>
        <Button className="bg-[var(--bg-orange)] text-white mt-6 px-8 py-3 rounded-full hover:bg-transparent hover:text-black hover:border transition duration-300">
          Hire Me
        </Button>
      </motion.div>
    </motion.section>
  );
}

export default WhyHire;
