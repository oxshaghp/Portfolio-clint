"use client";

import { motion } from "framer-motion";
import { FaStar, FaAward, FaCertificate } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Idea() {
  const textItems = [
    "UX Design",
    "App Design",
    "Dashboard",
    "Wireframe",
    "User Research",
  ];

  return (
    <section className="w-full py-16 flex flex-col items-center justify-center bg-white text-center mb-20 overflow-hidden">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
        Have an <span className="text-[var(--bg-orange)]">Awsome Project</span>{" "}
        Idea? <span className="text-[var(--bg-orange)]">Let’s Discuss</span>
      </h1>

      {/* Input Box */}
      <div className="flex items-center justify-between bg-white shadow-md rounded-full mt-8 px-4 py-2 w-[90%] sm:w-[500px] border">
        <MdEmail className="text-[var(--bg-orange)] text-xl" />
        <input
          type="email"
          placeholder="Enter Email Address"
          className="flex-1 outline-none px-2 text-gray-600 bg-transparent"
        />
        <button className="bg-[var(--bg-orange)] text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition">
          Send
        </button>
      </div>

      {/* Icons Row */}
      <div className="flex flex-wrap items-center justify-center gap-8 text-gray-600 mt-6 text-sm">
        <div className="flex items-center gap-2">
          <FaStar className="text-yellow-400" /> 4.9/5 Average Ratings
        </div>
        <div className="flex items-center gap-2">
          <FaAward className="text-[var(--bg-orange)]" /> 25+ Winning Awards
        </div>
        <div className="flex items-center gap-2">
          <FaCertificate className="text-green-500" /> Certified Product
          Designer
        </div>
      </div>

      {/* Moving Text Banner */}
      <div className="relative w-[110%] -ml-[5%] overflow-hidden mt-12 bg-[var(--bg-orange)] py-3 rotate-[-3deg]">
        <motion.div
          className="flex gap-8 text-lg font-semibold whitespace-nowrap text-black"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {Array(4)
            .fill(textItems)
            .flat()
            .map((item, i) => (
              <span key={i} className="px-4 flex items-center gap-2 text-white">
                {item}
                <span className="text-white">✦</span>
              </span>
            ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Idea;
