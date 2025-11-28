// ProductTask/ProductList.jsx

import React, { useEffect, useState } from "react";
import { products } from "./products";
import { Link } from "react-router-dom";

export default function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const result = await products();
      if (result) {
        setData(result.products);
      }
    }

    getData();
  }, []);

  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">
        Products List
      </h1>

      {data.length === 0 && (
        <p className="text-center text-gray-400 text-lg">Loading...</p>
      )}

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800/40 shadow-lg rounded-xl p-4 border border-gray-700 hover:scale-105 transition transform duration-300"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="rounded-lg h-40 object-cover w-80"
            />

            <h2 className="text-xl font-semibold text-white mt-3">
              {item.title}
            </h2>

            <p className="text-sm mt-1 line-clamp-2">{item.description}</p>

            <div className="flex justify-between items-center mt-3">
              <span className="text-green-400 font-bold">₹ {item.price}</span>
              <span className="text-yellow-400 font-semibold">
                ⭐ {item.rating}
              </span>
            </div>
            
            <Link
              to={`/products/${item.id}`}
              className="mt-3 block bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}