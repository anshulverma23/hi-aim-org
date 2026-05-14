import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiTwitter, FiLinkedin, FiGlobe } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const speakersData = [
  {
    id: 1,
    name: "Mr. K. B. Kachru",
    role: "Chairman Emeritus & Principal Advisor (South Asia)",
    company: " Radisson Hotel Group",
    image: "/k-b-kachru.jpg",
    bio: "I have been a regular one at attending Hi-Aims and from the very inception, I am one of those fortunate ones who has attended all the Hi-AiMs. Hi AiM has thought of collecting people who actually make the bones of the hospitality industry and how they recognise and interact with each other to make constructive contributions to the industry. The panel discussions are very meaningful and I was very glad to hear that whatever was decided, discussed, deliberated and different stakeholders were told to take action, I believe about 80 to 85% of that has actually been accepted by the industry and it is a big thing. The same thing has happened this year.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: 2,
    name: "Mr. Ajay Bakaya",
    role: "Managing Director",
    company: "Sarovar Hotels",
    image: "/ajay-bakaya.jpg",
    bio: "I think there is something special about Hi AiM, it’s not the biggest, it doesn’t have the largest attendance, it doesn’t boast of some perhaps very fancy names, but there is a very nice character to Hi-Aim. There is a certain feeling of community, a very close-knit group, a very informal group. It is not really highly structured or scientific in terms of timing, etc. But I see, and this is something I noticed before and something I’ve noticed a lot this time that people are enjoying each other’s company. They are learning from each other and sharing information under a very relaxed environment. It’s a good, close community of designers, architects, hoteliers, and consultants. I would give it full marks.",
    socials: { linkedin: "#", website: "#" },
  },
  {
    id: 3,
    name: "Mr. Kiran Andicot",
    role: "Regional Vice President, Hotel Development",
    company: "Marriott International",
    image: "/kiran-andikot.jpg",
    bio: "I have been attending this conference every year and look forward to it. It provides a platform to owners, operators and a lot of technical consultants to come together and discuss the projects we are working on. Marriott has been supporting the conference, and we will continue doing so. The panel discussions were really interesting, especially the panel discussion on project cost and construction cost and also the discussion on millennials.",
    socials: { twitter: "#", website: "#" },
  },
  {
    id: 4,
    name: "Ms. Charu Singh",
    role: "President ",
    company: "Tourism Finance Corporation of India Ltd.",
    image: "/charu-singh.jpg",
    bio: "TFCI has been participating in Hi AiM since its inception and we are very proud to be associated with Hi AiM. Well, I think it's a very well-thought-out two days sessions that were kept. The way the leaders from the market have shared the emerging trends, their thoughts about how the future can be made, it was definitely a wonderful experience and I look forward to the 12th edition as well.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: 5,
    name: "Mr. Nikhil Sharma",
    role: "Regional Director Eurasia",
    company: "Wyndham Hotels & Resorts",
    image: "/nikhil-sharma.jpg",
    bio: "I think me and team Wyndham Hotels really enjoyed the experience and we would love to be back in the 12th Edition as well. This conference is, if I can use the word a cosy conference. It’s very family-like, and that’s the beauty of Hi AiM, and if you ask me, that essence is extremely important for the conference to go on",
    socials: { linkedin: "#", website: "#" },
  },
  {
    id: 6,
    name: "Mr. Aniruddh Kumar",
    role: "Vice President",
    company: "Development, Accor Hotels",
    image: "/anirudh-kumar.jpg",
    bio: "Hi AiM 11th edition was fantastic, and the discussions were really amazing. The kind of knowledge we gained in the last couple of days was fantastic. This is probably the unique platform we have for the design and technical side of the hotel’s development and all kinds of participants are there, be it the architect, interior designer, contractors and vendors. It’s really great.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: 7,
    name: "Mr. Prem Thakur",
    role: "VP, Technical Services",
    company: "Indian Hotels Company Limited (IHCL)",
    image: "/prem-kumar.jpg",
    bio: "I've been attending Hi AiM since its inception. It has been 11 wonderful years. Hi AiM has been a great platform to meet your industry colleagues, friends, consultants, designers, and partners. You also get to learn a lot of new things as you meet the industry leaders, the veterans, the experts from various fields.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: 8,
    name: "Mr. Anil Badan",
    role: "Architect",
    company: "Studio B Architects",
    image: "/anil-badan.jpg",
    bio: "It’s very useful. You meet like-minded creative people in the industry. You come to know about the present things happening in the industry. There was also a lot of discussion about sustainability, design, and everything else. Overall, it gives you a good perspective on the industry's current happenings.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: 9,
    name: "Mr. G Gopalakrishnan",
    role: "Country Director",
    company: "Asian Paints",
    image: "/g-gopalakrishnan.jpg",
    bio: "Hi AiM is a platform where you invest in future relationships and build bridges. And I think from that point of view, Asian Paints has been able to build that bridge one more brick and take it to the future. Asian paints have been working with Hi AiM for so many years and this time we have been able to, fortunately, be a part of it as a patron partner. We will try and continue our relationship.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: 10,
    name: "Ms. Reema Diwan",
    role: "Director ",
    company: " Design & Technical Services, India & South Asia - Accor Hotels",
    image: "/reema-diwan.jpg",
    bio: "I’ve been a part of all Hi Aims. It’s been a very informative and interesting journey. Right from the first Hi AiM to this one. And I think it’s a great forum in which architects, designers, hotel owners, and MEP consultants who understand sustainability and what it takes to build a hotel come together, and it’s sort of like a brainstorming session. Hi AiM has been very instrumental in shaping the hospitality industry because we learn from one another, we know what the pros and cons are, and you don't feel that you're a part of the conference; you feel like you are part of a family.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: 11,
    name: "Mr. Vinayak Saboo",
    role: "Partner ",
    company: "Paradise Group",
    image: "/vinayak-saboo.jpg",
    bio: "I think the sessions were really nice, the Q&A was very interesting and those are the ones which were the most candid conversation that one could have here and to get a pretty deep insight about exactly what is what and what is what not. So, it’s a great way of learning many things you wouldn’t learn otherwise.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: 12,
    name: "Mr. Dorje Gyaltsen Lama",
    role: "Managing Director",
    company: "Dusit Princess Kathmandu",
    image: "/dorje-lama.jpg",
    bio: "It was a very good, knowledgeable experience. I found it very useful, especially the MEP part. You know, usually in Nepal, whenever you think of a brand, you think of fire life and safety, that’s the number one priority. But in Nepal, you also think of earthquakes. So how do earthquake and fire life safety come together as a brand, and especially in MEP, how do you save water, bottling parts. I took down a few notes. I think for my next project, I'll definitely use these tools.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: 13,
    name: "Mr. Sunil Khemaniv",
    role: "Founder and Principal Consultant ",
    company: "Aufait International Engineering Studio",
    image: "/sunil-khemani.jpg",
    bio: "It was extremely good. In fact, I’m glad that I made the decision to come. I am also equally thankful to Hi AiM Team for having invited me here as a speaker. It’s really good because so many people from different facets of the industry are here and you get to hear perspectives from different people you know and from different sectors. It’s really educative.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: 14,
    name: "Mr. Amit Gupta",
    role: "Founding Partner ",
    company: "Studio Symbiosis",
    image: "/amit-gupta.jpg",
    bio: "I have to say this experience is a little bit better than the earlier ones. Because usually when we have Hi AiM in Delhi, which I have attended a couple of times, everyone comes and goes because of the busy schedule, but being in Kathmandu, everyone is here for a longer period of time, so we get to spend more time informally with them, not just in the conference but also outside the conference, so I think it’s a much more relaxed and a bit more productive Hi AiM than the earlier ones.",
    socials: { linkedin: "#", twitter: "#" },
  },
  {
    id: 15,
    name: "Ms. Vandana Saxena",
    role: "Design Principal",
    company: "Studio IV Designs, vandana",
    image: "/vandana-saxena.jpg",
    bio: "It was interesting to meet all my industry colleagues, not just from India but from Nepal as well, and I also saw a lot of people coming from Singapore and Hong Kong. Hi AiM was very engaging and a great learning experience as well. I’m a designer, and it was good to see the work of fellow designers, to see the perspective of the brand owners and to also see, you know, where the industry is heading or what the future trends are going to be.",
    socials: { linkedin: "#", twitter: "#" },
  },
];

