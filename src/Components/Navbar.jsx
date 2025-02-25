import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, ShoppingCart, SpaceIcon } from "lucide-react";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { setSearchItem } from "../Features/Products/ProductSlice";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

const dispatch = useDispatch()

const searchTerm = useSelector((state) => state.product.searchTerm);

const cartItems = useSelector((state)=> state.cart.items)
const itemCount = cartItems.reduce((total,item)=> total+ item.quantity,0)



  const handleUser = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="bg-white shadow-md">



      <>
        <div className=" py-4 shadow-md">
          <ul className="flex flex-wrap justify-between px-20 items-center">
            <div className="flex gap-4">
              <li>
                <Link
                  to="/"
                  className="relative bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent transition-all duration-300 
             after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 
             after:bg-gradient-to-r after:from-blue-500 after:to-red-500 
             hover:after:w-full after:transition-all after:duration-300"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="relative bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent transition-all duration-300 
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 
                after:bg-gradient-to-r after:from-blue-500 after:to-red-500 
                hover:after:w-full after:transition-all after:duration-300"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="relative bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent transition-all duration-300 
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 
                after:bg-gradient-to-r after:from-blue-500 after:to-red-500 
                hover:after:w-full after:transition-all after:duration-300"
                >
                  FAQS
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="relative bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent transition-all duration-300 
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-0.5 
                after:bg-gradient-to-r after:from-blue-500 after:to-red-500 
                hover:after:w-full after:transition-all after:duration-300"
                >
                  CONTACT
                </Link>
              </li>
            </div>
            <div
  className={`${
    isOpen
      ? "flex flex-col bg-zinc-100 p-4 gap-4 absolute right-6 top-14 duration-300 opacity-100 scale-100"
      : "hidden opacity-0 scale-95"
  }`}
>
              <li>
                <Link to="/" className="hover:text-gray-600">
                  Sign In
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-gray-600">
                  Log In
                </Link>
              </li>
            </div>
            <User
  size={40}
  onClick={handleUser}
  className="p-2 rounded cursor-pointer stroke-[url(#gradient)] transition-all duration-300 hover:scale-110"
>
  <svg width="0" height="0">
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#FF4D4D" /> {/* Lighter red shade */}
      <stop offset="100%" stopColor="#66B2FF" /> {/* Lighter blue shade */}
    </linearGradient>
  </svg>
</User>
          </ul>
        </div>

        <nav className=" nav-bg container mx-auto flex justify-between items-center py-4 md:py-0 px-20">
          <div className="flex items-center">
            <Link to="/" className="py-2 px-2">
              <img src={logo} alt="" className="w-20" />
            </Link>
          </div>
          <form className="w-1/2 sm:block hidden">
            <input
              type="text"
              placeholder="Search Products..."
              value ={searchTerm}
             
              onChange={(e)=>dispatch(setSearchItem(e.target.value))}
              className="bg-zinc-100 py-2 px-2 w-full focus:outline-none rounded-md"
            />
          </form>
          <div className="relative">
          <Link to={"/cart"}>
          <ShoppingCart
  size={40}
  className="p-2 rounded cursor-pointer stroke-[url(#gradient)] transition-all duration-300 hover:scale-110"
>
  <svg width="0" height="0">
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#FF4D4D" /> {/* Lighter red shade */}
      <stop offset="100%" stopColor="#66B2FF" /> {/* Lighter blue shade */}
    </linearGradient>
  </svg>
</ShoppingCart>
{itemCount > 0 && <span className="absolute -top-2 -right-5 bg-blue-500 text-white justify-center text-xs rounded-full w-5 h-5 flex items-center" >{itemCount}</span> }
          </Link>
          </div>
        </nav>
      </>
    </header>
  );
}

export default Navbar;
