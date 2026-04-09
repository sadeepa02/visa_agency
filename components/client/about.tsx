'use client'

import { aboutUsPara } from "@/consts"
import { TextGenerateEffect } from "../ui/text-generate"
import { motion } from "framer-motion"
import OurTeam from "./our-team"
import { useInView } from "@/hooks/use-in-view"

const AboutUs = () => {
  const { ref, isInView } = useInView()

  return (
    <div className="py-10 px-5" id="About" ref={ref}>
      <motion.h1 
        className="font-semibold text-5xl text-center text-blue-950"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h1>

      <div className="flex flex-col items-center mt-10 md:mx-40">
        {isInView && (
          <TextGenerateEffect 
            className="text-balance text-center text-xl "
            words={aboutUsPara}
          />
        )}
       
      </div>

      {/* Team Section */}
      <div className="mt-16">
        {isInView && <OurTeam />}
      </div>
    </div>
  )
}

export default AboutUs