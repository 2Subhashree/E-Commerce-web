import React from "react";
import { Link } from "react-router-dom";

const CardProduct = ({ product }) => {
  const discountedPrice = product.price - (product.price * product.discount) / 100;

  return (
    <div className="border rounded-xl shadow-md hover:shadow-lg p-4 transition relative bg-white">
      {/* Discount Badge */}
      <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
        {product.discount}% OFF
      </span>

      <img
        src={product.image}
        alt={product.name}
        className="h-48 w-full object-contain rounded-md mb-3"
      />
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-500 mb-2">{product.category}</p>

      {/* Price Section */}
      <div className="mb-3">
        <p className="text-blue-600 font-bold text-lg">
          ₹{discountedPrice.toLocaleString()}
        </p>
        <p className="text-sm text-gray-400 line-through">
          ₹{product.price.toLocaleString()}
        </p>
      </div>

      <Link
        to={`/product/${product.id}`}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        View Details
      </Link>
    </div>
  );
};

export default CardProduct;
