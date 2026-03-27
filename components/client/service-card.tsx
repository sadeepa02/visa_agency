'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, useInView } from 'framer-motion'
import Image from "next/image"
import { useRef } from 'react'

interface ServiceCardProps {
  service: {
    title: string
    description: string
    image: string
  }
  index: number
  isInView: boolean
  rowIndex: number
}

export function ServiceCard({ service, isInView, rowIndex }: ServiceCardProps) {
  const cardRef = useRef(null)
  const cardInView = useInView(cardRef, { once: true, amount: 0.1 })
  
  // Row 1 uses parent isInView, Row 2 uses its own intersection observer
  const shouldAnimate = rowIndex === 0 ? isInView : cardInView
  
  // Header delay: 0s, Row 1 (0-2): 0.5s, Row 2 (3-5): 0s (when it comes into view)
  const baseDelay = rowIndex === 0 ? 0.5 : 0

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.75, delay: baseDelay }}
      whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
    >
      <Card className="rounded-2xl w-full max-w-sm hover:shadow-xl transition-all duration-300 overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative h-52 w-full overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full"
            >
              <Image
                alt={service.title + ' image'}
                className="object-cover w-full h-full"
                fill
                src={service.image}
              />
            </motion.div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
          <CardDescription>{service.description}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  )
}

