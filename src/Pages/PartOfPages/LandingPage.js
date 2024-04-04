import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { varent } from "../../transition";
import Landing from "../Home/components/Landing";
import AboutOurWeb from "../About/components/AboutOurWeb";
import WhyChooseUs from "../Services/components/WhyChooseUs";
import HandCraftedServices from "../Services/components/HandCraftedServices";
import Progress from "../About/components/Progress";
import MeetTheTeam from "../About/components/MeetTheTeam";
import Quets from "../Home/components/Quets";
import Asks from "../Home/components/Asks";
import OurClients from "../About/components/OurClients";
import Forms from "../Contact/Components/Forms"
import Map from "../Contact/Components/Map"
function LandingPage() {

  useEffect(() => {
    window.scrollTo({ top: "0", behavior: "smooth" });
  }, []);

  return (
    <motion.div variants={varent} initial="hidden" animate="show" exit="exit">
      <Landing />
      <AboutOurWeb />
      <WhyChooseUs />
      <HandCraftedServices />
      <Progress />
      <MeetTheTeam />
      <Quets />
      <Asks />
      <OurClients />
      <Forms />
      <Map/>

    </motion.div>
  );
}

export default LandingPage;
