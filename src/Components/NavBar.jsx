import React from "react";
import { FaUserCircle } from "react-icons/fa";
const LoginPage = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900 max-h-32 h-15 flex justify-between">
        <a
          href="/"
          className="flex items-center space-x-3 ml-4 mt-[4rem] rtl:space-x-reverse"
        >
          <div className=" mt-[-4rem] mx-[1rem] text-3xl text-blue-400 whitespace-nowrap font-bold font-mono">
            LKCTC
          </div>
        </a>
        <div className="max-w-screen-xl flex flex-wrap items-center  p-4 ">
          <div className="flex gap-8 mr-7">
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span className="sr-only">Open user menu</span>
                <FaUserCircle className="w-8 h-8 rounded-full text-blue-500" />
              </button>

              <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">
                    User-Name
                  </span>
                  <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                    name@userName
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
              <button
                data-collapse-toggle="navbar-user"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-user"
                aria-expanded="false"
              ></button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-user"
            >
              <ul
                class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 
md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white 
dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
              >
                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 rounded-sm md:p-0 
      text-blue-600 font-semibold 
      underline underline-offset-4 decoration-blue-500
      hover:text-blue-700 hover:underline hover:underline-offset-4 hover:decoration-blue-500
      dark:text-blue-400 dark:hover:text-blue-500"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="/about"
                    class="block py-2 px-3 rounded-sm md:p-0 
      text-gray-900 dark:text-white
      hover:text-blue-700 hover:underline hover:underline-offset-4 hover:decoration-blue-500
      dark:hover:text-blue-500"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 rounded-sm md:p-0 
      text-gray-900 dark:text-white
      hover:text-blue-700 hover:underline hover:underline-offset-4 hover:decoration-blue-500
      dark:hover:text-blue-500"
                  >
                    Courses
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 rounded-sm md:p-0 
      text-gray-900 dark:text-white
      hover:text-blue-700 hover:underline hover:underline-offset-4 hover:decoration-blue-500
      dark:hover:text-blue-500"
                  >
                    Academics
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    class="block py-2 px-3 rounded-sm md:p-0 
      text-gray-900 dark:text-white
      hover:text-blue-700 hover:underline hover:underline-offset-4 hover:decoration-blue-500
      dark:hover:text-blue-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LoginPage;
