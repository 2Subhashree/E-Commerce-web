import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardProduct from "../components/CardProduct";
import { FaLaptop, FaTshirt, FaHome, FaFootballBall, FaSnowflake, FaClock } from "react-icons/fa";
import iphone11 from "../assets/iphone_11.png";
import nikeShoes from "../assets/Nike-Shoes.png";
import smartwatch from "../assets/smartwatch.jpg";
import Headphone from "../assets/headphone.jpeg";

// Product Data
const products = [
  {
    id: 1,
    name: "iPhone 11",
    category: "Electronics",
    price: 139999,
    discount: 20,
    image: iphone11,
  },
  {
    id: 2,
    name: "Nike Shoes",
    category: "Footwear",
    price: 6999,
    discount: 15,
    image: nikeShoes,
  },
  {
    id: 3,
    name: "Noise Smartwatch",
    category: "Wearables",
    price: 4999,
    discount: 10,
    image: smartwatch,
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    category: "Headphones",
    price: 29999,
    discount: 25,
    image: Headphone,
  },
];

// Categories
const categories = [
  { name: "Electronics", icon: <FaLaptop className="text-4xl text-blue-600" /> },
  { name: "Fashion", icon: <FaTshirt className="text-4xl text-pink-500" /> },
  { name: "Home", icon: <FaHome className="text-4xl text-green-500" /> },
  { name: "Sports", icon: <FaFootballBall className="text-4xl text-yellow-500" /> },
];

const HomePage = () => {
  const handleScrollToProducts = () => {
    const section = document.getElementById("featured-products");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24 px-6 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 flex justify-center items-center gap-2">
            Big Winter Sale{" "}
            <FaSnowflake className="text-blue-200 animate-spin-slow drop-shadow-lg" />
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-6">
            Get{" "}
            <span className="text-yellow-300 font-semibold animate-pulse">
              20% OFF
            </span>{" "}
            on the new{" "}
            <span className="font-bold text-yellow-300">iPhone 11</span>! <br />
            Limited Time Offer{" "}
            <FaClock className="inline text-yellow-300 animate-bounce ml-1" />
          </p>

          <button
            onClick={handleScrollToProducts}
            className="mt-6 bg-yellow-400 text-blue-700 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition duration-300"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-10 text-gray-800">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-5xl mx-auto px-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transform transition cursor-pointer"
            >
              <div className="flex justify-center mb-3">{cat.icon}</div>
              <p className="font-medium text-gray-700 text-lg">{cat.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50" id="featured-products">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Featured Products
          </h2>
          <p className="text-gray-500 mt-2">
            Discover top-selling products handpicked just for you
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-4">
          {products.map((p) => (
            <CardProduct key={p.id} product={p} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
