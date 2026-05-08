import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import AboutSection from "../components/Sections/AboutSection";
import PartnersSection from "../components/Sections/PartnersSection";
import TestimonialsSection from "../components/Sections/TestimonialsSection";
import WhyShouldAttend from "../components/Sections/WhyShouldAttend";
import Moments from "../components/Sections/Moments";

const HomePage = () => (
  <div className="bg-white min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1">
      <Hero />
      <AboutSection />
      <Moments />
      <WhyShouldAttend />  
      <TestimonialsSection />
      <PartnersSection />
    </main>
    <Footer />      
  </div>
);

export default HomePage;
