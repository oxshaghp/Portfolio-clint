"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import "swiper/css";

function Result() {
  // Animation Variants
  const headVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="relative text-white w-full h-full bg-[var(--bg-black)] rounded-[4rem] p-12 overflow-hidden mb-20">
      {/* Head Of Section */}
      <motion.div
        className="flex items-center justify-center mt-10  flex-col z-20 gap-4 relative"
        variants={headVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold text-center">
          <span className="text-white">Testimonials That Speak</span>{" "}
          <span className="text-[var(--bg-orange)]">to My Results</span>
        </h1>
        <p className="text-sm max-w-md leading-relaxed text-center z-20">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
          interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed lobortis orci elementum egestas lobortis.
        </p>
      </motion.div>

      {/* Swiper Testimonials */}
      <div className="relative z-20 mt-20">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {[
            {
              name: "John Doe",
              job: "UI/UX Designer",
              img: "/avatar.png",
              stars: 5,
              text: "Working with Abdullah was a wonderful experience! His design sense is amazing.",
            },
            {
              name: "Sarah Smith",
              job: "Web Developer",
              img: "/avatar.png",
              stars: 4,
              text: "Great attention to detail and very professional. Highly recommended!",
            },
            {
              name: "Michael Brown",
              job: "Project Manager",
              img: "/avatar.png",
              stars: 5,
              text: "Delivered on time and exceeded expectations. Will collaborate again.",
            },
            {
              name: "Smith Brown",
              job: "Project Manager",
              img: "/avatar.png",
              stars: 5,
              text: "Delivered on time and exceeded expectations. Will collaborate again.",
            },
          ].map((review, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="backdrop-blur-xl bg-white/10 p-6 rounded-2xl shadow-lg flex flex-col gap-4 h-full"
              >
                {/* Top Row: Image + Name + Job + Stars */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={review.img}
                      alt={review.name}
                      width={60}
                      height={60}
                      className="rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{review.name}</h3>
                      <p className="text-sm text-gray-300">{review.job}</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-400">
                    {Array(review.stars)
                      .fill(0)
                      .map((_, idx) => (
                        <FaStar key={idx} />
                      ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-200 text-sm leading-relaxed">
                  {review.text}
                </p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
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

export default Result;
