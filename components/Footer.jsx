"use client";

import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaDribbble } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <footer id="Contact" className="w-full bg-[#1E1E1E] text-gray-300 py-12 px-6 sm:px-12 rounded-t-2xl">
      {/* Top Title Row */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold">Lets Connect there</h2>
        <button className="flex items-center gap-2 bg-[var(--bg-orange)] text-white font-semibold px-6 py-3 rounded-full hover:scale-105 transition">
          Hire me <ArrowUpRight size={18} />
        </button>
      </div>

      <hr className="border-gray-600 mb-8" />

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        {/* Logo + Description + Social */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/navSvg.svg" alt="Logo" width={50} height={50}/>
            <b className="font-bold text-white">JCREA</b>
          </div>
          <p className="text-sm leading-relaxed mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          </p>
          <div className="flex gap-4 text-lg">
            <FaFacebookF className="hover:text-[var(--bg-orange)] cursor-pointer" />
            <FaInstagram className="hover:text-[var(--bg-orange)] cursor-pointer" />
            <FaTwitter className="hover:text-[var(--bg-orange)] cursor-pointer" />
            <FaWhatsapp className="hover:text-[var(--bg-orange)] cursor-pointer" />
            <FaDribbble className="hover:text-[var(--bg-orange)] cursor-pointer" />
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold text-white mb-4">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-[var(--bg-orange)] cursor-pointer">Home</li>
            <li className="hover:text-[var(--bg-orange)] cursor-pointer">About Us</li>
            <li className="hover:text-[var(--bg-orange)] cursor-pointer">Service</li>
            <li className="hover:text-[var(--bg-orange)] cursor-pointer">Resume</li>
            <li className="hover:text-[var(--bg-orange)] cursor-pointer">Project</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>+91 7738443636</li>
            <li>Joycrea36@gmail.com</li>
            <li>Portfolio-jcrea.com</li>
          </ul>
        </div>

        {/* Latest Info */}
        <div>
          <h3 className="font-semibold text-white mb-4">Get the latest information</h3>
          <div className="flex items-center bg-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-4 py-2 text-sm text-gray-700 outline-none"
            />
            <button className="bg-[var(--bg-orange)] px-4 py-2 text-white font-bold">
              &gt;
            </button>
          </div>
        </div>
      </div>

      <hr className="border-gray-600 mb-6" />

      {/* Bottom Row */}
      <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400 gap-2">
        <p>Copyright© 2023 Jayesh. All Rights Reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[var(--bg-orange)]">User Terms & Conditions</a>
          <a href="#" className="hover:text-[var(--bg-orange)]">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
