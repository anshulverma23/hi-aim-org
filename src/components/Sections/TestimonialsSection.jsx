

const testimonials = [
  {
    name: "Mr. K. B. Kachru",
    title: "Chairman Emeritus & Principal Advisor (South Asia) ",
    company: "Radisson Hotel Group",
    feedback:
      "I have been a regular one at attending Hi-Aims and from the very inception, I am one of those fortunate ones who has attended all the Hi-AiMs.",
    image: "/k-b-kachru.jpg",
  },
  {
    name: "Mr. Ajay Bakaya",
    title: "Managing Director",
    company: "Sarovar Hotels",
    feedback:
      "I think there is something special about Hi AiM, it’s not the biggest, it doesn’t have the largest attendance, it doesn’t boast of some perhaps very fancy names, but there is a very nice character to Hi-Aim. ",
    image: "/ajay-bakaya.jpg",
  },
  {
    name: "Mr. Kiran Andicot",
    title: "Regional Vice President",
    company: "Marriott International",
    feedback:
      "I have been attending this conference every year and look forward to it. It provides a platform to owners, operators and a lot of technical consultants to come together and discuss the projects we are working on.",
    image: "/kiran-andikot.jpg",
  },
  {
    name: "Ms. Charu Singh",
    title: "President",
    company: "TFCI",
    feedback:
      "TFCI has been participating in Hi AiM since its inception and we are very proud to be associated with Hi AiM. Well, I think it's a very well-thought-out two days sessions that were kept. The way the leaders from the market have shared the emerging trends, their thoughts about how the future can be made, it was definitely a wonderful experience and I look forward to the 12th edition as well.",
    image: "/charu-singh.jpg",
  },
  {
    name: "Mr. Nikhil Sharma",
    title: "Regional Director Eurasia ",
    company: "Wyndham Hotels & Resorts",
    feedback:
      "I think me and team Wyndham Hotels really enjoyed the experience and we would love to be back in the 12th Edition as well. This conference is, if I can use the word a cosy conference. It’s very family-like, and that’s the beauty of Hi AiM, and if you ask me, that essence is extremely important for the conference to go on",
    image: "/nikhil-sharma.jpg",
  },
  {
    name: "Mr. Aniruddh Kumar",
    title: "Vice President",
    company: "Accor Hotels",
    feedback:
      "Hi AiM 11th edition was fantastic, and the discussions were really amazing. The kind of knowledge we gained in the last couple of days was fantastic. This is probably the unique platform we have for the design and technical side of the hotel’s development and all kinds of participants are there, be it the architect, interior designer, contractors and vendors. It’s really great.",
    image: "/anirudh-kumar.jpg",
  },
  {
    name: "Mr. Prem Thakur",
    title: "VP, Technical Services",
    company: "Indian Hotels Company Limited (IHCL)",
    feedback:
      "I've been attending Hi AiM since its inception. It has been 11 wonderful years. Hi AiM has been a great platform to meet your industry colleagues, friends, consultants, designers, and partners. You also get to learn a lot of new things as you meet the industry leaders, the veterans, the experts from various fields.",
    image: "/prem-kumar.jpg",
  },
  {
    name: "Mr. Anil Badan",
    title: "Architect",
    company: "Studio B Architects",
    feedback:
      "It’s very useful. You meet like-minded creative people in the industry. You come to know about the present things happening in the industry. There was also a lot of discussion about sustainability, design, and everything else. Overall, it gives you a good perspective on the industry's current happenings.",
    image: "/anil-badan.jpg",
  },
  {
    name: "Mr. G Gopalakrishnan",
    title: "Country Director",
    company: "Asian Paints",
    feedback:
      "Hi AiM is a platform where you invest in future relationships and build bridges. And I think from that point of view, Asian Paints has been able to build that bridge one more brick and take it to the future. Asian paints have been working with Hi AiM for so many years and this time we have been able to, fortunately, be a part of it as a patron partner. We will try and continue our relationship.",
    image: "/g-gopalakrishnan.jpg",
  },
  {
    name: "Ms. Reema Diwan",
    title: "Director - Design & Technical Service",
    company: "Accor Hotels",
    feedback:
      "I’ve been a part of all Hi Aims. It’s been a very informative and interesting journey. Right from the first Hi AiM to this one. And I think it’s a great forum in which architects, designers, hotel owners, and MEP consultants who understand sustainability and what it takes to build a hotel come together, and it’s sort of like a brainstorming session. Hi AiM has been very instrumental in shaping the hospitality industry because we learn from one another, we know what the pros and cons are, and you don't feel that you're a part of the conference; you feel like you are part of a family.",
    image: "/reema-diwan.jpg",
  },
  {
    name: "Mr. Vinayak Saboo",
    title: "Partner",
    company: "Paradise Group ",
    feedback:
      "I think the sessions were really nice, the Q&A was very interesting and those are the ones which were the most candid conversation that one could have here and to get a pretty deep insight about exactly what is what and what is what not. So, it’s a great way of learning many things you wouldn’t learn otherwise.",
    image: "/vinayak-saboo.jpg",
  },
  {
    name: "Mr. Dorje Gyaltsen Lama",
    title: "Managing Director",
    company: "Dusit Princess Kathmandu",
    feedback:
      "It was a very good, knowledgeable experience. I found it very useful, especially the MEP part. You know, usually in Nepal, whenever you think of a brand, you think of fire life and safety, that’s the number one priority. But in Nepal, you also think of earthquakes. So how do earthquake and fire life safety come together as a brand, and especially in MEP, how do you save water, bottling parts. I took down a few notes. I think for my next project, I'll definitely use these tools.",
    image: "/dorje-lama.jpg",
  },
  {
    name: "Mr. Sunil Khemani",
    title: "Founder and Principal Consultant",
    company: "Aufait International Engineering Studio",
    feedback:
      "It was extremely good. In fact, I’m glad that I made the decision to come. I am also equally thankful to Hi AiM Team for having invited me here as a speaker. It’s really good because so many people from different facets of the industry are here and you get to hear perspectives from different people you know and from different sectors. It’s really educative.",
    image: "/sunil-khemani.jpg",
  },
];

