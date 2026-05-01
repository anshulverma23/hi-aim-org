import React from "react";

const testimonials = [
  {
    name: "Mr. K. B. Kachru",
    title: "Chairman",
    company: "Radisson Hotel Group",
    feedback:
      "I think there is something special about Hi AiM. It brings together the who's who of the hospitality industry and provides a platform for meaningful discussions and networking.",
    image: "/k-b-kachru.jpg",
  },
  {
    name: "Mr. Ajay Bakaya",
    title: "MD",
    company: "Sarovar Hotels",
    feedback:
      "I have been attending this conference every year and it never disappoints. The quality of discussions and connections made here are invaluable for our industry growth.",
    image: "/ajay-bakaya.jpg",
  },
  {
    name: "Mr. Kiran Andicot",
    title: "VP",
    company: "Marriott International",
    feedback:
      "TFCI has been participating in Hi AiM for years. It's an excellent platform to showcase innovations and connect with industry leaders from across the globe.",
    image: "/kiran-andikot.jpg",
  },
  {
    name: "Mr. S. K. Singh",
    title: "Director",
    company: "ITC Hotels",
    feedback:
      "Hi AiM has become the must-attend event for hospitality professionals. The insights gained here are crucial for staying ahead in the competitive industry.",
    image: "/sk-singh.jpg",
  },
  {
    name: "Mr. Rajesh Kumar",
    title: "CEO",
    company: "Taj Resorts",
    feedback:
      "The networking opportunities at Hi AiM are unmatched. We've forged partnerships that have significantly impacted our business growth.",
    image: "/rajesh-kumar.jpg",
  },
];

  export default function TestimonialsSection() {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 lg:py-32 bg-brand-950 overflow-hidden relative">
      {/* Subtle gold radial glow top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 rounded-full blur-[80px] pointer-events-none" />
      {/* Bottom brand glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-brand-800/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 mb-16 lg:mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">
              Words from Leaders
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mt-4 tracking-tight">
              Industry <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-dark">Voices</span>
            </h2>
            <div className="w-12 h-0.5 bg-gold-dark mt-6" />
          </div>
          <p className="text-brand-300 font-light max-w-sm text-base leading-relaxed md:text-right">
            Hear what the most respected names in global hospitality have to say
            about their Hi-Aim experience.
          </p>
        </div>
      </div>

      {/* Infinite Scrolling Marquee */}
      <div className="relative flex overflow-hidden group py-4">
        {/* Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-brand-950 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-brand-950 to-transparent z-20 pointer-events-none" />

        <div className="flex space-x-6 md:space-x-8 animate-marquee pl-6 md:pl-8">
          {duplicatedTestimonials.map((t, i) => (
            <div
              key={i}
              className="w-[320px] md:w-[400px] flex-shrink-0 bg-brand-900 border border-brand-800 hover:border-gold/30 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group/card"
            >
              {/* Quote icon */}
              <div>
                <svg
                  className="w-9 h-9 text-gold/30 group-hover/card:text-gold/60 transition-colors mb-5"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>

                <p className="text-brand-200 font-light text-base leading-relaxed mb-8 line-clamp-4">
                  "{t.feedback}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-brand-800 pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-brand-800 flex-shrink-0 ring-2 ring-gold/20 group-hover/card:ring-gold/50 transition-all">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://ui-avatars.com/api/?name=" +
                        encodeURIComponent(t.name) +
                        "&background=364761&color=d4af37&bold=true";
                    }}
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white tracking-tight text-sm">
                    {t.name}
                  </h4>
                  <p className="text-brand-400 text-xs font-light mt-0.5">
                    {t.title},{" "}
                    <span className="text-gold/80 font-medium">
                      {t.company}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
        @media (min-width: 768px) {
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 16px)); }
          }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
