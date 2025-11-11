import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 font-oswald">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 cursor-pointer">
          MyBrand
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/clientcomp"
              className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
            >
              Client
            </Link>
          </li>
          <li>
            <Link
              href="/servercomp"
              className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
            >
              Server
            </Link>
          </li>
           <Link
              href="/projects/joke"
              className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
            >
              Jokes Project
            </Link>
            <li>
            <Link
              href="/rendering/static"
              className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
            >
              Static Rendering
            </Link>
            </li>
              <li>
            <Link
              href="/rendering/dynamic"
              className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
            >
              Dynamic Rendering
            </Link>
          </li>
          <li>
         
            <Link
              href="/rendering/cache"
              className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
            >
            Cache
            </Link>
             </li>
          <li>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/about/team"
              className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href="/service"
              className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition duration-300 font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>

        
      </div>
    </nav>
  );
}

export default Navbar;
