import React from 'react';
import Image from 'next/image';
import Profile from "../../public/Pictures/Hurairah.png";
// import Profile from "../../public/Pictures/1.png";
// Data for team members
const TEAM_MEMBERS = [
  {
    name: 'Thapa Technical',
    role: 'Frontend Developer',
    skills: 'React & Typescript',
    initials: 'VBT',
    avatarBgColor: 'bg-blue-200',
    avatarTextColor: 'text-blue-800',
  },
  {
    name: 'Vinod Thapa',
    role: 'Full Stack Developer',
    skills: 'Node.js & React',
    initials: 'VT',
    avatarBgColor: 'bg-purple-200',
    avatarTextColor: 'text-purple-800',
  },
  {
    name: 'Mike Johnson',
    role: 'Backend Developer',
    skills: 'Node.js & Python',
    initials: 'MJ',
    avatarBgColor: 'bg-fuchsia-200',
    avatarTextColor: 'text-fuchsia-800',
  },
  {
    name: 'Emily Wilson',
    role: 'Product Manager',
    skills: 'Strategy & Analytics',
    initials: 'EW',
    avatarBgColor: 'bg-pink-200',
    avatarTextColor: 'text-pink-800',
  },
  {
    name: 'David Lee',
    role: 'DevOps Engineer',
    skills: 'AWS & Docker',
    initials: 'DL',
    avatarBgColor: 'bg-orange-200',
    avatarTextColor: 'text-orange-800',
  },
  {
    name: 'Anna Brown',
    role: 'QA Engineer',
    skills: 'Testing & Automation',
    initials: 'AB',
    avatarBgColor: 'bg-teal-200',
    avatarTextColor: 'text-teal-800',
  },
];

// Card component for a single team member
const TeamMemberCard = ({ member }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
      <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-4 ${member.avatarBgColor}`}>
        {/* <Image src='/Pictures/Hurairah.png' alt={`${member.name}'s avatar`} width={96} height={96} className="rounded-full" /> */}

        <Image src={Profile} 
        blurDataURL="data:..."
        placeholder="blur" alt='hurairah' className="rounded-full" />
      </div>
      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
      <p className="text-gray-300 mb-1">{member.role}</p>
      <p className="text-gray-400 text-sm">{member.skills}</p>
    </div>
  );
};

// Main page component
function Page() {
  return (
    <main className="min-h-screen bg-gray-900 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Page;
