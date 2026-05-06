
import { Link } from "react-router-dom";
import { ScrollReveal, StaggerContainer, StaggerItem } from "./UI/ScrollReveal";

const Footer = () => {
  return (
    <footer className="bg-brand-950 text-white border-t border-brand-800 pt-16 md:pt-20 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-16">
          {/* Brand Column */}
          <StaggerItem className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-display font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-dark">
                HI-AIM
              </span>
            </Link>
            <p className="text-brand-300 font-sans font-light leading-relaxed mb-6 text-sm pr-4">
              A premier platform for hospitality industry leaders to connect, collaborate, and grow.
            </p>
          </StaggerItem>

          {/* Quick Links */}
          <StaggerItem>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs border-b border-brand-800 pb-3 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3 font-sans text-sm text-brand-300 font-light">
              <li><Link to="/" className="hover:text-gold-light transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Home</Link></li>
              <li><a href="/about-overview.html" className="hover:text-gold-light transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>About Us</a></li>
              <li><Link to="/gallery" className="hover:text-gold-light transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Gallery</Link></li>
              <li><Link to="/contact-us" className="hover:text-gold-light transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Contact Us</Link></li>
            </ul>
          </StaggerItem>

          {/* Event */}
          <StaggerItem>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs border-b border-brand-800 pb-3 inline-block">
              The Event
            </h4>
            <ul className="space-y-3 font-sans text-sm text-brand-300 font-light">
              <li><a href="/about-program.html" className="hover:text-gold-light transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Program</a></li>
              <li><a href="/speakers.html" className="hover:text-gold-light transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Speakers</a></li>
              <li><a href="/exhibitor-profile.html" className="hover:text-gold-light transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Exhibitors</a></li>
              <li><a href="/sponsors.html" className="hover:text-gold-light transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Sponsorship</a></li>
            </ul>
          </StaggerItem>

          {/* Legal */}
          <StaggerItem>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-widest text-xs border-b border-brand-800 pb-3 inline-block">
              Legal
            </h4>
            <ul className="space-y-3 font-sans text-sm text-brand-300 font-light">
              <li><a href="/terms-conditions.html" className="hover:text-gold-light transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Terms & Conditions</a></li>
              <li><a href="/privacy-policy.html" className="hover:text-gold-light transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Privacy Policy</a></li>
              <li><a href="/registration-t-c.html" className="hover:text-gold-light transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>Registration T&C</a></li>
            </ul>
          </StaggerItem>
        </StaggerContainer>

        {/* Bottom Bar */}
        <ScrollReveal direction="up" className="border-t border-[rgba(54,71,97,0.5)] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-brand-400 font-sans font-light text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Hi Aim Conference Pvt. Ltd. All rights reserved.
          </div>
          <div className="text-brand-400 font-sans font-light text-sm text-center md:text-right">
            Designed and Developed by <a href="http://www.mind-source.com/" className="text-gold hover:text-white transition-colors hover:underline" target="_blank" rel="noopener noreferrer">Mind Source</a>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
