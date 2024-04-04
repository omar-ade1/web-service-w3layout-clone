import React, { useEffect } from "react";
import TitleOfPages from "../../components/TitleOfPages";
import AboutOurWeb from "./components/AboutOurWeb";
import Progress from "./components/Progress";
import MeetTheTeam from "./components/MeetTheTeam";
import OurClients from "./components/OurClients";
import { motion } from "framer-motion";
import { varent } from "../../transition";

function About() {
  useEffect(() => {
    window.scrollTo({ top: "0", behavior: "smooth" });
  }, []);
  return (
    <motion.div
      className="about"
      variants={varent}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <TitleOfPages />
      <AboutOurWeb />
      <Progress />
      <MeetTheTeam />
      <OurClients />
    </motion.div>
  );
}

export default About;
