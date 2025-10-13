import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // icons for hamburger
import UserLogo from "./userLogo";
import LoginButton from "./LoginButton";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#125BFB] flex  justify-between items-center py-5 px-3 rounded-b-sm border border-b-white sticky top-0">
      <a href="/" className="text-3xl text-white font-bold font-mono">
        LKCTC
      </a>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-400 hover:text-blue-500 focus:outline-none"
      >
        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-white md:bg-transparent md:static md:w-auto md:flex items-center gap-[2rem]`}
      >
        <ul
          className="flex flex-col font-medium px-5 py-4 md:p-0  border-0 
          bg-[rgba(36,100,219,0.94)] md:bg-transparent md:flex-row md:space-x-8 md:mt-0"
        >
          <li>
            <a
              href="#"
              className="block py-2 px-3 rounded-sm md:p-0 
              text-white font-semibold 
              underline underline-offset-4 decoration-white
              hover:text-white hover:underline hover:underline-offset-4 hover:decoration-white"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block py-2 px-3 rounded-sm md:p-0 
              text-gray-300 hover:text-white hover:underline hover:underline-offset-4 hover:decoration-[#125BFB] "
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block py-2 px-3 rounded-sm md:p-0 
              text-gray-300 hover:text-white hover:underline hover:underline-offset-4 hover:decoration-[#125BFB] "
            >
              Courses
            </a>
          </li>

          <li>
            <a
              href="#"
             className="block py-2 px-3 rounded-sm md:p-0 
              text-gray-300 hover:text-white hover:underline hover:underline-offset-4 hover:decoration-[#125BFB] "
            >
              Academics
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block py-2 px-3 rounded-sm md:p-0 
              text-gray-300 hover:text-white hover:underline hover:underline-offset-4 hover:decoration-[#125BFB] "
            >
              Contact
            </a>
          </li>
        </ul>
       {props.userlogo? <UserLogo/> : <LoginButton/> }
       
      </div>
      

    </nav>
  );
};

export default NavBar;
