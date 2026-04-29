import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const scheduleData = [
  {
    day: "Day 1",
    date: "March 15, 2027",
    events: [
      { time: "09:00 AM", title: "Registration & Welcome Coffee", description: "Collect your badges and network with early arrivals.", highlighted: false },
      { time: "10:00 AM", title: "Opening Keynote: Vision 2030", description: "Industry leaders discuss the future landscape of global hospitality.", highlighted: true },
      { time: "11:30 AM", title: "Panel: Sustainable Luxury", description: "Balancing eco-friendly practices with premium guest experiences.", highlighted: false },
      { time: "01:00 PM", title: "Networking Lunch", description: "A curated culinary experience at the Grand Pavilion.", highlighted: false },
      { time: "02:30 PM", title: "Tech & Innovation Showcase", description: "Exploring AI, automation, and next-gen property management.", highlighted: false },
    ]
  },
  {
    day: "Day 2",
    date: "March 16, 2027",
    events: [
      { time: "09:30 AM", title: "Morning Masterclass", description: "Deep dive into dynamic pricing and revenue management.", highlighted: false },
      { time: "11:00 AM", title: "Investment Trends 2027", description: "Fireside chat with top institutional investors and developers.", highlighted: false },
      { time: "12:30 PM", title: "Hi-Aim Excellence Awards", description: "Recognizing outstanding contributions and visionary projects.", highlighted: true },
      { time: "02:00 PM", title: "Closing Remarks & High Tea", description: "Wrap up the conference with networking over exquisite tea selections.", highlighted: false },
    ]
  }
];

const ScheduleSection = () => {
  return (
    <section className="py-24 lg:py-32 relative bg-[#FAFAFA] overflow-hidden">
      {/* Subtle background pattern - very minimal dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-50"></div>
      
      {/* Subtle light gradient at top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent opacity-80 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 lg:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">Agenda</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 mt-4 tracking-tight">
              Event <span className="font-semibold text-brand-900">Schedule</span>
               <div className="w-12 h-0.5  bg-gold-dark  mt-6" />
            </h2>
          </div>
          <Link 
            to="/register" 
            className="px-8 py-4 bg-gradient-to-r from-gold to-gold-dark text-brand-950 rounded-md font-sans font-bold text-lg tracking-wide shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Pre-Register Now
            
          </Link>
        </div>

        {/* Schedule Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {scheduleData.map((dayData, index) => (
            <div 
              key={index} 
              className="bg-white border border-slate-100 rounded-2xl p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500"
            >
              {/* Day Header */}
              <div className="mb-10 border-b border-slate-100 pb-8 flex items-baseline justify-between">
                <h3 className="text-3xl font-semibold text-slate-900 tracking-tight">{dayData.day}</h3>
                <p className="text-shadow-brand-950 font-light tracking-wide">{dayData.date}</p>
              </div>

              {/* Event Timeline */}
              <div className="flex flex-col gap-6">
                {dayData.events.map((event, eventIdx) => (
                  <div 
                    key={eventIdx}
                    className={`relative flex gap-6 md:gap-8 p-5 -mx-5 rounded-xl transition-all duration-300 ${
                      event.highlighted 
                        ? "bg-slate-50 border border-slate-200/80 shadow-sm" 
                        : "hover:bg-slate-50/50 border border-transparent"
                    }`}
                  >
                    {/* Highlight left indicator */}
                    {event.highlighted && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-gold-light rounded-r-full"></div>
                    )}

                    {/* Time Column */}
                    <div className="w-20 pt-1 flex-shrink-0 text-right md:text-left">
                      <span className="text-sm font-semibold text-slate-900 block">{event.time.split(" ")[0]}</span>
                      <span className="text-xs text-shadow-brand-950 font-medium uppercase tracking-widest">{event.time.split(" ")[1]}</span>
                    </div>

                    {/* Content Column */}
                    <div className="flex-1">
                      <h4 className={`text-lg font-medium mb-1.5 tracking-tight ${event.highlighted ? "text-slate-900" : "text-slate-800"}`}>
                        {event.title}
                      </h4>
                      <p className="text-shadow-brand-950 text-sm font-light leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
                        