'use client'

import { aboutUsPara, team } from "@/consts"
import { TextGenerateEffect } from "../ui/text-generate"
import Image from "next/image"
import { motion } from "framer-motion"

const AboutUs = () => {
  return (
    <div className="py-10 px-5" id="About">
      <h1 className="font-semibold text-5xl text-center text-blue-950">
        About Us
      </h1>

      <div className="flex flex-col items-center mt-10 md:mx-40">
        
        <TextGenerateEffect 
            className="text-balance text-center text-xl "
            words={aboutUsPara}
        />
       
      </div>

      {/* Team Section */}
      <div className="mt-16">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-blue-950 mb-8"
        >
          Our Team
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  width={160}
                  height={160}
                  className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                />
              </motion.div>
              <motion.h3 
                className="text-xl font-semibold text-gray-800 mb-2"
                whileHover={{ color: "#002244" }}
                transition={{ duration: 0.3 }}
              >
                {member.name}
              </motion.h3>
              <motion.p 
                className="text-gray-600"
                whileHover={{ color: "#4a5568" }}
                transition={{ duration: 0.3 }}
              >
                {member.role}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUs