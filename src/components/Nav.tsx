import { useState } from "react";
import logoText from "../assets/logo-text.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center justify-between py-4">
          <a href="#">
            <img src={logoText} alt="Dev Stack" className="h-8 object-contain" />
          </a>

          <ul className="flex items-center gap-8 font-medium text-[#475569]">
            <li><a href="#" className="text-pink-600 font-semibold">Home</a></li>
            <li><a href="#technologies" className="hover:text-gray-900 transition">Technologies</a></li>
            <li><a href="#projects" className="hover:text-gray-900 transition">Projects</a></li>
            <li><a href="#about" className="hover:text-gray-900 transition">About</a></li>
            <li><a href="#contact" className="hover:text-gray-900 transition">Contact</a></li>
          </ul>

          <div className="flex items-center gap-3">
            <button className="text-sm font-medium text-gray-600 hover:text-gray-900 px-3 py-1.5">
              Sign In
            </button>
            <button className="btn btn-sm bg-brand-gradient text-white border-none rounded-full px-5">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="flex md:hidden items-center justify-between py-3">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-md"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          <a href="#">
            <img src={logoText} alt="Dev Stack" className="h-6 object-contain" />
          </a>

          <div className="flex items-center gap-2">
            <button className="text-xs font-medium text-gray-600">
              Sign In
            </button>
            <button className="btn btn-xs bg-brand-gradient text-white border-none rounded-full px-3">
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden py-3 border-t border-gray-100">
            <ul className="flex flex-col gap-2 font-medium text-sm text-gray-600">
              <li><a href="#" onClick={() => setIsOpen(false)} className="block py-1.5 text-pink-600">Home</a></li>
              <li><a href="#technologies" onClick={() => setIsOpen(false)} className="block py-1.5 hover:text-gray-900">Technologies</a></li>
              <li><a href="#projects" onClick={() => setIsOpen(false)} className="block py-1.5 hover:text-gray-900">Projects</a></li>
              <li><a href="#about" onClick={() => setIsOpen(false)} className="block py-1.5 hover:text-gray-900">About</a></li>
              <li><a href="#contact" onClick={() => setIsOpen(false)} className="block py-1.5 hover:text-gray-900">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;