const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedSpeaker) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedSpeaker]);

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-slate-50 text-slate-900 py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center pt-7 mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3 sm:mb-4 pt-7 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight"
            >
              Featured{" "}
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-dark">
                Speakers
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl pt-4 text-slate-600 max-w-2xl mx-auto font-light leading-relaxed"
            >Learn from industry pioneers, thought leaders, and technical
              experts who are shaping the future of enterprise technology.
            </motion.p>
          </div>

          {/* Speakers Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {speakersData.map((speaker, index) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onClick={() => setSelectedSpeaker(speaker)}
                className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-72 w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-medium text-slate-900 mb-1 group-hover:text-slate-700 transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-500 mb-1">
                    {speaker.role}
                  </p>
                  <p className="text-sm text-slate-400 font-light mb-4">
                    {speaker.company}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center text-sm font-medium text-slate-900 group-hover:text-slate-600 transition-colors">
                    View Profile
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal Popup */}
        <AnimatePresence>
          {selectedSpeaker && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/50 backdrop-blur-md"
              onClick={() => setSelectedSpeaker(null)}
            >
              <motion.div
                initial={{ y: 40, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 20, opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", bounce: 0, duration: 0.5 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2rem] shadow-2xl relative flex flex-col md:flex-row"
              >
                {/* Close button - absolute to the modal */}
                <button
                  onClick={() => setSelectedSpeaker(null)}
                  className="absolute top-6 right-6 p-2.5 bg-white/80 backdrop-blur-md md:bg-slate-100 rounded-full hover:bg-slate-200 transition-colors z-20 text-slate-600 hover:text-slate-900 shadow-sm md:shadow-none"
                >
                  <FiX className="text-xl" />
                </button>

                {/* Speaker Image Section */}
                <div className="md:w-2/5 h-64 md:h-auto relative flex-shrink-0">
                  <img
                    src={selectedSpeaker.image}
                    alt={selectedSpeaker.name}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/10"></div>
                </div>

                {/* Speaker Details Section */}
                <div className="md:w-3/5 p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col">
                  <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-2 tracking-tight">
                      {selectedSpeaker.name}
                    </h2>
                    <p className="text-lg font-medium text-slate-600">
                      {selectedSpeaker.role}
                    </p>
                    <p className="text-md text-slate-500 font-light">
                      {selectedSpeaker.company}
                    </p>
                  </div>

                  {/* Social Links */}
                  {selectedSpeaker.socials && (
                    <div className="flex gap-4 mb-8">
                      {selectedSpeaker.socials.linkedin && (
                        <a
                          href={selectedSpeaker.socials.linkedin}
                          className="p-2.5 bg-slate-50 rounded-full text-slate-600 hover:bg-slate-100 hover:text-[#0077b5] transition-all border border-slate-100"
                        >
                          <FiLinkedin className="text-lg" />
                        </a>
                      )}
                      {selectedSpeaker.socials.twitter && (
                        <a
                          href={selectedSpeaker.socials.twitter}
                          className="p-2.5 bg-slate-50 rounded-full text-slate-600 hover:bg-slate-100 hover:text-[#1DA1F2] transition-all border border-slate-100"
                        >
                          <FiTwitter className="text-lg" />
                        </a>
                      )}
                      {selectedSpeaker.socials.website && (
                        <a
                          href={selectedSpeaker.socials.website}
                          className="p-2.5 bg-slate-50 rounded-full text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all border border-slate-100"
                        >
                          <FiGlobe className="text-lg" />
                        </a>
                      )}
                    </div>
                  )}

                  <div className="mb-10">
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                      About
                    </h4>
                    <p className="text-slate-600 leading-relaxed font-light">
                      {selectedSpeaker.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <style
          dangerouslySetInnerHTML={{
            __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #cbd5e1;
        }
      `,
          }}
        />
      </section>
      <Footer />
    </>
  );
};

export default Speakers;
