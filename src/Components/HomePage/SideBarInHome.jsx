import React from "react";
import {
  RiCalendarScheduleFill,
  RiProfileFill,
  RiArrowDropDownLine,
} from "react-icons/ri";
import {
  MdOutlineSchedule,
  MdCalendarMonth,
  MdEmojiEvents,
} from "react-icons/md";
import { IoMdCash, IoIosDocument } from "react-icons/io";
import { PiExamFill } from "react-icons/pi";

const SideBarInHome = () => {
  return (
    <aside
      id="default-sidebar"
      className="fixed top-0 left-0 h-full w-64 md:w-72 bg-gradient-to-b from-blue-700 via-blue-600 to-blue-400 shadow-xl z-20 transition-all duration-300
      md:relative md:top-auto md:left-auto"
      aria-label="Sidenav"
    >
      <div className="overflow-y-auto py-6 px-4 h-full border-r border-blue-700 scrollbar-none">
        <ul className="space-y-4">
          <li>
            <span className="block text-xl font-bold text-white mb-6 tracking-wide">
              Current Session: <span className="font-extrabold">2024-2028</span>
            </span>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center p-3 w-full text-base font-semibold text-white rounded-xl transition duration-75 group hover:bg-blue-800 focus:bg-blue-900"
              aria-controls="dropdown-pages"
              aria-expanded="false"
              data-collapse-toggle="dropdown-pages"
            >
              <RiCalendarScheduleFill className="text-2xl" />
              <span className="flex-1 ml-4 text-left">Schedule</span>
              <RiArrowDropDownLine className="text-2xl" />
            </button>
            <ul id="dropdown-pages" className="hidden py-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 pl-12 w-full text-base text-white rounded-lg transition duration-75 group hover:bg-blue-800"
                >
                  <MdOutlineSchedule className="text-lg" />
                  <span className="ml-3">Time Table</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 pl-12 w-full text-base text-white rounded-lg transition duration-75 group hover:bg-blue-800"
                >
                  <RiProfileFill className="text-lg" />
                  <span className="ml-3">Attendance</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 pl-12 w-full text-base text-white rounded-lg transition duration-75 group hover:bg-blue-800"
                >
                  <MdCalendarMonth className="text-lg" />
                  <span className="ml-3">Calendar</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center p-3 w-full text-base font-semibold text-white rounded-xl transition duration-75 group hover:bg-blue-800 focus:bg-blue-900"
              aria-controls="dropdown-sales"
              aria-expanded="false"
              data-collapse-toggle="dropdown-sales"
            >
              <IoMdCash className="text-2xl" />
              <span className="flex-1 ml-4 text-left">Fees</span>
              <RiArrowDropDownLine className="text-2xl" />
            </button>
            <ul id="dropdown-sales" className="hidden py-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 pl-12 w-full text-base text-white rounded-lg transition duration-75 group hover:bg-blue-800"
                >
                  <IoMdCash className="text-lg" />
                  <span className="ml-3">College Fees</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 pl-12 w-full text-base text-white rounded-lg transition duration-75 group hover:bg-blue-800"
                >
                  <IoMdCash className="text-lg" />
                  <span className="ml-3">Exam Fees</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 pl-12 w-full text-base text-white rounded-lg transition duration-75 group hover:bg-blue-800"
                >
                  <IoMdCash className="text-lg" />
                  <span className="ml-3">Invoice</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-semibold text-white rounded-xl hover:bg-blue-800 group"
            >
              <MdEmojiEvents className="text-2xl" />
              <span className="flex-1 ml-4">Events</span>
              <span className="inline-flex justify-center items-center w-7 h-7 text-xs font-bold rounded-full text-blue-800 bg-white ml-2">
                6
              </span>
            </a>
          </li>
          <li>
            <button
              type="button"
              className="flex items-center p-3 w-full text-base font-semibold text-white rounded-xl transition duration-75 group hover:bg-blue-800 focus:bg-blue-900"
              aria-controls="dropdown-authentication"
              aria-expanded="false"
              data-collapse-toggle="dropdown-authentication"
            >
              <PiExamFill className="text-2xl" />
              <span className="flex-1 ml-4 text-left">Exams</span>
              <RiArrowDropDownLine className="text-2xl" />
            </button>
            <ul id="dropdown-authentication" className="hidden py-2 space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 pl-12 w-full text-base text-white rounded-lg transition duration-75 group hover:bg-blue-800"
                >
                  <PiExamFill className="text-lg" />
                  <span className="ml-3">MST Results</span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center p-2 pl-12 w-full text-base text-white rounded-lg transition duration-75 group hover:bg-blue-800"
                >
                  <PiExamFill className="text-lg" />
                  <span className="ml-3">Final Result</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="pt-8 mt-8 space-y-2 border-t border-blue-300">
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-semibold text-white rounded-xl hover:bg-blue-800 group"
            >
              <IoIosDocument className="text-2xl" />
              <span className="ml-4">Docs</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-3 text-base font-semibold text-white rounded-xl hover:bg-blue-800 group"
            >
              <MdOutlineSchedule className="text-2xl" />
              <span className="ml-4">Components</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default SideBarInHome;
