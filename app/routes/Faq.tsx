import React from 'react'
import FaqPage from '~/components/FaqPage'
import Header from '~/components/Header'
import { motion } from "framer-motion";
function Faq() {
  return (
    <motion.div  className='w-[100%] h-[100%] md:h-[100vh] pt-[20px] pb-[80px] bg-[#dad4e4]'>
      <Header />
      <FaqPage />
    </motion.div>
  )
}

export default Faq