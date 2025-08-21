"use client";
import React from "react";
import { Button } from "./ui/button";
import { FaStar } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { motion } from "framer-motion";

function HeroNav() {
  return (
    <section id="Home" className="mt-38">
      {/* Top The Section */}
      <motion.div
        className="flex items-center justify-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <div className="relative inline-block">
          <Button className="bg-transparent cursor-pointer text-black rounded-full px-6 py-2 hover:bg-black hover:text-white border border-black transition-all duration-300">
            Hire Me
          </Button>

          {/* Svg Btn */}
          <img
            src="/svg/navsvgbtn.svg"
            alt="Hero Nav Svg"
            className="w-6 h-6 absolute -top-2 -right-2"
          />
        </div>
      </motion.div>

      {/* Head the Nav */}
      <motion.div
        className="flex flex-col items-center justify-center mt-10 relative"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        <h1 className="sm:text-6xl text-4xl font-bold text-center text-black leading-tight relative inline-block">
          I'm <span className="text-[var(--bg-orange)]">Jenny</span>,<br />
          product designer
          {/* Svg Head */}
          <img
            src="/svg/Vector 2.svg"
            alt="Hero Nav Head Svg"
            className="sm:w-15 sm:h-15 w-10 h-10 absolute -bottom-10 left-[-10%]"
          />
        </h1>
      </motion.div>

      {/* Body Of The Hero */}
      <motion.div
        className="flex flex-col items-center justify-center w-full h-full mt-10 gap-10 md:gap-6 md:flex-nowrap md:relative"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
      >
        {/* Left Text */}
        <div className="flex flex-col items-center md:items-start gap-4 max-w-xs text-center md:text-left
                        md:absolute md:left-20 md:top-1/2">
          <img src="/svg/quote-up.svg" alt="Quta" className="mx-auto md:mx-0" />
          <p className="text-sm text-[var(--text-p)] font-bold">
            Jenny’s Exceptional product design ensure our website’s success. Highly Recommended
          </p>
        </div>

        {/* Center Image */}
        <div className="relative order-2 md:order-none md:absolute md:-top-35 z-10">
          <img
            src="/Frame 57.png"
            alt="Frame"
            className="sm:w-[280px] md:w-auto mx-auto"
          />

          {/* Glassmorphism Box with Buttons */}
          <div className="absolute sm:bottom-15 bottom-5 left-1/2 -translate-x-1/2 w-auto h-auto p-5 sm:p-10 
                          rounded-full bg-white/30 backdrop-blur-md shadow-lg 
                          flex items-center justify-center gap-4 px-4">
            <Button className="flex justify-center items-center gap-2 px-4 py-1 w-[150px] h-[40] rounded-full bg-[var(--bg-orange)] text-white font-bold hover:bg-transparent hover:text-black transition duration-300">
              Portfolio
              <FaArrowTrendUp />
            </Button>
            <Button className="px-4 py-1 w-[150px] h-[40] border rounded-full bg-transparent hover:bg-[var(--bg-orange)] text-white hover:opacity-90 duration-300 transition">
              Hire Me
            </Button>
          </div>
        </div>

        {/* Right Text */}
        <div className="flex flex-col items-center md:items-start gap-2 text-center md:text-left
                        md:absolute md:right-20 md:top-1/2">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <FaStar className="text-amber-400" />
            <FaStar className="text-amber-400" />
            <FaStar className="text-amber-400" />
            <FaStar className="text-amber-400" />
            <FaStar className="text-amber-400" />
          </div>
          <b className="text-2xl text-[var(--text-p)]">10 Years</b>
          <p className="text-[12px] text-[var(--text-p)] font-bold">Experience</p>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroNav;
