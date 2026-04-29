import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { 
    label: "ABOUT HI AIM", 
    href: "#",
    dropdown: [
      { label: "Overview", href: "/about-overview.html" },
      { label: "About Us", href: "/about-us.html" },
      { label: "Terms & Conditions", href: "/terms-conditions.html" },
      { label: "Privacy Policy", href: "/privacy-policy.html" },
    ]
  },
  { 
    label: "HI AIM 2027", 
    href: "#",
    dropdown: [
      { label: "Program", href: "/about-program.html" },
      { label: "Venue", href: "/host-hotel.html" },
      { label: "Speakers", href: "/speakers.html" },
      { label: "Exhibitors Profiles", href: "/exhibitor-profile.html" },
      { label: "Sponsorship Details", href: "/sponsors.html" },
      { label: "Exposition Layout", href: "/exposition-layout.html" },
      { label: "Guidelines For Exhibitors", href: "/exhibitors-guidelines.html" },
      { label: "Registration T & C", href: "/registration-t-c.html" },
      { label: "Delegate Registration Form", href: "/booking-conference.html" },
    ]
  },
  { label: "GALLERY", href: "/gallery" },
  { 
    label: "NEWS", 
    href: "#",
    dropdown: [
      { label: "Media Coverage", href: "/media-coverage.html" },
      { label: "Press Releases", href: "/news.html" },
    ]
  },
  { 
    label: "TESTIMONIALS", 
    href: "#",
    dropdown: [
      { label: "Testimonials - 2014", href: "/testimonials-2014.html" },
      { label: "Testimonials - 2015", href: "/testimonials-2015.html" },
      { label: "Testimonials - 2016", href: "/testimonials-2016.html" },
      { label: "Testimonials - 2017", href: "/testimonials.html" },
      { label: "Testimonials - 2019", href: "/testimonials-2019.html" },
      { label: "Testimonials - 2022", href: "/testimonials-2022.html" },
      { label: "Testimonials - 2023", href: "/testimonials-2023.html" },
      { label: "Testimonials - 2024", href: "/testimonials-2024.html" },
      { label: "Testimonials - 2025", href: "/testimonials-2025.html" },
    ]
  },
  { 
    label: "ARCHIVES", 
    href: "#",
    dropdown: [
      { label: "Hi Aim 2012", href: "/hiaim-2012.html" },
      { label: "Hi Aim 2013", href: "/hiaim-2013.html" },
      { label: "Hi Aim 2014", href: "/hiaim-2014.html" },
      { label: "Hi Aim 2015", href: "/hiaim-2015.html" },
      { label: "Hi Aim 2016", href: "/hiaim-2016.html" },
      { label: "Hi Aim 2017", href: "/hiaim-2017.html" },
      { label: "Hi Aim 2018", href: "/hiaim-2018.html" },
      { label: "Hi Aim 2019", href: "/hiaim-2019.html" },
      { label: "Hi Aim 2020", href: "/hiaim-2020.html" },
      { label: "Hi Aim 2022", href: "/hiaim-2022.html" },
      { label: "Hi AiM 2023", href: "/hiaim-2023.html" },
      { label: "Hi AiM 2024", href: "/hiaim-2024.html" },
      { label: "Hi AiM 2025", href: "/hiaim-2025.html" },
      { label: "Hi AiM 2026", href: "/hiaim-2026.html" },
    ]
  },
  { label: "CONTACT US", href: "/contact-us" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileHeight, setMobileHeight] = useState(68);
  const dropdownTimeout = useRef(null);
  const navRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const updateHeight = () => {
      if (navRef.current) {
        setMobileHeight(navRef.current.offsetHeight);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  const handleMouseEnter = (label) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (label, e) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        sticky
          ? "bg-white/95 shadow-sm py-1"
          : "backdrop-blur-md bg-white/30 py-2"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-4 lg:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">
          <img src="/logo.png" alt="logo" />
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <div
              key={link.label}
              onMouseEnter={() => handleMouseEnter(link.label)}
              onMouseLeave={handleMouseLeave}
              className="relative"
            >
              <a
                href={link.href}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all flex items-center gap-1
                ${
                  link.label === "CONTACT US"
                    ? "px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-brand-950 rounded-md font-sans font-bold text-lg tracking-wide shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                    : activeDropdown === link.label
                    ? "text-yellow-600 bg-gray-100"
                    : "text-gray-800 hover:text-yellow-600 hover:bg-gray-100"
                }`}
                onClick={(e) => link.dropdown && e.preventDefault()}
              >
                {link.label}
                {link.dropdown && (
                  <HiChevronDown
                    className={`transition ${
                      activeDropdown === link.label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </a>

              {/* Dropdown */}
              {link.dropdown && activeDropdown === link.label && (
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-md mt-1 w-60">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed right-0 top-0 h-full w-[300px] bg-white shadow-lg transition-transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: `${mobileHeight}px` }}
      >
        <div className="p-4 flex flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <div
                className="flex justify-between items-center"
                onClick={(e) =>
                  link.dropdown && toggleMobileDropdown(link.label, e)
                }
              >
                <a
                  href={link.href}
                  className={`block px-4 py-2 rounded-md font-semibold
                  ${
                    link.label === "CONTACT US"
                      ? "px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-brand-950 rounded-md font-sans font-bold text-lg tracking-wide shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 transform hover:-translate-y-1"
                      : "text-gray-800"
                  }`}
                >
                  {link.label}
                </a>
                {link.dropdown && <HiChevronDown />}
              </div>

              {link.dropdown && activeDropdown === link.label && (
                <div className="ml-4 mt-2 flex flex-col ">
                  {link.dropdown.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="py-2 text-sm text-gray-600"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;