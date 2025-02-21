"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import PasFoto from "@/Public/PasFotoHansen.webp";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const NavLink = ({ href, children }: NavLinkProps) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`transition-all duration-200 ${
          isActive
            ? "text-blue-500 dark:text-blue-400 font-medium glow-effect"
            : "hover:text-gray-600 dark:hover:text-gray-300"
        }`}
        onClick={() => setIsOpen(false)}
      >
        {children}
      </Link>
    );
  };

  return (
    <>
      <style jsx global>{`
        .glow-effect {
          text-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
        }
      `}</style>

      <nav className="w-full bg-white dark:bg-[#0a0f1a] text-gray-800 dark:text-white py-4 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="">
              <Image
                style={{ borderRadius: "32px", overflow: "hidden" }}
                src={PasFoto}
                width={64}
                height={64}
                alt="Picture of the author"
              />
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden sm:flex items-center space-x-8">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/contact">Contact</NavLink>
            </div>

            <div className="flex items-center space-x-4">
              {/* Theme Toggle Button */}
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMenu}
                className="sm:hidden text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Dropdown */}
          {isOpen && (
            <div className="sm:hidden pt-4">
              <div className="flex flex-col space-y-4 pb-4">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
