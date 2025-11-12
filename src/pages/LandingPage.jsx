import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaCommentDots, FaStar, FaRegStar } from "react-icons/fa";

import iphone11 from "../assets/iphone_11.png";
import nikeShoes from "../assets/Nike-Shoes.png";
import smartwatch from "../assets/smartwatch.jpg";
import headphone from "../assets/headphone.jpeg";

const products = [
  {
    id: 1,
    name: "iPhone 11",
    image: iphone11,
    price: 139999,
    discount: 20,
    description:
      "The iPhone 11 delivers amazing performance with the A13 Bionic chip, dual-camera system, and a stunning Liquid Retina display.",
    features: [
      "6.1-inch Liquid Retina HD Display",
      "A13 Bionic Chip",
      "12MP Dual Camera System",
      "All-day Battery Life",
    ],
  },
  {
    id: 2,
    name: "Nike Air Shoes",
    image: nikeShoes,
    price: 6999,
    discount: 15,
    description:
      "Step into comfort and style with Nike Air Max — lightweight cushioning, sleek design, and built for all-day performance.",
    features: [
      "Breathable Mesh Upper",
      "Air Cushioning Sole",
      "Durable Rubber Outsole",
      "Stylish Everyday Look",
    ],
  },
  {
    id: 3,
    name: "Noise Smartwatch",
    image: smartwatch,
    price: 4999,
    discount: 10,
    description:
      "Track your health and fitness goals with the Noise Smartwatch — featuring a bright display, heart rate monitor, and multiple sports modes.",
    features: [
      "1.8-inch AMOLED Display",
      "Heart Rate & SpO2 Tracking",
      "Water Resistant",
      "Bluetooth Connectivity",
    ],
  },
  {
    id: 4,
    name: "Sony WH-1000XM5",
    image: headphone,
    price: 29999,
    discount: 25,
    description:
      "Immerse yourself in pure sound with Sony WH-1000XM5 noise-cancelling headphones — comfort meets crystal-clear audio.",
    features: [
      "Industry-leading Noise Cancellation",
      "30 Hours Battery Life",
      "Touch Controls",
      "Voice Assistant Support",
    ],
  },
];

const LandingPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-32 text-gray-600 text-xl">
        <Navbar />
        <p>Product not found</p>
        <Footer />
      </div>
    );
  }

  const discountedPrice =
    product.price - (product.price * product.discount) / 100;

  return (
    <>
      <Navbar />

      {/* Product Details */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Product Image */}
        <div className="relative group w-full max-w-md h-[400px] flex items-center justify-center bg-gray-100 rounded-2xl shadow-2xl overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
          {product.discount > 0 && (
            <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-lg shadow">
              {product.discount}% OFF
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            {product.name}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            {product.description}
          </p>

          <div>
            <p className="text-3xl font-semibold text-blue-600">
              ₹{discountedPrice.toLocaleString()}
            </p>
            <p className="text-gray-400 line-through">
              ₹{product.price.toLocaleString()}
            </p>
          </div>

          <div className="flex items-center gap-10">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-xl shadow-lg font-medium">
              Buy Now
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-xl shadow-lg font-medium">
              Add to Cart
            </button>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-3">
              Key Features:
            </h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {product.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          What Our <span className="text-blue-600">Customers</span> Say{" "}
          <FaCommentDots className="inline text-blue-600" />
        </h2>

        <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-6">
          {[
            {
              name: "Priya K.",
              quote:
                "Absolutely love the design and comfort! The iPhone 11 is a dream to use — smooth, stylish, and fast!",
              rating: 5,
            },
            {
              name: "Rohan S.",
              quote:
                "Great product for the price. I bought the Nike Air Shoes — they’re super comfy and look fantastic!",
              rating: 4,
            },
            {
              name: "Sneha P.",
              quote:
                "The smartwatch is perfect for my workouts! Tracks everything accurately and looks premium.",
              rating: 5,
            },
          ].map((review, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300"
            >
              {/* Reviewer Image */}
              <div className="flex items-center mb-6">
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {review.name}
                  </h3>
                  {/* Star Ratings */}
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, idx) =>
                      idx < review.rating ? (
                        <FaStar key={idx} className="text-yellow-400 text-lg" />
                      ) : (
                        <FaRegStar
                          key={idx}
                          className="text-yellow-400 text-lg opacity-30"
                        />
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-600 leading-relaxed italic">
                “{review.quote}”
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Bottom Element */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-lg">
            Loved your purchase?{" "}
            <span className="text-blue-600 font-semibold cursor-pointer hover:underline">
              Leave a Review
            </span>
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-semibold mb-8">Need Help?</h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-lg">
          <div className="flex items-center gap-3">
            <MdEmail size={26} className="text-yellow-300" />
            <p>support@zentail.com</p>
          </div>
          <div className="flex items-center gap-3">
            <MdPhone size={26} className="text-yellow-300" />
            <p>+91 99999 99999</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LandingPage;
