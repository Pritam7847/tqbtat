"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowRight,
  Cpu,
  PartyPopper,
  Users,
  X,
} from "lucide-react";

/* =======================
   Event Card Component
======================= */
const EventCard = ({
  title,
  date,
  time,
  lastDate,
  participation,
  description,
  icon,
  features,
  buttonColor,
  borderColor,
  badgeColor,
  rulesContent,
  registrationLink,
  whatsappLink,
}) => {
  const [showRules, setShowRules] = useState(false);

  return (
    <div
      className={`rounded-2xl p-7 border ${borderColor} 
      bg-white/70 backdrop-blur-xl shadow-sm hover:shadow-lg 
      transition-all duration-300`}
    >
      {/* Top Row */}
      <div className="flex items-start justify-between mb-5">
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${badgeColor}`}
        >
          Upcoming Event
        </span>

        <div className="w-11 h-11 rounded-xl bg-slate-100 flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      {/* Date */}
      <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-3">
        <span className="flex items-center gap-1">
          <Calendar className="w-4 h-4" /> {date}
        </span>
        {time && (
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {time}
          </span>
        )}
      </div>

      {/* Last Date */}
      {lastDate && (
        <div className="mb-3">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full 
          text-xs font-medium bg-red-100 text-red-600">
            ⏳ Last Date: {lastDate}
          </span>
        </div>
      )}

      {/* Participation */}
      <div className="mb-4">
        <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full 
        text-xs bg-slate-200 text-slate-700">
          <Users className="w-3 h-3" />
          {participation}
        </span>
      </div>

      {/* Description */}
      <p className="text-slate-600 text-sm mb-5 leading-relaxed">
        {description}
      </p>

      {/* Feature Chips */}
      <div className="flex flex-wrap gap-2 mb-6">
        {features.map((item, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        {registrationLink && (
          <a
            href={registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold text-white 
            flex items-center gap-2 ${buttonColor} hover:scale-105 transition`}
          >
            Register Now <ArrowRight className="w-4 h-4" />
          </a>
        )}

        {whatsappLink && (
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-white 
            bg-green-500 hover:bg-green-600 transition"
          >
            Join WhatsApp Group
          </a>
        )}

        {rulesContent && (
          <button
            onClick={() => setShowRules(true)}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold 
            bg-gray-500 text-white hover:bg-gray-600 transition"
          >
            Rules
          </button>
        )}
      </div>

      {/* Rules Modal */}
      <AnimatePresence>
        {showRules && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-3xl w-full p-6 relative max-h-[80vh] overflow-y-auto"
            >
              <button
                onClick={() => setShowRules(false)}
                className="absolute top-4 right-4 text-slate-500 hover:text-black"
              >
                <X />
              </button>

              <h2 className="text-xl font-semibold mb-4">
                {title} – Rules & Regulations
              </h2>

              <pre className="text-sm text-slate-700 whitespace-pre-wrap">
                {rulesContent}
              </pre>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* =======================
   Registration Page
======================= */
const Registration = () => {
  const rulesText = `
AIoT Hackathon – Rules & Regulations
Organized by: Thinqbator

Eligibility:
• Individuals or teams (maximum 3 members)
• Open to students and innovators

Theme:
• Artificial Intelligence + Internet of Things (AIoT)

Submission Requirements:
• GitHub repository link
• Demo video
• Presentation (PPT)
(All submissions are mandatory)

Evaluation Criteria:
• Innovation – 25%
• Technical Implementation – 30%
• Impact & Use Case – 20%
• UI / UX – 25%

Code of Conduct:
• No plagiarism is allowed
• All work must be original
• Judges’ decision will be final and binding
`;

  return (
    <section className="py-20 px-4 font-[Poppins] 
    bg-gradient-to-br from-teal-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <EventCard
          title="AIoT Hackathon"
          date="9th January 2026"
          time="Approx 8 Hours Event"
          lastDate="2nd January, 2026"
          participation="Open to All"
          description="Build smart AI-powered IoT solutions, compete with top innovators, and win exciting prizes."
          icon={<Cpu className="w-5 h-5 text-teal-500" />}
          features={["AI + IoT", "Cash Prizes", "Mentorship", "Networking"]}
          buttonColor="bg-teal-500 hover:bg-teal-600"
          borderColor="border-teal-200"
          badgeColor="bg-teal-100 text-teal-600"
          rulesContent={rulesText}
          registrationLink="https://docs.google.com/forms/d/e/1FAIpQLSc5kxYlUOvoqwBdflKwxfRS8sp2nJywNesPPyS8qqVJqIKs3w/viewform"
          whatsappLink="https://chat.whatsapp.com/H2f1g7k57kTCKGbdGGVEK7"
        />

        <EventCard
          title="Innovation Mela"
          date="10th January 2026"
          lastDate="6th January, 2026"
          participation="Open to All"
          description="Showcase your innovative projects, explore creative ideas, and connect with industry leaders."
          icon={<PartyPopper className="w-5 h-5 text-orange-500" />}
          features={["Project Showcase", "Industry Connect", "Workshops", "Prizes"]}
          buttonColor="bg-orange-500 hover:bg-orange-600"
          borderColor="border-orange-200"
          badgeColor="bg-orange-100 text-orange-600"
          registrationLink="https://forms.gle/PQZ1r1GS2EBQrFi7A"
        />
      </div>
    </section>
  );
};

export default Registration;
