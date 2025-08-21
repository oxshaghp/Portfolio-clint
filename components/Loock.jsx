"use client";

import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaArrowTrendUp } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
function Loock() {
  const projects = [
    { title: "Project 1", img: "/Frame 26.png" },
    { title: "Project 2", img: "/Frame 26.png" },
    { title: "Project 3", img: "/Frame 26.png" },
  ];

  const categories = [
    "Landing Page",
    "Product Design",
    "Animations",
    "CRUDs",
  ];

  return (
    <motion.section className="relative w-full h-full rounded-[4rem] p-5 container m-auto overflow-hidden mb-20"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/*   Head */}
      <div className="flex items-center justify-between flex-wrap gap-5 p-12">
        <h1 className="sm:text-4xl text-3xl font-bold text-[var(--text-p)]">
          let's take a look at <br className="hidden sm:flex" /> my{" "}
          <span className="text-[var(--bg-orange)]">work</span>
        </h1>
        <Button className="bg-[var(--bg-orange)] text-white px-8 py-3 rounded-full hover:bg-transparent hover:text-black hover:border transition duration-300">
          View All
        </Button>
      </div>

      {/* Body */}
      <div>
        {/* Slider */}
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={2}
            breakpoints={{
                640: {
                slidesPerView: 1,
                },
                768: {
                slidesPerView: 2,
                },
                1024: {
                slidesPerView: 2,
                },
            }}
          className="rounded-xl"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="relative group">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-3xl h-auto rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-10 text-center">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="border p-4 rounded-xl font-medium cursor-pointer hover:bg-[var(--bg-orange)] hover:text-white transition"
            >
              {cat}
            </div>
          ))}
        </div>
        {/* Last */}
        <div className="mt-20 text-center">
            <h2 className="text-[var(--text-p)] sm:text-5xl text-3xl font-bold flex justify-center gap-3">Lirante - Food Dilvery Solution
              <FaArrowTrendUp className="sm:w-16 sm:h-16 w-12 h-12 sm:p-5 p-1 rounded-full bg-[var(--bg-orange)] text-white size-1" />
            </h2>
            <p className="text-sm text-gray-500 max-w-md mx-auto mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacus nunc, posuere in justo vulputate, bibendum sodales.
            </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Loock;
