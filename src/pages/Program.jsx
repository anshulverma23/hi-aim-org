import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiUser, FiCalendar } from "react-icons/fi";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { } from "framer-motion/client";

const scheduleData = {
  day1: {
    image: "/event-1.png",
    date: "April 10, 2027",
    title: "Opening & Future Trends",
    shortDesc:
      "Keynotes, panels, and breakout sessions exploring the technological shifts defining our future.",

    events: [
      {
        time: "10:00 - 11:30",
        title: "Onsite Registration with Tea",
      },
      {
        time: "11:30 - 12:00",
        title: "Lighting of the Lamp Ceremony",
      },
      {
        time: "12:00 - 12:15",
        title:
          "Keynote Speech by Mr. K. B. Kachru, Chairman South Asia - Radisson Hotel Group",
      },
      {
        time: "12:15 - 12:45",
        title:
          "Welcome Note by Mr. Rajesh Mehra, Director & Promoter of Jaquar Group",
      },
      {
        time: "12:45 - 13:00",
        title:
          "Introduction to theme by Mr. Anil Kumar Sharma - Principal Architect - A Sharma Associates",
      },
      {
        time: "13:00 - 14:00",
        session: "Session 1",
        title: "Is AI the Future of Hospitality Development?",
        speaker: [
          "Mr. Romesh Koul - CEO - Naaz Hotel Consultants Private Limited - Moderator",
          "Mr. Anoop Bali - Managing Director - Tourism Finance Corporation of India Limited",
          "Mr. Dhruva Rathore - Vice President - Real Estate & Development - Hyatt Hotels & Resorts",
          "Mr. Jaideep Anand - Vice President Development and Pre Opening - The Leela Palaces, Hotels and Resorts",
          "Ms. Ranju Alex - CEO, India & South Asia - Accor Hotels",
          "Mr. Zubin Saxena - SVP & Regional Head - South Asia - Hilton Hotels",
        ],
        highlight: true,
      },
      {
        time: "14:00 - 15:30",
        title: "Lunch",
      },
      {
        time: "15:30 - 16:30",
        session: "Session 2",
        title: "Hospitality Design & Innovation",
        speaker: [
          "Mr. Anil Sharma - Principal Architect - A Sharma Associates - Moderator",
          "Mr. Anuj Sharma - Director Design Services - Sarovar Hotels & Resorts",
          "Mr. Ashish Verma - Director Design–India Middle East & Africa - IHG Hotels & Resorts",
          "Mr. Douglas Grieco - Regional Vice President-Design Service - Hyatt Hotels & Resorts",
          "Mr. Mandar Zaware - Vice President; Design & Project Management - Marriott International",
          "Mr. Prem Thakur - Vice President, Technical Services - The Indian Hotels Company Limited (IHCL)",
          "Mr. Vikram Choubal - Sr. Vice President, Design & Technical Services - The Leela Palaces, Hotels and Resorts",
        ],
        highlight: true,
      },
      {
        time: "16:30 - 17:00",
        title: " Visit to Exposition Area",
      },
      {
        time: "17:30 - 18:30",
        session: "Session 3",
        title:
          "Smart Coordination: Integrating AI Across Design, Construction, and Operations",
        speaker: [
          "Mr. Suresh Kumar - Industry Expert - Moderator",
          "Mr. Aniruddh Kumar - Vice President, Development - Accor Hotels",
          "Mr. Bharat Bansal - Director - ASB Projects Limited",
          "Mr. Dev Malhotra - Group Advisor, Sales & Marketing - Jaquar Group",
          "Mr. Dhruv Hoon - Senior Vice President, Strategic Development - The Oberoi Group",
          "Mr Pushpendra Bansal - Chief Operating Officer - Lords Hotels & Resorts",
          "Mr. Shobbit Khhatri - AVP Development - Minor Hotels",
        ],
          highlight: true,
      },
      {
        time: " 18:30 - 19:00",
        title: " Visit to Exposition Area",
      },
      {
        time: "19:00 - 20:30",
        title: "Felicitation Ceremony 2026",
        speaker: [
          "Mr. Anuraag Bhatnagar – Chief Executive Officer - The Leela Palaces, Hotels and Resorts",
          "Mr. Dinki Puri - Founding Partner & CEO - Eagle Wing",
          "Ms. Karen Wang – Founder - Karen Wang Interior Consultant",
          "Mr. Pawan Kachroo - Managing Director - Khamas Hospitality",
          "Mr. Ravi Gupta - Principal Architect & Founder - Architect Ravi Kumar Gupta & Associates (Jaipur)",
          "Mr. Salil Panigrahi - Co-Founder & Managing Director - Atmosphere Core",
          "Mr. Sunil Khemani - Founder & Principal Consultant - Aufait International Engineering Studio",
          "Mr. Sunjae Sharma - Managing Director- India & Southwest Asia - Hyatt Hotel",
        ]
      }
    ],
  },

  day2: {
    image: "/event-2.png",
    date: "April 11, 2027",
    title: "Deep Dives & Execution",
    shortDesc:
      "Masterclasses and interactive workshops translating high-level strategy into daily execution.",

    events: [
      {
        time: "10:30 - 11:00",
        title: "Reflection of Day 1",
      },
      {
        time: "11:00 - 12:00",
        session: "Session 4",
        title: "Augmented Creativity: How AI is Redefining Hospitality Interiors",
        speaker: [
          "Ms. Vandana Saxena - Founder & Design Principal - Studio IV Designs - Moderator",
          "Mr. Bobby Mukherji - Principal Architect - Bobby Mukherrji Architects",
          "Ms. Karen Wang - Founder & Principal - Karen Wang Interior Consultant",
          "Mr. Khozema Chitalwala - Principal Architect - Designers Group",
          "Ms. Priyanka Sahay - Corporate Director Technical Services - The Indian Hotels Company Limited (IHCL)",
          "Ms. Reema Diwan - VP Design & Technical - Accor Hotels",
          "Ms. Ritu Bhatia Kler - Managing Director - Total Integrated Design (India) Private Limited",
        ],
        highlight: true,
      },
      {
        time: "12:00 - 12:30",
        title: "Tea Break",
      },
      {
        time: "12:30 - 13:00",
        title: "Visit to Exposition Area & Tea Break"
      },
      {
        time: "13:00 - 14:00",
        session: "Session 5",
        title: "Architectural Intelligence: Redefining Design Process through AI and BIM",
        speaker : [
          "Mr. Aviral Sharma - Senior Architect & Urban Designer - A Sharma Associates - Moderator",
          "Mr. Prem Thakur - Vice President – Technical Services - The Indian Hotels Company Limited (IHCL)",
          "Ms. Rashna Kapadi - Director, Design & Technical Services, South Asia - Radisson Hotel Group",
          "Mr. Salil Khare - Chief Project Officer - Chalet Hotels Limited",
          "Mr. Shripal Munshi - Founder Principal - Shripal & Venkat Architects",
          "Ms. Shruti Mehra - Director, Projects and Design – South Asia - Hilton Groups",
          "Mr. Suraj Sahai - Senior Regional Manager Architecture Design & Construction (AD&C)- Wyndham Hotels & Resorts"
        ],
        highlight: true,
      },
      {
        time: " 14:00 - 15:30",
        title: "Networking Lunch",
      },
      {
        time: "15:30 - 16:30",
        session: "Session 6",
        title: "Smart, Green & Profitable: How Young Hoteliers Balance Tech Adoption with Sustainability & Costs",
        speaker: [
          "Mr. Ishaan Koul - Director - Naaz Hotel Consultants Private Limited - Moderator",
          "Mr. Vinayak Saboo - Managing Partner - Paradise Group",
          "Mr. Devashish Srivastava - Senior Director Development - Radisson Hotel Group",
          "Mr. Yatin Gulati - Director - Assotech Realty Pvt Ltd",
          "Mr. Upaul Majumdar - Head of Practice - Tourism Dolma Consulting UK",
          "Ms. Juhi Roy - Vice President Development - Marriott International",
          "Mr. Sharad Bhargava - Head of Development - Wyndham Hotels & Resorts",
        ],
        highlight: true,
      },
      {
        time: "16:30 - 17:30",
        title: "Visit to Exposition Area & Tea Break"
      },
      {
        time: "17:30 - 18:30",
        session: "Session 7",
        title: "Smart Kitchens: Transforming Food Service and Back-of-House Efficiency in Hotels",
        speaker: [
          "Mr. Neel Kamal Chauhan - Founder - HPTS Consulting - Moderator",
          "Mr. Gautam Mehrishi - Corporate Chef - Mahindra Holidays & Resorts India Limited",
          "Mr. Joseph R Albert - Managing Director - CKP Hospitality Consultants (Pvt. Ltd.)",
          "Mr. Kinshuk Biswas - Project Managemrnt - Marriott International",
          "Mr. Rajat Jaitly - Director of Technical Services - Sarovar Hotels & Resorts",
          "Mr. Rakesh Sethi - Corporate Executive Chef, Operations, South Asia - Radisson Hotel Group",
          "Mr. Umesh Mattoo - Director - Anubab Hospitality Consultants",
        ],
        highlight: true,
      },
      {
        time: "19:00",
        title: "Vote of Thanks"
      },
      {
        time: "20:00 ",
        title: "Onwards : Gala Dinner with Drinks"
      }
    ],
  },
};

