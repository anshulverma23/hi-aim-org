import React, { useState, useEffect } from "react";
import {
  HiOutlineUserGroup,
  HiOutlineTemplate,
  HiOutlineLocationMarker,
  HiOutlineGlobe,
} from "react-icons/hi";

const AboutSection = () => {
  const [counters, setCounters] = useState({ delegates: 0, exhibitors: 0, countries: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    const section = document.getElementById("about");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const targets = { delegates: 500, exhibitors: 150, countries: 30 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCounters({
        delegates: Math.round(targets.delegates * easeOut),
        exhibitors: Math.round(targets.exhibitors * easeOut),
        countries: Math.round(targets.countries * easeOut),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">About The Event</span>
          <h2 className="text-3xl md:text-5xl font-light text-brand-900 mt-4 mb-6">
            Who should <span className="font-bold">attend?</span>
          </h2>
          <div className="w-12 h-0.5 bg-gold-dark mx-auto" />
        </div>

        {/* Animated Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-20">
          {[
            { icon: HiOutlineUserGroup, value: counters.delegates, label: "Delegates", suffix: "+" },
            { icon: HiOutlineTemplate, value: counters.exhibitors, label: "Exhibitors", suffix: "+" },
            { icon: HiOutlineGlobe, value: counters.countries, label: "Countries", suffix: "+" },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <stat.icon className="w-8 h-8 text-gold-dark mb-4" />
              <div className="text-4xl md:text-5xl font-light text-brand-900 mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-shadow-brand-950 text-sm uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[ 
            { 
              icon: HiOutlineUserGroup,
              title: "Delegates",
              text: "We expect to host a wide gamut of Hospitality industry tycoons, entrepreneurs and professionals.",
            },
            {
              icon: HiOutlineTemplate,
              title: "Exposition",
              text: "Exhibiting companies will cover a wide range of products and services.",
            },
            {
              icon: HiOutlineLocationMarker,
              title: "Hi AiM 2027",
              text: "Sponsors & Venue information coming soon.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group p-8 border border-gray-100 hover:border-gold-light/50 bg-gray-50 hover:bg-white transition-all duration-300 rounded-lg"
            >
              <item.icon className="w-8 h-8 text-brand-900 group-hover:text-gold-dark transition-colors mb-6" />
              <h4 className="text-xl font-medium text-brand-900 mb-3 tracking-wide">
                {item.title}
              </h4>
              <p className="text-shadow-brand-950 font-light leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;