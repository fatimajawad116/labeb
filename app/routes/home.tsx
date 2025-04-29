import Header from "~/components/Header";
import type { Route } from "./+types/home";
import HomeSection from "~/components/HomeSection";
import About from "./About";
import ContactSection from "~/routes/ContactSection";
import Faq from "~/routes/Faq";
import { motion } from "framer-motion";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page Home" },
    { name: "description", content: "Welcome to Page Home!" },
  ];
}

export default function Home() {
  return (
    <motion.div>
      <Header />
      <HomeSection />
    </motion.div>
  );
}
