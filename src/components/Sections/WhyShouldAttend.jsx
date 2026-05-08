import {
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlinePresentationChartBar,
  HiOutlineChevronRight,
} from "react-icons/hi";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../UI/ScrollReveal";

const reasons = [
  {
    icon: HiOutlineSparkles,
    title: "DELEGATES",
    desc: "We expect to host a wide gamut of Hospitality industry tycoons, entrepreneurs and professionals.",
    image: "/11.jpg",
  },
  {
    icon: HiOutlineUserGroup,
    title: "EXPOSITION",
    desc: "Exhibiting companies will cover a wide range of products and services",
    image: "/22.jpg",
  },
  {
    icon: HiOutlinePresentationChartBar,
    title: "Hi AiM 2027",
    desc: "Sponsors & Venue",
    image: "/33.jpg",
  },
];

const WhyShouldAttend = () => {
  return (
    <section className="relative overflow-hidden border-t border-gray-100 bg-[#f8f8f8] py-28 lg:py-32">
      
      {/* Background blur effects */}
      <div className="absolute hidden md:block left-1/2 -translate-x-1/2 -top-16 text-transparent [-webkit-text-stroke:2px_#F0F0F0] text-[19rem] font-bold" >Highlights</div>
      <div className="pointer-events-none absolute right-0 bottom-20 h-96 w-96 rounded-full bg-brand-900/10 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <ScrollReveal direction="up" className="text-center max-w-2xl mx-auto mb-16 px-4 sm:px-0">
          <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">
            Who should attend?
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-light text-brand-900 leading-tight">
            HI-AIM{" "}
            <span className="font-bold bg-clip-text text-transparent bg-linear-to-r from-gold to-gold-dark">
              Highlights
            </span>
          </h2>

          <div className="mx-auto mt-6 h-0.5 w-16 rounded-full bg-gold-dark" />

          <p className="mx-auto mt-6 max-w-2xl text-brand-600 font-light text-base sm:text-lg leading-relaxed">
            Explore the premier hospitality gathering for industry leaders, innovators, and decision-makers seeking strategic growth.
          </p>
        </ScrollReveal>

        {/* Cards */}
        <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <StaggerItem key={index}>
                
                {/* Card */}
                <div className="group h-full flex flex-col overflow-hidden rounded-4xl border border-white/80 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1">
                  
                  {/* Image */}
                  <div className="overflow-hidden rounded-t-4xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-72 object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Wrapper */}
                  <div className="relative bg-white px-6 pb-8 pt-6 md:-mt-20 md:px-6 md:pb-8 flex-1 flex flex-col">
                    
                    {/* Inner Content */}
                    <div className="relative rounded-4xl bg-white p-6 shadow-[0_25px_80px_rgba(15,23,42,0.12)] flex flex-col h-full">
                      
                      {/* Icon */}
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-3xl bg-brand-50 text-gold-dark shadow-sm">
                        <Icon className="h-6 w-6" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold text-brand-950 mb-3">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm leading-relaxed text-brand-600 mb-6">
                        {item.desc}
                      </p>

                      {/* Button (Bottom aligned) */}
                      <button className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-brand-950 transition-colors duration-300 hover:text-gold-dark">
                        READ MORE
                        <HiOutlineChevronRight className="h-4 w-4" />
                      </button>

                    </div>
                  </div>

                </div>

              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default WhyShouldAttend;