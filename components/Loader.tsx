"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500)
  }, [])

  if (!loading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed inset-0 bg-[#111] flex items-center justify-center z-[9999]"
    >
      <motion.img
        src="/tsma.png"
        className="w-40"
        initial={{ scale: 1 }}
        animate={{ scale: 6 }}
        transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
      />
    </motion.div>
  )
}