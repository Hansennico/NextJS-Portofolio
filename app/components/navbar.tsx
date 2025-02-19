import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
  return (
    <nav className="w-full bg-white dark:bg-[#0a0f1a] text-gray-800 dark:text-white py-4 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-xl font-semibold">
            Logo
          </Link>

          {/* Navigation Links */}
          <div className="hidden sm:flex items-center space-x-8">
            <Link
              href="/"
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              About
            </Link>
            <Link
              href="/projects"
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              Contact
            </Link>
          </div>

          {/* Theme Toggle Button */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
