"use client"

import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function Sidebar() {
  return (
    <Sheet>
      {/* Button to open sidebar */}
      <SheetTrigger className="p-2 border rounded-md">
        <Menu className="w-6 h-6" />
      </SheetTrigger>

      {/* Sidebar content */}
      <SheetContent side="left" className="w-[260px] p-4">
        <SheetHeader>
          <SheetTitle>Navigation Menu</SheetTitle>
        </SheetHeader>

        <nav className="flex flex-col gap-3 mt-4">
          <Link href="/" className="hover:text-blue-500 transition-colors duration-200">Home</Link>
          <Link href="/about" className="hover:text-blue-500 transition-colors duration-200">About</Link>
          <Link href="/about/team" className="hover:text-blue-500 transition-colors duration-200">Team</Link>
          <Link href="/contact" className="hover:text-blue-500 transition-colors duration-200">Contact</Link>
          <Link href="/service" className="hover:text-blue-500 transition-colors duration-200">Services</Link>
          <Link href="/products" className="hover:text-blue-500 transition-colors duration-200">Products</Link>
          <Link href="/doctors" className="hover:text-blue-500 transition-colors duration-200">Doctors</Link>
          <Link href="/hospital" className="hover:text-blue-500 transition-colors duration-200">Hospital</Link>
          <Link href="/ui" className="hover:text-blue-500 transition-colors duration-200">UI Components</Link>
          <Link href="/ui/carousel" className="hover:text-blue-500 transition-colors duration-200">Carousel</Link>
          <Link href="/ui/drawer" className="hover:text-blue-500 transition-colors duration-200">Drawer</Link>
          <Link href="/projects/joke" className="hover:text-blue-500 transition-colors duration-200">Joke Project</Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
