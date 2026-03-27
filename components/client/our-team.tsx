"use client"

import { Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function OurTeam() {
  return (
      <section className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl font-bold text-slate-900 mb-4 text-balance"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            The passionate leaders driving our vision forward with innovation and expertise
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Team Member 1 */}
          <motion.div
            className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative">
              <motion.div
                className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-slate-100 group-hover:ring-blue-200 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.img
                  src="Imanka.jpg"
                  alt="Imanka Wimalasiri"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              <div className="text-center mb-6">
                <motion.h3
                  className="text-2xl font-bold text-slate-900 mb-2"
                  whileHover={{ scale: 1.05, color: "#1e40af" }}
                  transition={{ duration: 0.2 }}
                >
                  Imanka Wimalasiri
                </motion.h3>
                <motion.p
                  className="text-blue-600 font-medium text-sm uppercase tracking-wide"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  CEO/Director
                </motion.p>
              </div>

              <motion.div
                className="flex justify-center gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="#"
                  className="p-2 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 transition-colors duration-300"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="p-2 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 transition-colors duration-300"
                  aria-label="Email"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative">
              <motion.div
                className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden ring-4 ring-slate-100 group-hover:ring-blue-200 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.img
                  src="Subash.jpg"
                  alt="Subash Manapperuma"
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              <div className="text-center mb-6">
                <motion.h3
                  className="text-2xl font-bold text-slate-900 mb-2"
                  whileHover={{ scale: 1.05, color: "#1e40af" }}
                  transition={{ duration: 0.2 }}
                >
                  Subash Manapperuma
                </motion.h3>
                <motion.p
                  className="text-blue-600 font-medium text-sm uppercase tracking-wide"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  Director
                </motion.p>
              </div>

              <motion.div
                className="flex justify-center gap-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="#"
                  className="p-2 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 transition-colors duration-300"
                  aria-label="LinkedIn"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  className="p-2 rounded-full bg-slate-100 hover:bg-blue-600 hover:text-white text-slate-600 transition-colors duration-300"
                  aria-label="Email"
                  whileHover={{ scale: 1.2, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Mail className="w-5 h-5" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
  )
}
