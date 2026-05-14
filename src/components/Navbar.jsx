import { useState, useEffect, useRef } from "react";
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
    ],
  },
  {
    label: "HI AIM 2027",
    href: "#",
    dropdown: [
      { label: "Program", href: "/program" },
      { label: "Venue", href: "/host-hotel.html" },
      { label: "Speakers", href: "/speakers" },
      { label: "Exhibitors Profiles", href: "/exhibitor-profile.html" },
      { label: "Sponsorship Details", href: "/sponsors.html" },
      { label: "Exposition Layout", href: "/exposition-layout.html" },
      {
        label: "Guidelines For Exhibitors",
        href: "/exhibitors-guidelines.html",
      },
      { label: "Registration T & C", href: "/registration-t-c.html" },
      {
        label: "Delegate Registration Form",
        href: "/booking-conference.html",
      },
    ],
  },
  { label: "GALLERY", href: "/gallery" },
  {
    label: "NEWS",
    href: "#",
    dropdown: [
      { label: "Media Coverage", href: "/media-coverage.html" },
      { label: "Press Releases", href: "/news.html" },
    ],
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
    ],
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
    ],
  },
  { label: "CONTACT US", href: "/contact-us" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [navHeight, setNavHeight] = useState(68);

  const dropdownTimeout = useRef(null);
  const navRef = useRef(null);

  const location = useLocation();

  // Track nav height
  useEffect(() => {
    const updateHeight = () => {
      if (navRef.current) {
        setNavHeight(navRef.current.offsetHeight);
      }
    };

    updateHeight();

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  // Sticky Navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Desktop dropdown
  const handleMouseEnter = (label) => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }

    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // Mobile dropdown
  const toggleMobileDropdown = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <header
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          sticky
            ? "bg-white/95 backdrop-blur-sm shadow-sm py-4"
            : "bg-white/70 backdrop-blur-md py-6"
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-4 lg:px-8 flex justify-between items-center h-14">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img src="/logo.png" alt="HI-AIM Logo" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                {link.label === "CONTACT US" ? (
                  <Link
                    to={link.href}
                    className="ml-2 px-5 whitespace-nowrap py-2.5 bg-gradient-to-r from-gold to-gold-dark text-black rounded-md font-bold text-[0.85rem] tracking-widest uppercase shadow-[0_0_16px_rgba(212,175,55,0.25)] hover:shadow-[0_0_24px_rgba(212,175,55,0.45)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Contact Us
                  </Link>
                ) : (
                  <Link
                    to={link.href}
                    onClick={(e) => link.dropdown && e.preventDefault()}
                    className={`px-3 py-2 rounded-md text-sm font-semibold tracking-wide transition-all flex items-center gap-1 ${
                      activeDropdown === link.label
                        ? "text-gold-dark text-[1rem] bg-brand-50"
                        : "text-black text-[1rem] hover:text-gold-dark hover:bg-brand-50"
                    }`}
                  >
                    {link.label}

                    {link.dropdown && (
                      <HiChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden z-50">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block px-4 py-2.5 text-sm text-brand-700 hover:bg-brand-50 hover:text-gold-dark transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            className="lg:hidden p-2 rounded-md text-brand-900 hover:bg-brand-50 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </nav>
      </header>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed right-0 z-50 lg:hidden bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          top: `${navHeight}px`,
          height: `calc(100dvh - ${navHeight}px)`,
          width: "300px",
        }}
      >
        <div className="flex-1 overflow-y-auto overscroll-contain p-4">
          {NAV_LINKS.map((link) => (
            <div
              key={link.label}
              className="border-b border-gray-100 last:border-0"
            >
              <div className="flex justify-between items-center">
                {link.label === "CONTACT US" ? (
                  <Link
                    to={link.href}
                    className="ml-2 px-5 py-2.5 bg-gradient-to-r from-gold to-gold-dark text-brand-950 rounded-md font-bold text-xs tracking-widest uppercase shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    Contact Us
                  </Link>
                ) : link.dropdown ? (
                  <button
                    className="flex-1 flex justify-between items-center py-3.5 px-2 text-sm font-semibold text-brand-800 text-left"
                    onClick={() => toggleMobileDropdown(link.label)}
                  >
                    <span>{link.label}</span>

                    <HiChevronDown
                      className={`w-4 h-4 text-brand-400 transition-transform duration-200 flex-shrink-0 ${
                        activeDropdown === link.label
                          ? "rotate-180 text-gold-dark"
                          : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className="flex-1 py-3.5 px-2 text-sm font-semibold text-brand-800 block"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>

              {/* Mobile Dropdown */}
              {link.dropdown && activeDropdown === link.label && (
                <div className="mb-2 ml-3 flex flex-col border-l-2 border-gold/30 pl-3">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="py-2 text-sm text-brand-600 hover:text-gold-dark transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;