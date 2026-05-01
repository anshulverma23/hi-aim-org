import React from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

const HIGHLIGHTS = [
  {
    title: "Panel discussions with industry leaders",
    desc: "Insightful sessions featuring hospitality industry experts sharing their wisdom and vision for the future of the industry.",
  },
  {
    title: "Networking opportunities with professionals",
    desc: "Build valuable connections with industry peers from around the globe through our curated networking sessions.",
  },
  {
    title: "Exposition of latest products and services",
    desc: "Discover cutting-edge innovations in hospitality technology and services from leading exhibitors worldwide.",
  },
  {
    title: "Knowledge sharing and learning sessions",
    desc: "Gain valuable insights and best practices from industry pioneers through interactive workshops.",
  },
  {
    title: "Exclusive insights into hospitality trends",
    desc: "Stay updated on the latest industry developments, emerging trends, and future outlook with expert analysis.",
    colSpan: true,
  },
];

const HighlightsSection = () => {
  return (
    <>
     
    <section id="highlights" className="py-24 bg-[#FAFAFA]">

      <div className="absolute inset-0 -z-10">
    <img
      src="/experience-bg.jpg"
      alt=""
      className="w-full h-full object-cover opacity-20"
    />
  </div>
     
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          
          <div className="max-w-2xl">
            
            <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">
              Why Attend
            </span>

            <h2 className="text-3xl md:text-5xl font-light text-gray-900 mt-4">
              HI-AIM{" "}
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-dark">Highlights</span>
            </h2>

            <div className="w-12 h-0.5  bg-gold-dark  mt-6" />
          </div>

          <p className="text-shadow-brand-950 text-lg font-light max-w-md">
            Experience five days of unparalleled networking, learning, and
            growth with industry pioneers.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {HIGHLIGHTS.map((item, index) => (
            <div
              key={index}
              className={`group p-8 border border-gray-200 hover:text-shadow-brand-950 bg-white hover:bg-gray-50 transition-all duration-300 rounded-xl shadow-sm hover:shadow-md cursor-pointer ${
                item.colSpan ? "md:col-span-2 md:w-2/3 md:mx-auto" : ""
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="text-brand-400 text-xl font-light opacity-60 mt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h4 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-brand-900 transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-shadow-brand-950  font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="px-7 py-3 bg-gradient-to-r from-gold to-gold-dark text-brand-950 rounded-md font-sans font-bold text-sm tracking-widest uppercase shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 hover:-translate-y-0.5">
            Explore All Highlights
            
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default HighlightsSection;
