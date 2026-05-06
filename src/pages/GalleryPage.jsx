import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../components/UI/ScrollReveal";

const GalleryPage = () => (
  <div className="bg-white min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 py-16 px-4 max-w-5xl mx-auto">
      <ScrollReveal direction="up">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Gallery</h1>
      </ScrollReveal>
      <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Example images, replace with real ones */}
        <StaggerItem><img src="/assets/hero.png" alt="Gallery 1" className="rounded-lg shadow" /></StaggerItem>
        <StaggerItem><img src="/assets/hero.png" alt="Gallery 2" className="rounded-lg shadow" /></StaggerItem>
        <StaggerItem><img src="/assets/hero.png" alt="Gallery 3" className="rounded-lg shadow" /></StaggerItem>
        <StaggerItem><img src="/assets/hero.png" alt="Gallery 4" className="rounded-lg shadow" /></StaggerItem>
      </StaggerContainer>
    </main>
    <Footer />
  </div>
);

export default GalleryPage;
