import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutSection from "../components/Sections/AboutSection";
import HighlightsSection from "../components/Sections/HighlightsSection";
import ScheduleSection from "../components/Sections/ScheduleSection";
import PartnersSection from "../components/Sections/PartnersSection";
import TestimonialsSection from "../components/Sections/TestimonialsSection";

const HomePage = () => (
  <div className="bg-white min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <Hero />
      <AboutSection />
      <HighlightsSection />
      <ScheduleSection />
      <TestimonialsSection />
      <PartnersSection />
    </main>
    <Footer />      
  </div>
);

export default HomePage;
