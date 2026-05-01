import React from "react";
import { Link } from "react-router-dom";

const scheduleData = [
  {
    day: "Day 1",
    date: "March 15, 2027",
    events: [
      {
        time: "09:00 AM",
        title: "Registration & Welcome Coffee",
        description: "Collect your badges and network with early arrivals.",
        highlighted: false,
      },
      {
        time: "10:00 AM",
        title: "Opening Keynote: Vision 2030",
        description:
          "Industry leaders discuss the future landscape of global hospitality.",
        highlighted: true,
      },
      {
        time: "11:30 AM",
        title: "Panel: Sustainable Luxury",
        description:
          "Balancing eco-friendly practices with premium guest experiences.",
        highlighted: false,
      },
      {
        time: "01:00 PM",
        title: "Networking Lunch",
        description: "A curated culinary experience at the Grand Pavilion.",
        highlighted: false,
      },
      {
        time: "02:30 PM",
        title: "Tech & Innovation Showcase",
        description:
          "Exploring AI, automation, and next-gen property management.",
        highlighted: false,
      },
    ],
  },
  {
    day: "Day 2",
    date: "March 16, 2027",
    events: [
      {
        time: "09:30 AM",
        title: "Morning Masterclass",
        description: "Deep dive into dynamic pricing and revenue management.",
        highlighted: false,
      },
      {
        time: "11:00 AM",
        title: "Investment Trends 2027",
        description:
          "Fireside chat with top institutional investors and developers.",
        highlighted: false,
      },
      {
        time: "12:30 PM",
        title: "Hi-Aim Excellence Awards",
        description:
          "Recognizing outstanding contributions and visionary projects.",
        highlighted: true,
      },
      {
        time: "02:00 PM",
        title: "Closing Remarks & High Tea",
        description:
          "Wrap up the conference with networking over exquisite tea selections.",
        highlighted: false,
      },
    ],
  },
];

const ScheduleSection = () => {
  return (
    <section className="py-24 lg:py-32 relative bg-[#FAFAFA] overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 lg:mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">
              Agenda
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-brand-900 mt-4 tracking-tight">
              Event <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-dark">Schedule</span>
            </h2>
            <div className="w-12 h-0.5 bg-gold-dark mt-6" />
          </div>
          <Link
            to="/register"
            className="px-7 py-3 bg-gradient-to-r from-gold to-gold-dark text-brand-950 rounded-md font-sans font-bold text-sm tracking-widest uppercase shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Pre-Register Now
          </Link>
        </div>

        {/* Schedule Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {scheduleData.map((dayData, index) => (
            <div
              key={index}
              className="bg-white border border-slate-100 rounded-2xl p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500"
            >
              {/* Day Header */}
              <div className="mb-10 border-b border-slate-100 pb-6 flex items-baseline justify-between">
                <h3 className="text-2xl font-semibold text-brand-900 tracking-tight">
                  {dayData.day}
                </h3>
                <p className="text-brand-500 font-light tracking-wide text-sm">
                  {dayData.date}
                </p>
              </div>

              {/* Timeline */}
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-slate-100" />

                <div className="flex flex-col gap-0">
                  {dayData.events.map((event, eventIdx) => (
                    <div
                      key={eventIdx}
                      className="relative flex gap-6 pb-7 last:pb-0"
                    >
                      {/* Timeline dot */}
                      <div className="relative z-10 flex-shrink-0 mt-1.5">
                        {event.highlighted ? (
                          <div className="w-4 h-4 rounded-full bg-gold border-2 border-gold-dark shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
                        ) : (
                          <div className="w-4 h-4 rounded-full bg-white border-2 border-slate-200" />
                        )}
                      </div>

                      {/* Content */}
                      <div
                        className={`flex-1 rounded-xl p-4 -mt-0.5 transition-all duration-300 ${
                          event.highlighted
                            ? "bg-amber-50 border border-gold/30"
                            : "hover:bg-slate-50/70 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-1.5">
                          <span className="text-xs font-semibold text-gold-dark tracking-widest uppercase">
                            {event.time}
                          </span>
                          {event.highlighted && (
                            <span className="text-xs font-medium text-gold-dark bg-gold/10 px-2 py-0.5 rounded-full">
                              Featured
                            </span>
                          )}
                        </div>
                        <h4
                          className={`text-base font-semibold mb-1 tracking-tight ${event.highlighted ? "text-brand-900" : "text-slate-800"}`}
                        >
                          {event.title}
                        </h4>
                        <p className="text-brand-500 text-sm font-light leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
