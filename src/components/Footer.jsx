import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 text-center mt-10">
      <div className="space-x-6 mb-4">
        <a href="#" className="hover:text-white transition">About Us</a>
        <a href="#" className="hover:text-white transition">Privacy Policy</a>
        <a href="#" className="hover:text-white transition">Terms</a>
        <a href="#" className="hover:text-white transition">Contact</a>
      </div>

      {/* Social Media Icons */}
      <div className="flex justify-center items-center gap-6 mb-4">
        <a
          href="#"
          className="text-gray-400 hover:text-blue-500 transition transform hover:scale-110"
        >
          <FaFacebookF size={22} />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-pink-500 transition transform hover:scale-110"
        >
          <FaInstagram size={22} />
        </a>
        <a
          href="#"
          className="text-gray-400 hover:text-sky-400 transition transform hover:scale-110"
        >
          <FaTwitter size={22} />
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} <span className="text-white font-semibold">Zentail</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
