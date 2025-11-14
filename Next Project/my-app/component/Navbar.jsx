import React from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

function Navbar() {
  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 font-oswald">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-primary cursor-pointer">
          MyBrand
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link
              href="/"
              className="text-foreground hover:text-primary transition duration-300 font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/clientcomp"
              className="text-foreground hover:text-primary transition duration-300 font-medium"
            >
              Client
            </Link>
          </li>
          <li>
            <Link
              href="/servercomp"
              className="text-foreground hover:text-primary transition duration-300 font-medium"
            >
              Server
            </Link>
          </li>
           <Link
              href="/projects/joke"
              className="text-foreground hover:text-primary transition duration-300 font-medium"
            >
              Jokes Project
            </Link>
            <li>
            <Link
              href="/rendering/static"
              className="text-foreground hover:text-primary transition duration-300 font-medium"
            >
              Static Rendering
            </Link>
            </li>
              <li>
            <Link
              href="/rendering/dynamic"
              className="text-foreground hover:text-primary transition duration-300 font-medium"
            >
              Dynamic Rendering
            </Link>
          </li>
              <li>
            <Link
              href="/hospital"
              className="text-foreground hover:text-primary transition duration-300 font-medium"
            >
             Hospital
            </Link>
          </li>
          <li>
         
            <Link
              href="/rendering/cache"
              className="text-foreground hover:text-primary transition duration-300 font-medium"
            >
            Cache
            </Link>
             </li>
          <li>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition duration-300 font-medium"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/about/team"
              className="text-foreground hover:text-primary transition duration-300 font-medium"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href="/service"
              className="text-foreground hover:text-primary transition duration-300 font-medium"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition duration-300 font-medium"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Theme Toggle */}
        <div className="flex items-center">
          <ThemeToggle />
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
