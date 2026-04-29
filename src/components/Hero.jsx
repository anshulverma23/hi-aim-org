import React from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center pt-24 pb-16 px-4 lg:px-8 overflow-hidden bg-white">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0  from-[rgba(15,23,42,0.8)] via-[rgba(15,23,42,0.6)] to-brand-950 z-10" />
       <video src="/cover-video.mp4" autoPlay loop muted className="w-full h-full object-cover object-center  scale-105 transition-transform duration-[20s] hover:scale-100"></video>
        {/* Subtle glowing orbs for luxury feel */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[rgba(212,175,55,0.1)] rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[rgba(99,129,168,0.1)] rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto w-full flex flex-col items-center text-center animate-slide-up">
        {/* Eyebrow Label */}
        <div className="inline-block mb-6 px-5 py-2 rounded-full border border-[rgba(212,175,55,0.4)] bg-[rgba(212,175,55,0.1)] backdrop-blur-sm text-gold-light text-xs md:text-sm font-semibold tracking-widest uppercase">
          A Premier Hospitality Event
        </div>
        
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-[1.15] tracking-tight drop-shadow-xl">
          HI-AIM <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light to-gold-dark">2027</span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl font-serif italic font-medium text-brand-100 mt-2 block">
            Panel Discussion
          </span>
        </h1>
        
        {/* Subheading */}
        <p className="max-w-3xl mx-auto text-lg md:text-xl lg:text-2xl text-brand-200 mb-10 font-sans font-light leading-relaxed">
          A unique platform for hospitality industry leaders, entrepreneurs, and professionals to connect, share, and grow together.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto">
          <Link 
            to="/about-overview.html" 
            className="px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-brand-950 rounded-md font-sans font-bold text-lg tracking-wide shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore Overview
          </Link>
          <Link 
            to="/register" 
            className="px-8 py-4 border border-[rgba(99,129,168,0.5)]
  backdrop-blur-lg bg-white/10
  text-white rounded-md font-sans font-bold text-lg tracking-wide
  hover:bg-[rgba(255,255,255,0.15)]
  hover:border-[rgba(99,129,168,0.2)]
  focus:outline-none focus:ring-0
  active:scale-95
  transition-all duration-300 transform hover:-translate-y-1 shadow-lg
  will-change-transform"
          >
            Register
          </Link>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block opacity-80 hover:opacity-100 transition-opacity">
        <a href="#about" aria-label="Scroll down">
          <div className="w-[30px] h-[50px] rounded-full border-2 border-[rgba(99,129,168,0.5)] flex justify-center p-2">
            <div className="w-1.5 h-3 bg-gold rounded-full" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
