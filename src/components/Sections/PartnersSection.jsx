import React from "react";
import {
  HiOutlineSparkles,
  HiOutlineStar,
  HiOutlineBadgeCheck,
  HiOutlineUserGroup,
  HiOutlinePresentationChartBar,
  HiOutlineOfficeBuilding,
  HiOutlineMail,
} from "react-icons/hi";

const TIERS = [
  {
    title: "Title Sponsor",
    icon: HiOutlineSparkles,
    color: "text-gold-dark",
    bg: "bg-amber-50",
    border: "border-gold/40",
    size: "large",
  },
  {
    title: "Patron Sponsor",
    icon: HiOutlineStar,
    color: "text-brand-700",
    bg: "bg-brand-50",
    border: "border-brand-200",
  },
  {
    title: "Platinum Sponsor",
    icon: HiOutlineBadgeCheck,
    color: "text-brand-700",
    bg: "bg-brand-50",
    border: "border-brand-200",
  },
  {
    title: "Gold Sponsors",
    icon: HiOutlineUserGroup,
    color: "text-brand-700",
    bg: "bg-brand-50",
    border: "border-brand-200",
  },
  {
    title: "Associate Sponsors",
    icon: HiOutlinePresentationChartBar,
    color: "text-brand-700",
    bg: "bg-brand-50",
    border: "border-brand-200",
  },
  {
    title: "Exhibitors",
    icon: HiOutlineOfficeBuilding,
    color: "text-brand-700",
    bg: "bg-brand-50",
    border: "border-brand-200",
  },
  {
    title: "Hi Tea Sponsor",
    icon: HiOutlineMail,
    color: "text-brand-700",
    bg: "bg-brand-50",
    border: "border-brand-200",
  },
];

const PartnersSection = () => {
  return (
    <section id="partners" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-50 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">
            Sponsorship
          </span>
          <h2 className="text-3xl md:text-5xl font-light text-brand-900 mt-4 mb-6">
            Our <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-dark">Partners</span>
          </h2>
          <div className="w-12 h-0.5 bg-gold-dark mx-auto mb-6" />
          <p className="text-brand-600 font-light text-lg leading-relaxed">
            Join industry leaders in supporting this premier hospitality event
          </p>
        </div>

        {/* Title Sponsor — featured large slot */}
        <div className="mb-8 border-2 border-dashed border-gold/40 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6 bg-amber-50/40 hover:bg-amber-50/70 transition-colors group">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
              <HiOutlineSparkles className="text-2xl text-gold-dark" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gold-dark mb-1">
                Title Sponsor
              </p>
              <p className="text-brand-400 italic font-light text-sm">
                Exclusive slot available
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-brand-600 font-light text-sm mb-3 max-w-xs">
              Reach 500+ hospitality decision-makers. Maximum brand visibility
              across all event touchpoints.
            </p>
            <a
              href="mailto:info@hi-aim.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-900 text-white text-xs font-semibold tracking-widest uppercase rounded-md hover:bg-brand-700 transition-colors"
            >
              Enquire Now
            </a>
          </div>
        </div>

        {/* Other Sponsor Tiers Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-12">
          {TIERS.slice(1).map((tier, idx) => {
            const Icon = tier.icon;
            return (
              <div
                key={idx}
                className={`group p-6 border border-dashed ${tier.border} ${tier.bg} rounded-xl flex items-center gap-4 hover:shadow-md hover:border-solid transition-all duration-300`}
              >
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Icon className={`text-lg ${tier.color}`} />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-900 text-sm tracking-wide mb-0.5">
                    {tier.title}
                  </h4>
                  <p className="text-brand-400 italic font-light text-xs">
                    Slot available
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-brand-900 rounded-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <div>
            <h3 className="text-white text-xl font-semibold mb-2">
              Become a Sponsor
            </h3>
            <p className="text-brand-300 font-light text-sm max-w-md">
              Partner with HI-AIM 2027 and connect your brand with the future of
              hospitality. Multiple sponsorship packages available.
            </p>
          </div>
          <a
            href="mailto:info@hi-aim.com"
            className="flex-shrink-0 px-8 py-3 bg-gradient-to-r from-gold to-gold-dark text-brand-950 font-bold text-sm tracking-widest uppercase rounded-md hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all hover:-translate-y-0.5"
          >
            Download Sponsorship Deck
          </a>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
