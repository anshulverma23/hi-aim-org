
import { ScrollReveal } from "../UI/ScrollReveal";

const data = [
  {
    title: "Hi AiM 2023 Awards & Accolades",
    desc: "Experience the 11th Hi-AiM Conference Felicitation Ceremony where industry leaders were honored for their outstanding contributions.",
    video: "https://www.youtube.com/embed/oxHHENm0BuU",
    link: "https://www.youtube.com/watch?v=oxHHENm0BuU",
  },
  {
    title: "Hi AiM 2022 Conference Highlights",
    desc: "Relive the memorable moments from the 10th Hi-AiM Conference showcasing excellence, networking, and knowledge sharing.",
    video: "https://www.youtube.com/embed/L2u5wbx3zwE",
    link: "https://www.youtube.com/watch?v=L2u5wbx3zwE",
  },
];

const Moments = () => {
  return (
    <section className="relative overflow-hidden bg-white border-t border-gray-100 py-16 sm:py-20 md:py-24">
      
      {/* Background Text */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-10 text-transparent [-webkit-text-stroke:2px_#F0F0F0] text-[10rem] lg:text-[16rem] font-bold">
        Moments
      </div>

      <div className="pointer-events-none absolute right-0 bottom-20 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-brand-900/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Heading */}
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-gold-dark text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Discover the Experience
          </span>

          <h2 className="mt-3 sm:mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-900">
            HI-AIM{" "}
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-dark">
              Moments
            </span>
          </h2>

          <div className="mx-auto mt-4 sm:mt-6 h-0.5 w-12 sm:w-16 bg-gold-dark" />
        </ScrollReveal>

        {/* Content */}
        <div className="space-y-8 md:space-y-0">
          {data.map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2  items-center"
            >
              
              {/* VIDEO */}
              <ScrollReveal
                direction={index % 2 === 0 ? "left" : "right"}
                className={`${index % 2 !== 0 ? "md:order-2" : ""}`}
              >
                <div className="w-full aspect-video  overflow-hidden shadow-lg">
                  <iframe
                    src={item.video}
                    title={item.title}
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
              </ScrollReveal>

              {/* TEXT */}
              <ScrollReveal
                direction={index % 2 === 0 ? "right" : "left"}
                className={`${index % 2 !== 0 ? "md:order-1" : ""}`}
              >
                <div className="px-2 sm:px-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-5 sm:mt-6 px-4 sm:px-5 py-2 bg-gradient-to-r from-gold to-gold-dark text-brand-950 rounded-md text-xs sm:text-sm font-medium hover:scale-105 transition"
                  >
                    Watch Now
                  </a>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Moments;