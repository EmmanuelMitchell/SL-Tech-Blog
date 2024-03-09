import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosClose } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="border-b shadow-md p-4 bg-gray-100 ">
      <div className="flex sm:flex justify-between items-center max-w-6xl mx-auto">
        {/* <h4>Logo</h4> */}

        <img src=" /logo.jpeg" alt="SL-Logo" className="h-12 rounded-full" />

        <div className="hidden sm:inline relative">
          <input
            type="text"
            placeholder="search..."
            className="py-2 px-4 border border-slate-800 outline-none focus:border-slate-800"
          />
          <FaSearch className="absolute bottom-3 -right-0 text-xl font-extrabold" />
        </div>
        <ul className="hidden sm:flex gap-4 text-slate-700 ">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="about">
            <li>About</li>
          </Link>
          <Link to="projects">
            <li>Projects</li>
          </Link>

          {/* <li>SignIn</li> */}
          <Link
            to="sign-up"
            className="py-1 px-3 border border-green-700 hover:bg-gradient-to-r from-green-500 to-blue-600 rounded-md hover:text-white "
          >
            <li>SignUp</li>
          </Link>
        </ul>
        {/* ..............Small Screen Size............ */}
        <div className="sm:hidden">
          {!isOpen ? (
            <div
              className="cursor-pointer"
              onClickCapture={() => setIsOpen(true)}
            >
              <GiHamburgerMenu />
            </div>
          ) : (
            <div className="flex relative  sm:hidden">
              <IoIosClose
                onClick={() => setIsOpen(false)}
                className="text-2xl font-extrabold"
              />
              <ul className="bg-slate-900 flex flex-col gap-2 p-2 text-white h-36 w-screen absolute top-8 -right-4   ">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="about">
                  <li>About</li>
                </Link>
                <Link to="projects">
                  <li>Projects</li>
                </Link>

                {/* <li>SignIn</li> */}
                <Link to="sign-up">
                  <li>SignUp</li>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
