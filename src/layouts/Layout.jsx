import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = ({ children, backgroundImage }) => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-900">
      <Navbar />
      <main 
        className="flex-1 relative"
        style={backgroundImage ? {
          backgroundImage: `linear-gradient(to bottom, rgba(15,23,42,0.7), rgba(15,23,42,0.9)), url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        } : {}}
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-20 md:py-32">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;