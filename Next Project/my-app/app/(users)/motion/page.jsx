"use client";
import React from "react";
import { motion } from "motion/react"; // ✅ modern motion import
import "../../globals.css";
import Image from "next/image";
import Profile from "../../../public/Pictures/Hurairah.png";

const TEAM_MEMBERS = [
  {
    name: "Thapa Technical",
    role: "Frontend Developer",
    skills: "React & Typescript",
    initials: "VBT",
    avatarBgColor: "bg-blue-200",
    avatarTextColor: "text-blue-800",
  },
  {
    name: "Vinod Thapa",
    role: "Full Stack Developer",
    skills: "Node.js & React",
    initials: "VT",
    avatarBgColor: "bg-purple-200",
    avatarTextColor: "text-purple-800",
  },
  {
    name: "Mike Johnson",
    role: "Backend Developer",
    skills: "Node.js & Python",
    initials: "MJ",
    avatarBgColor: "bg-fuchsia-200",
    avatarTextColor: "text-fuchsia-800",
  },
  {
    name: "Emily Wilson",
    role: "Product Manager",
    skills: "Strategy & Analytics",
    initials: "EW",
    avatarBgColor: "bg-pink-200",
    avatarTextColor: "text-pink-800",
  },
  {
    name: "David Lee",
    role: "DevOps Engineer",
    skills: "AWS & Docker",
    initials: "DL",
    avatarBgColor: "bg-orange-200",
    avatarTextColor: "text-orange-800",
  },
  {
    name: "Anna Brown",
    role: "QA Engineer",
    skills: "Testing & Automation",
    initials: "AB",
    avatarBgColor: "bg-teal-200",
    avatarTextColor: "text-teal-800",
  },
];

const TeamMemberCard = ({ member, index }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        delay: index * 0.15,
        duration: 0.6,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.07,
        rotate: 1,
        boxShadow: "0 0 30px rgba(59,130,246,0.4)",
      }}
      className="font-poppins bg-gray-800 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg"
    >
      <motion.div
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 120, damping: 10 }}
        className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 ${member.avatarBgColor}`}
      >
        <Image
          src={Profile}
          alt={member.name}
          placeholder="blur"
          className="rounded-full"
        />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.2 }}
        className="text-xl font-bold text-white mb-1"
      >
        {member.name}
      </motion.h3>

      <p className="text-gray-300 mb-1">{member.role}</p>
      <p className="text-gray-400 text-sm">{member.skills}</p>
    </motion.div>
  );
};

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full max-w-6xl"
      >
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {TEAM_MEMBERS.map((member, index) => (
            <TeamMemberCard key={member.name} member={member} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}
