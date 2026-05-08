import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./UI/ScrollReveal";

const Footer = () => {
  return (
    <footer className="bg-brand-950 text-white border-t border-brand-800 pt-10 md:pt-20 pb-6 md:pb-8 mt-12 md:mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 mb-8 md:mb-16">
          
          {/* Brand Column */}
          <StaggerItem className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl sm:text-3xl font-display font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-dark">
                HI-AIM
              </span>
            </Link>

            <p className="text-brand-300 font-sans font-light leading-relaxed text-sm max-w-sm mx-auto sm:mx-0">
              A premier platform for hospitality industry leaders to connect,
              collaborate, and grow.
            </p>
          </StaggerItem>

          {/* Quick Links */}
          <StaggerItem className="text-center sm:text-left">
            <h4 className="font-display font-bold text-white mb-3 md:mb-5 uppercase tracking-widest text-xs border-b border-brand-800 pb-2 inline-block">
              Quick Links
            </h4>

            <ul className="space-y-2 font-sans text-sm text-brand-300 font-light">
              <li>
                <Link
                  to="/"
                  className="hover:text-gold-light transition-colors"
                >
                  Home
                </Link>
              </li>

              <li>
                <a
                  href="/about-overview.html"
                  className="hover:text-gold-light transition-colors"
                >
                  About Us
                </a>
              </li>

              <li>
                <Link
                  to="/gallery"
                  className="hover:text-gold-light transition-colors"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  to="/contact-us"
                  className="hover:text-gold-light transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </StaggerItem>

          {/* Event */}
          <StaggerItem className="text-center sm:text-left">
            <h4 className="font-display font-bold text-white mb-3 md:mb-5 uppercase tracking-widest text-xs border-b border-brand-800 pb-2 inline-block">
              The Event
            </h4>

            <ul className="space-y-2 font-sans text-sm text-brand-300 font-light">
              <li>
                <a
                  href="/about-program.html"
                  className="hover:text-gold-light transition-colors"
                >
                  Program
                </a>
              </li>

              <li>
                <a
                  href="/speakers.html"
                  className="hover:text-gold-light transition-colors"
                >
                  Speakers
                </a>
              </li>

              <li>
                <a
                  href="/exhibitor-profile.html"
                  className="hover:text-gold-light transition-colors"
                >
                  Exhibitors
                </a>
              </li>

              <li>
                <a
                  href="/sponsors.html"
                  className="hover:text-gold-light transition-colors"
                >
                  Sponsorship
                </a>
              </li>
            </ul>
          </StaggerItem>

          {/* Legal */}
          <StaggerItem className="text-center sm:text-left">
            <h4 className="font-display font-bold text-white mb-3 md:mb-5 uppercase tracking-widest text-xs border-b border-brand-800 pb-2 inline-block">
              Legal
            </h4>

            <ul className="space-y-2 font-sans text-sm text-brand-300 font-light">
              <li>
                <a
                  href="/terms-conditions.html"
                  className="hover:text-gold-light transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a
                  href="/privacy-policy.html"
                  className="hover:text-gold-light transition-colors"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="/registration-t-c.html"
                  className="hover:text-gold-light transition-colors"
                >
                  Registration T&C
                </a>
              </li>
            </ul>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Bar */}
        <ScrollReveal
          direction="up"
          className="border-t border-[rgba(54,71,97,0.5)] pt-5 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3"
        >
          <div className="text-brand-400 font-sans font-light text-xs sm:text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Hi Aim Conference Pvt. Ltd. All rights reserved.
          </div>

          <div className="text-brand-400 font-sans font-light text-xs sm:text-sm text-center md:text-right">
            Designed and Developed by{" "}
            <a
              href="http://www.mind-source.com/"
              className="text-gold hover:text-white transition-colors hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mind Source
            </a>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;