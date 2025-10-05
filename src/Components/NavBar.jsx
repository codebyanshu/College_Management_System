import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // icons for hamburger
import UserLogo from "./userLogo";
import LoginButton from "./LoginButton";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 h-14 flex items-center justify-between px-4">
      <a href="/" className="text-3xl text-blue-400 font-bold font-mono">
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
        } absolute top-16 left-0 w-full bg-gray-900 md:bg-transparent md:static md:w-auto md:flex items-center gap-[2rem]`}
      >
        <ul
          className="flex flex-col font-medium p-4 md:p-0 border border-gray-700 md:border-0 
          bg-gray-900 md:bg-transparent md:flex-row md:space-x-8 md:mt-0"
        >
          <li>
            <a
              href="#"
              className="block py-2 px-3 rounded-sm md:p-0 
              text-blue-500 font-semibold 
              underline underline-offset-4 decoration-blue-500
              hover:text-blue-700 hover:underline hover:underline-offset-4 hover:decoration-blue-500"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block py-2 px-3 rounded-sm md:p-0 
              text-gray-300 hover:text-blue-400 hover:underline hover:underline-offset-4 hover:decoration-blue-500"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block py-2 px-3 rounded-sm md:p-0 
              text-gray-300 hover:text-blue-400 hover:underline hover:underline-offset-4 hover:decoration-blue-500"
            >
              Courses
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block py-2 px-3 rounded-sm md:p-0 
              text-gray-300 hover:text-blue-400 hover:underline hover:underline-offset-4 hover:decoration-blue-500"
            >
              Academics
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block py-2 px-3 rounded-sm md:p-0 
              text-gray-300 hover:text-blue-400 hover:underline hover:underline-offset-4 hover:decoration-blue-500"
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