export default function TestimonialsSection() {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-[#f8f8f8] overflow-hidden relative">
      <div className="absolute left-24 -top-12 text-transparent [-webkit-text-stroke:2px_#F0F0F0] text-[19rem] font-bold">
        Voices
      </div>

      {/* Top fade */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-white to-transparent pointer-events-none" />

      {/* Bottom fade (next section hint) */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/70 to-transparent pointer-events-none" />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 mb-16 lg:mb-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
          <div className="max-w-2xl">
            <span className="text-gold-dark text-sm font-semibold tracking-widest uppercase">
              Words from Leaders
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mt-4 tracking-tight">
              Industry{" "}
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-dark">
                Voices
              </span>
            </h2>

            <div className="w-12 h-0.5 bg-gold-dark mt-6" />
          </div>

          <p className="text-gray-600 font-light max-w-sm text-base leading-relaxed md:text-right">
            Hear what the most respected names in global hospitality have to say
            about their Hi-Aim experience.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-hidden group py-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#f8f8f8] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#f8f8f8] to-transparent z-20 pointer-events-none" />

        <div className="flex space-x-6 md:space-x-8 animate-marquee pl-6 md:pl-8">
          {duplicatedTestimonials.map((t, i) => (
            <div
              key={i}
              className="w-[320px] md:w-[400px] flex-shrink-0 bg-white border border-gray-200 hover:border-gold/40 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg"
            >
              {/* Quote */}
              <div>
                <svg
                  className="w-9 h-9 text-gold mb-5"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>

                <p className="text-gray-600 font-light text-base leading-relaxed mb-8 line-clamp-4">
                  "{t.feedback}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-gray-200 pt-6">
                <div className="min-w-24 h-24  rounded-full overflow-hidden bg-gray-100 ring-2 ring-gold/30">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {t.name}
                  </h4>

                  <p className="text-gray-500 text-xs mt-0.5">
                    {t.title},{" "}
                    <span className="text-gold-dark font-medium">
                      {t.company}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
        @media (min-width: 768px) {
          @keyframes marquee {
            0% { transform: translateX(0); }
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
