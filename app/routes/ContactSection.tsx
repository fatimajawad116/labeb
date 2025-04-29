import React from 'react'
import ContactPage from '~/components/ContactPage'
import Header from '~/components/Header'
import { motion } from "framer-motion";
function ContactSection() {
  return (
    <motion.div >
      <Header />
      <ContactPage />
    </motion.div>
  )
}

export default ContactSection