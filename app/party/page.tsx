"use client";
import { motion } from "framer-motion";

const couple = [
  {
    name: "Nana Yaa",
    role: "The Bride",
    image: "/assets/nana.jpeg",
  },
  {
    name: "Haruna",
    role: "The Groom",
    image: "/assets/harunaImg.jpg",
  },
];

const partyMembers = [
  {
    name: "Sandra Asiedu-Mantey",
    role: "Maid of Honor",
    image: "/assets/sandra.jpg",
  },
  {
    name: "Kojo Mensah",
    role: "Best Man",
    image: "/images/kojo.jpg",
  },
  // {
  //   name: "Adwoa Nyarko",
  //   role: "Bridesmaid",
  //   image: "/images/adwoa.jpg",
  // },
  // {
  //   name: "Yaw Owusu",
  //   role: "Groomsman",
  //   image: "/images/yaw.jpg",
  // },
  // {
  //   name: "Akua Afriyie",
  //   role: "Bridesmaid",
  //   image: "/images/akua.jpg",
  // },
  // {
  //   name: "Kwame Boateng",
  //   role: "Groomsman",
  //   image: "/images/kwame.jpg",
  // },
];

const WeddingParty = () => {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto mt-16">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-4xl md:text-5xl text-white font-script mb-4">
            Our Wedding Party
          </h1>
          <p className="text-md text-white max-w-2xl mx-auto">
            We are so blessed to be surrounded by these wonderful friends and
            family as we begin our journey together.
          </p>
        </motion.div>

        {/* Couple Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {couple.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="h-80 bg-stone-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="font-serif text-2xl text-stone-800">
                  {member.name}
                </h2>
                <p className="text-stone-500">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Party Members Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {partyMembers.map((member, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-stone-200 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-64 bg-stone-100">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-medium text-stone-800 text-lg">
                  {member.name}
                </h3>
                <p className="text-stone-500 text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default WeddingParty;