const Program = () => {
  const [selectedDay, setSelectedDay] = useState("day1");

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-slate-50 text-slate-900 py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background */}
        <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-slate-200/50 to-transparent pointer-events-none"></div>

        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full bg-gold/5 blur-[120px] pointer-events-none"></div>

        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-100/30 blur-[120px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Heading */}
          <div className="text-center mb-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3 sm:mb-4 pt-7 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-slate-900 tracking-tight"
            >
              Conference{" "}
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gold to-gold-dark">
                Program
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl pt-4 text-slate-600 max-w-2xl mx-auto font-light leading-relaxed"
            >
              HI - AIM 2026 Conference + Exposition
            </motion.p>
          </div>

          {/* Tabs */}
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row rounded-t-2xl overflow-hidden shadow-sm relative z-20">
            {Object.keys(scheduleData).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedDay(key)}
                className={`flex-1 py-6 sm:py-8 flex flex-col items-center justify-center transition-all duration-300 border-b-2 sm:border-b-0 sm:border-r-2 last:border-0 ${
                  selectedDay === key
                    ? "bg-slate-900 border-slate-900 text-white"
                    : "bg-white/80 border-slate-100 text-slate-500 hover:bg-white"
                }`}
              >
                <span
                  className={`text-lg sm:text-xl font-semibold tracking-wide uppercase ${
                    selectedDay === key ? "text-white" : "text-slate-700"
                  }`}
                >
                  {key === "day1" ? "Day One" : "Day Two"}
                </span>

                <span
                  className={`text-sm mt-1 uppercase tracking-wider font-medium ${
                    selectedDay === key ? "text-slate-300" : "text-slate-400"
                  }`}
                >
                  {scheduleData[key].date}
                </span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-5xl mx-auto relative z-10 -mt-[1px]">
            <div className="bg-white/90  backdrop-blur-xl rounded-b-[2rem] rounded-tr-none shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 sm:p-10 md:p-14 border border-slate-200/60">
              <div className="bg-slate-100 rounded-lg py-3 px-6 mb-10 text-center">
                <span className="text-slate-700 text-sm font-medium uppercase tracking-widest">
                  Program Details
                </span>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedDay}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="space-y-5">
                    {scheduleData[selectedDay].events.map((event, index) => (
                      <div
                        key={index}
                        className={`relative flex items-center md:flex-row gap-4 md:gap-8 p-6 rounded-2xl transition-all duration-300 group ${
                          event.highlight
                            ? "bg-slate-50 border border-slate-200 shadow-sm"
                            : "bg-slate-50 border border-slate-200 shadow-sm "
                        }`}
                      >
                        {/* Dot */}
                        <div className="hidden md:flex absolute -left-3 w-6 h-6 rounded-full bg-white border-4 border-slate-100 items-center justify-center">
                          <div className={`w-2 h-2 rounded-full bg-gold`}></div>
                        </div>

                        <div className="w-full">
                          {/* Highlight Session */}
                          {event.highlight ? (
                            <>
                              <div className="bg-gradient-to-r from-gold to-gold-dark rounded-lg py-3 px-5 flex items-center mb-5 text-slate-900 shadow-sm">
                                <FiCalendar className="mr-3 opacity-80" />

                                <span className="font-semibold text-sm tracking-wide">
                                  {event.time}

                                  {event.session && <> : {event.session}</>}
                                </span>
                              </div>

                              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 mb-4">
                                {event.title}
                              </h3>
                            </>
                          ) : (
                            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                              <span className="inline-flex w-fit whitespace-nowrap px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-sm font-semibold tracking-wider uppercase border border-slate-200">
                                {event.time}
                              </span>

                              <h3 className="text-lg md:text-xl font-medium text-slate-900 group-hover:text-gold-dark transition-colors duration-300">
                                {event.title}
                              </h3>
                            </div>
                          )}

                          {/* Speaker */}
                          {(event.speaker || event.location) && (
                            <div className="flex flex-wrap gap-x-5 gap-y-3 mt-4">
                              {event.speaker && (
                                <div className="flex items-start text-sm text-slate-600 leading-relaxed w-full">
                                  <FiUser className="mr-3 mt-1 text-slate-400 shrink-0" />

                                  <div className="space-y-3 w-full">
                                    {event.speaker.map((speaker, idx) => (
                                      <div
                                        key={idx}
                                        className="pb-3 border-b border-slate-200 last:border-0 last:pb-0"
                                      >
                                        {speaker}
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {event.location && (
                                <div className="flex items-center text-sm text-slate-500">
                                  <FiMapPin className="mr-2 text-slate-400" />
                                  {event.location}
                                </div>
                              )}
                            </div>
                          )}

                          {/* Description */}
                          {event.description && (
                            <p className="mt-4 text-slate-600 font-light text-sm md:text-base leading-relaxed">
                              {event.description}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Program;
