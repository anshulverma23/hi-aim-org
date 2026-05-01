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
    <section id="about" className="py-24 bg-white relative overflow-hidden">
    
      
      
      <div className="absolute left-0 top-0 w-full h-20 bg-white"></div>
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">
            About The Event
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-brand-900 mt-4 mb-6">
            Who should <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-dark">attend?</span>
          </h2>
          <div className="w-12 h-0.5 bg-gold-dark mx-auto mb-6" />
          <p className="text-brand-900 font-light text-lg leading-relaxed">
            HI-AIM brings together the brightest minds in hospitality — from seasoned
            executives to emerging innovators — for two days of learning, connection, and growth.
          </p>
        </div>   

        {/* Animated Counters — visually connected block */}
        <div className="bg-brand-900 rounded-2xl px-8 py-12 mb-16 grid grid-cols-1 md:grid-cols-3 gap-10 relative overflow-hidden">
          {/* Gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

          {[
            { icon: HiOutlineUserGroup, value: counters.delegates, label: "Delegates", suffix: "+" },
            { icon: HiOutlineTemplate, value: counters.exhibitors, label: "Exhibitors", suffix: "+" },
            { icon: HiOutlineGlobe, value: counters.countries, label: "Countries", suffix: "+" },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <stat.icon className="w-6 h-6 text-gold" />
              </div>
              <div className="text-4xl md:text-5xl font-light text-white mb-2">
                {stat.value}<span className="text-gold">{stat.suffix}</span>
              </div>
              <div className="text-brand-300 text-sm uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: HiOutlineUserGroup,
              title: "Delegates",
              text: "We expect to host a wide gamut of Hospitality industry tycoons, entrepreneurs and professionals.",
            },
            {
              icon: HiOutlineTemplate,
              title: "Exposition",
              text: "Exhibiting companies will cover a wide range of products and services across the hospitality spectrum.",
            },
            {
              icon: HiOutlineLocationMarker,
              title: "Hi AiM 2027",
              text: "Sponsors & Venue information coming soon. Stay tuned for exciting announcements.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group p-8 border border-gray-100 hover:border-gold/30 bg-gray-50 hover:bg-white transition-all duration-300 rounded-xl hover:shadow-lg"
            >
              <div className="w-10 h-10 rounded-lg bg-brand-50 group-hover:bg-gold/10 flex items-center justify-center mb-6 transition-colors">
                <item.icon className="w-5 h-5 text-brand-700 group-hover:text-gold-dark transition-colors" />
              </div>
              <h4 className="text-xl font-semibold text-brand-900 mb-3 tracking-wide">
                {item.title}
              </h4>
              <p className="text-brand-600 font-light leading-relaxed">
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