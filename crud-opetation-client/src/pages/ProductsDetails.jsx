import { useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { baseURL } from "../utilitis/Url";
import { useState } from "react";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";



const ProductsDetails = () => {


  return (
    <div className="pb-10  gadgetContainer">
      <div className="max-w-4xl mx-auto mt-10 bg-white border border-gray-200 rounded-lg shadow-lg p-6">
  <div className="flex flex-col lg:flex-row gap-6">
    <div className="w-full lg:w-1/2">
      <img
        src="https://i.ibb.co/f1RHN4Y/hp5.jpg"
        alt="HP Pavilion"
        className="w-full rounded-lg"
      />
    </div>
  
    <div className="w-full lg:w-1/2">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">HP Pavilion</h1>
      
      <div className="flex items-center gap-2 mb-4">
        <span className="text-yellow-500 text-lg font-semibold">Rating:</span>
        <span className="text-gray-800 font-medium">4</span>
        <div className="flex gap-4 ml-4">
          <a href="#" className="text-gray-500 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 4.557c-.883.392-1.83.656-2.828.775a4.93 4.93 0 002.165-2.724 9.864 9.864 0 01-3.13 1.195A4.92 4.92 0 0016.62 3c-2.72 0-4.927 2.207-4.927 4.927 0 .386.044.762.126 1.124C7.691 8.789 4.066 6.67 1.64 3.148a4.902 4.902 0 00-.666 2.475c0 1.708.869 3.213 2.188 4.096a4.904 4.904 0 01-2.229-.616v.062c0 2.385 1.693 4.374 3.946 4.827a4.936 4.936 0 01-2.224.084c.627 1.956 2.444 3.38 4.6 3.42a9.864 9.864 0 01-6.102 2.104c-.395 0-.785-.023-1.17-.067A13.942 13.942 0 005.47 21c9.056 0 14.002-7.514 14.002-14.002 0-.213-.004-.425-.014-.636A9.936 9.936 0 0024 4.557z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.34 3.608 1.314.975.975 1.252 2.243 1.314 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.34 2.633-1.314 3.608-.975.975-2.243 1.252-3.608 1.314-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.34-3.608-1.314-.975-.975-1.252-2.243-1.314-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.34-2.633 1.314-3.608C5.367 2.563 6.634 2.285 8 2.223c1.266-.058 1.646-.07 4.85-.07M12 0C8.74 0 8.332.012 7.052.07c-1.45.062-2.955.36-4.03 1.435C1.445 2.56 1.147 4.066 1.085 5.515.978 6.793.97 7.219.97 12s.007 5.207.115 6.485c.062 1.45.36 2.955 1.435 4.03 1.075 1.075 2.58 1.373 4.03 1.435C8.332 23.988 8.74 24 12 24s3.668-.012 4.948-.07c1.45-.062 2.955-.36 4.03-1.435 1.075-1.075 1.373-2.58 1.435-4.03.108-1.278.115-1.705.115-6.485s-.007-5.207-.115-6.485c-.062-1.45-.36-2.955-1.435-4.03C20.455.43 18.95.133 17.5.07 16.22.012 15.812 0 12 0z"/>
            </svg>
          </a>
        </div>
      </div>

      <p className="text-gray-700 mb-4">
        Windows 11 Home. AMD Ryzen™ 5 processor. AMD Radeon™ Graphics. 16 GB memory; 256 GB SSD storage. 13.3" diagonal WUXGA display.
      </p>

      <p className="text-pink-500 font-medium mb-4">Type: laptop</p>

      <p className="text-2xl font-bold text-gray-900 mb-6">$390</p>

      <div className="flex gap-4">
        <button className="px-6 py-2 text-white bg-pink-500 rounded-lg hover:bg-pink-600 transition">
          Add to Cart
        </button>
        <button className="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:text-gray-900 hover:border-gray-500 transition">
          Add to Wishlist
        </button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default ProductsDetails;
