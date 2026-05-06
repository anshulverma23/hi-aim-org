
import { HiOutlineSparkles } from "react-icons/hi";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../UI/ScrollReveal";

const features = [
  "Curated keynote sessions from hospitality leaders",
  "Future-ready networking and innovation labs",
  "Design thinking for guest experience excellence",
  "Exclusive access to emerging hospitality ",
];

const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden py-28 lg:py-32 border-t border-gray-100 bg-[#f8f8f8]">
      <div className="absolute left-20 top-12 text-transparent [-webkit-text-stroke:2px_#f0f0f0] text-[19rem] font-bold" >About</div>

      {/* Background Blurs */}
     

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <ScrollReveal direction="left">
            <div>
              <span className="text-gold-dark text-sm font-semibold tracking-[0.28em] uppercase">
                About HI-AIM
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light text-brand-950 tracking-tight leading-tight">
                Where hospitality innovation meets{" "}
                <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r  from-gold to-gold-dark">
                  real-world impact
                </span>
              </h2>
            </div>

            <p className="max-w-xl text-brand-600 text-lg leading-relaxed mt-8">
              HI-AIM has been conceptualised to become a landmark forum for
              hospitality industry. It provides an enriching opportunity for the
              convergence of Hoteliers, Hotel Brands and decision makers to
              exchange ideas on emerging trends.
            </p>
            </ScrollReveal>

            {/* FEATURES */}
            <StaggerContainer className="grid gap-4 md:grid-cols-2">
              {features.map((feature, index) => (
                <StaggerItem key={index} className="h-full">
                  <div
                    className="flex items-start gap-4 rounded-3xl border border-white/80 bg-white/90 p-5 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 h-full"
                  >
                    <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-yellow-500 text-black">
                      <HiOutlineSparkles className="h-5 w-5" />
                    </div>

                    <p className="text-brand-700 font-medium leading-relaxed">
                      {feature}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* RIGHT IMAGE WITH SIDE SHADOW */}
          <ScrollReveal direction="right" className="relative">

            {/* RIGHT SIDE GLOW */}
            <div className="absolute -right-6 top-10 h-[80%] w-[80%] rounded-4xl bg-gradient-to-br from-yellow-400/30 to-black/20 blur-3xl"></div>

            {/* LEFT SUBTLE GLOW */}
            <div className="absolute -left-6 bottom-10 h-[60%] w-[60%] rounded-4xl bg-black/10 blur-3xl"></div>

            {/* IMAGE CARD */}
            <div className="relative overflow-hidden rounded-4xl border border-white/70 shadow-xl group">
              <img
                src="/about.jpg"
                alt="about"
                className="w-full max-h-[41rem] min-h-[20rem] object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Optional overlay for luxury feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;