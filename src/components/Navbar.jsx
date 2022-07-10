import React, { useState } from "react";
import { IoMdRestaurant } from "react-icons/io";
import { FaTimes, FaBars } from "react-icons/fa";
import Home from "./Home";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "Recipes",
    },
    {
      id: 3,
      link: "Impressum",
    },
  ];

  return (
    <div>
      <div className="flex flex-row items-center justify-between bg-gradient-to-r from-blue-800 to-gray-900">
        <div className="ml-2 cursor-pointer">
          <a href={Home}>
            <IoMdRestaurant size={50} />
          </a>
        </div>

        <ul className="hidden md:flex flex-row justify-center p-2">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer font-medium text-gray-200 hover:scale-105 duration-200"
            >
              <a href={link}>{link}</a>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-200 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-gray-400 p-2">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer text-gray-400 py-6 text-4xl"
              >
                <a href={link} onClick={() => setNav(!nav)}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
