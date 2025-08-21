"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

function NavBar() {
  const [active, setActive] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Define navigation items
  const leftItems = ["Home", "About", "Service"];
  const rightItems = ["Resume", "Project", "Contact"];

  // Function to handle scroll smoothly
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Function to render navigation links
  const renderLinks = (items) =>
    items.map((item) => (
      <li
        key={item}
        onClick={() => {
          setActive(item);
          setMenuOpen(false);
          handleScroll(item);
        }}
        className={`cursor-pointer px-3 py-4 rounded-full transition-colors duration-300 
          ${active === item ? "bg-[var(--bg-orange)]" : "bg-transparent"} 
          hover:bg-orange-400`}
      >
        {item}
      </li>
    ));

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-3 left-1/2 -translate-x-1/2 z-50 
                 bg-[var(--bg-black)] shadow-lg lg:rounded-full 
                 w-[95%] lg:w-[70%] text-white p-4 lg:p-6"
    >
      {/* Desktop Navbar */}
      <ul className="hidden lg:flex justify-center gap-30 items-center w-full h-full">
        <div className="flex gap-20">{renderLinks(leftItems)}</div>

        <li className="flex items-center gap-2">
          <Image src="/navSvg.svg" alt="Svg" width={40} height={40} />
          <b className="font-bold text-2xl">JCREA</b>
        </li>

        <div className="flex gap-20">{renderLinks(rightItems)}</div>
      </ul>

      {/* Mobile Navbar */}
      <div className="flex lg:hidden justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/navSvg.svg" alt="Svg" width={35} height={35} />
          <b className="font-bold text-xl">JCREA</b>
        </div>

        {/* Hamburger / X Icon with animation */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-3xl relative w-10 h-10 flex items-center justify-center"
        >
          <AnimatePresence mode="wait">
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <HiX className="text-[var(--bg-orange)]" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute"
              >
                <HiMenu className="text-[var(--bg-orange)]" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown with smooth animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="menu-dropdown"
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden mt-4 bg-[var(--bg-black)] rounded-2xl shadow-lg p-4 overflow-hidden"
          >
            <ul className="flex flex-col gap-4 items-center">
              {renderLinks(leftItems)}
              {renderLinks(rightItems)}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default NavBar;
