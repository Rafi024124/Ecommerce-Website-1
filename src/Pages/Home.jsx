import React from "react";
import ProductGrid from "../Components/ProductGrid";
import Footer from "../Components/Footer";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../Features/Products/ProductSlice";

const categories = [
  "All",
  "Graphics Card",
  "Laptop",
  "Monitor",
  "Power Supply",
];

function Home() {


const dispatch = useDispatch()




  return (
    <div>
     
      <div className="bg"></div>
      <div className="container mx-auto my-10 px-2">
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map((category, index) => {
            return (
              <button
                key={index} // Add the key prop
                onClick={() => {
                  
                  dispatch(setSelectedCategory(category));
                }}
                className="mx-3 bg-gradient-to-r from-red-500 to-blue-950 text-white py-2 px-4 rounded transition-all duration-300 hover:scale-105"
              >
                {category}
              </button>
            );
          })}
        </div>
        <ProductGrid />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
