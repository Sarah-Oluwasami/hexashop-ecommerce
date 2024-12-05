import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  let cart = useSelector((state) => state.cart.carts);

  const [isOpen, setIsOpen] = useState(true);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-0 left-2 z-20  my-2 rounded-md block sm:hidden"
      >
        <img src="/images/navbar-icon.png" alt="" className="w-6" />
      </button>
      <nav
        className={`fixed 
         ${
           isOpen ? "translate-x-0" : "-translate-x-full"
         } transition-transform duration-300 top-0 z-10 flex flex-col sm:flex-row justify-between  sm:px-4 py-8 pb-4 max-[640px]:h-[100%] px-2 sm:w-[100%] bg-gradient-to-r from-slate-50 to-white`}
      >
        <nav className="flex flex-col sm:flex-row justify-around items-start sm:items-end ">
          <div className="text-xl lg:text-3xl mt-6 mx-2 flex">
            <img src="/images/login-icon.png" alt="" className="w-8" />
            <h1>HEXASHOP</h1>
          </div>
          <div className="flex flex-col sm:flex-row mt-6 text-[10px] lg:text-sm">
            <Link
              to={"/overview"}
              className="font-bold mt-6  xl:px-6 p-2 max-sm:w-32  hover:bg-sky-100 focus:text-cyan-500"
            >
              HOME
            </Link>

            <Link
              to={"/about"}
              className="font-bold  mt-6 xl:px-6 p-2 max-sm:w-32 hover:bg-sky-100 focus:text-cyan-500"
            >
              ABOUT US
            </Link>

            <Link
              to={"/contact"}
              className="font-bold mt-6 xl:px-6 p-2 max-sm:w-32 hover:bg-sky-100 focus:text-cyan-500"
            >
              CONTACT US
            </Link>
          </div>
        </nav>

        <div className="flex sm:justify-end items-end sm:px-6">
          <img src="/images/user-icon.jpg" alt="" className=" h-6 mx-4" />
          <Link
            to={"/cart"}
            className="border-2 border-black bg-white px-2 rounded-lg text-sm"
          >
            Cart({cart.length})
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
