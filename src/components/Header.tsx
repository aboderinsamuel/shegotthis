import React from "react";
import { Users, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/#contact" },
  ];

  // Handle smooth scrolling for hash links on the home page
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href === "/#contact") {
      e.preventDefault();
      if (location.pathname === "/") {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        const footer = document.querySelector("footer");
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else if (href?.startsWith("/#")) {
      e.preventDefault();
      if (location.pathname !== "/") {
        window.location.href = href;
      } else {
        const element = document.querySelector(href.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    setIsMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector("nav");
      if (isMenuOpen && nav && !nav.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // Scroll to contact section if URL contains #contact
  useEffect(() => {
    if (location.hash === "#contact") {
      if (location.pathname === "/") {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        const footer = document.querySelector("footer");
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, [location]);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Users className="h-8 w-8 text-pink-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">
              Yes She Can
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={handleClick}
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/support"
              className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors"
            >
              Support Our Mission
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white border-t border-gray-100">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={handleClick}
                className="block py-3 px-4 text-gray-600 hover:bg-gray-50 hover:text-pink-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/support"
              className="block py-3 px-4 mt-2 text-center bg-pink-600 text-white hover:bg-pink-700 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Support Our Mission
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
