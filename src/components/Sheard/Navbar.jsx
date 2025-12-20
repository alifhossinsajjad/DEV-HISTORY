"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { use, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) {
    return null;
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center xl:lg:md:px-20 px-12 py-4">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          💻 Dev-Story
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
          >
            About Us
          </Link>
          <Link
            href="/stories"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Stories
          </Link>
          <Link
            href="/tutorials"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Tutorials
          </Link>
          <Link
            href="/login"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-gray-700 hover:text-blue-500 transition duration-300"
          >
            Register
          </Link>
        </nav>
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 px-12 py-4">
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              href="/stories"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
              onClick={toggleMenu}
            >
              Stories
            </Link>
            <Link
              href="/tutorials"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
              onClick={toggleMenu}
            >
              Tutorials
            </Link>
            <Link
              href="/login"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="text-gray-700 hover:text-blue-500 transition duration-300"
              onClick={toggleMenu}
            >
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
