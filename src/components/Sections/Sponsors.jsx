
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "../UI/ScrollReveal";

const TIERS = [
  {
    title: "Title Sponsor",
    image1: "/jaguar.png",
  },
  {
    title: "Patron Sponsor",
    image1: "/marriott.png",
  },
  {
    title: "Platinum Sponsors",
    image1: "/pidilite.png",
    image2: "/accor.png",
    image3: "/radisson.png",
    image4: "/shearling.png",
    image5: "/tfci.png",
  },
  {
    title: "Gold Sponsors",
    image1: "/schuco.png",
    image2: "/atmospher.png",
    image3: "/lords.png",
    image4: "/aamir.png",
    image5: "/hilton.png",
    image6: "/minor.png",
    image7: "/wood.png",
    image8: "/greenlam.png",
    image9: "/wong.png",
    image10: "/stefab.png",
    image11: "/everest.png",
    image12: "/eclipse.png",
  },
  {
    title: "Associate Sponsors",
    image1: "/greatwhite.png",
    image2: "/wm.png",
    image3: "/nexion.png",
    image4: "/sarovar.png",
    image5: "/hyatt.png",
    image6: "/hufcor.png",
    image7: "/zerone.png",
    image8: "/aom.png",
    image9: "/mapei.png",
    image10: "/a-class.png",
    image11: "/theleela.png",
  },
  {
    title: "Exhibitors",
    image1: "/clara.png",
    image2: "/shk.png",
  },
  {
    title: "High Tea Sponsors",
    image1: "/petals.png",
    image2: "/millenium.png",
    image3: "/vittaazio.png",
  },
];

const Sponsors = () => {
  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-[#f8f8f8] py-28 lg:py-32"
    >
      {/* Background Text */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -top-10 text-transparent [-webkit-text-stroke:2px_#ececec] text-[10rem] lg:text-[16rem] font-bold select-none">
        Sponsors
      </div>

      {/* Blur Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 left-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-brand-900/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-w-[10%] max-w-[85%] mx-auto px-6 lg:px-10">

        {/* Heading */}
        <ScrollReveal
          direction="up"
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">
            Our Partners
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-light text-gray-900">
            HI-AIM{" "}
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-dark">
              Sponsors
            </span>
          </h2>

          <div className="mx-auto mt-4 sm:mt-6 h-0.5 w-12 sm:w-16 bg-gold-dark" />
        </ScrollReveal>

        {/* Cards */}
        <StaggerContainer className="flex flex-col ">
          {TIERS.map((tier, idx) => {
            const images = Object.keys(tier)
              .filter((key) => key.startsWith("image"))
              .map((key) => tier[key])
              .filter(Boolean);

            return (
              <StaggerItem key={idx}>
                <div className="group pt-12 p-8">

                  {/* Title */}
                  <h3 className="text-center italic text-2xl md:text-2xl  text-gray-800 mb-10">
                    {tier.title}
                  </h3>

                  {/* Logos */}
                  <div className="flex flex-wrap items-center justify-center gap-10">
                    {images.map((img, index) => (
                      <div className=" h-[93px] w-[279px] rounded-[5px] border-1 p-3 border-gray-300 flex items-center justify-center">
                      <img
                        key={index}
                        src={img}
                        alt={tier.title}
                        className=" h-full w-full object-contain transition duration-300"
                      />
                      </div>
                    ))}
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

export default Sponsors;