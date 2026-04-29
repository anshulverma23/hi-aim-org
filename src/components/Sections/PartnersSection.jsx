import React from "react";
import { HiOutlineSparkles, HiOutlineStar, HiOutlineBadgeCheck, HiOutlineUserGroup, HiOutlinePresentationChartBar, HiOutlineOfficeBuilding, HiOutlineMail } from "react-icons/hi";

const partners = [
  { title: "TITLE SPONSOR", name: "Coming soon...", icon: HiOutlineSparkles },
  { title: "PATRON SPONSOR", name: "Coming soon...", icon: HiOutlineStar },
  { title: "PLATINUM SPONSOR", name: "Coming soon...", icon: HiOutlineBadgeCheck },
  { title: "GOLD SPONSORS", name: "Coming soon...", icon: HiOutlineUserGroup },
  { title: "ASSOCIATE SPONSORS", name: "Coming soon...", icon: HiOutlinePresentationChartBar },
  { title: "EXHIBITORS", name: "Coming soon...", icon: HiOutlineOfficeBuilding },
  { title: "HI TEA SPONSOR", name: "Coming soon...", icon: HiOutlineMail },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">Sponsorship</span>
          <h2 className="text-3xl md:text-5xl font-light text-brand-900 mt-4 mb-6">
            Our <span className="font-bold">Partners</span>
          </h2>
          <div className="w-12 h-0.5 bg-gold-dark mx-auto mb-6" />
          <p className="text-shadow-brand-950 font-light text-lg">Join industry leaders in supporting this premier hospitality event</p>
        </div>

        {/* Content Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx} 
                className={`group p-8 border border-gray-100 bg-white hover:border-gold-light/50 hover:shadow-lg transition-all duration-300 rounded-lg flex flex-col items-center text-center ${idx === partners.length - 1 ? "md:col-start-2 lg:col-start-auto" : ""}`}
              >
                <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center mb-6 group-hover:bg-gold-light/10 transition-colors">
                  <Icon className="text-xl text-brand-900 group-hover:text-gold-dark transition-colors" />
                </div>
                <h4 className="font-medium text-brand-900 mb-2 text-sm tracking-wider uppercase">
                  {p.title}
                </h4>
                <div className="text-brand-500 font-light italic text-sm">
                  {p.name}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
