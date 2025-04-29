import type { Route } from "./+types/home";
import Header from '~/components/Header';
import AboutPage from '~/components/AboutPage';
import { motion } from "framer-motion";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Page" },
    { name: "description", content: "About Page Welcome !" },
  ];
}

function About() {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Header />
      <AboutPage />
    </motion.div>
  );
}

export default About;
