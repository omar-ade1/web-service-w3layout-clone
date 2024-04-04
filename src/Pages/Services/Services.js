import React, { useEffect } from "react";
import TitleOfPages from "../../components/TitleOfPages";
import Bars from "./components/Bars";
import WhyChooseUs from "./components/WhyChooseUs";
import HandCraftedServices from "./components/HandCraftedServices";
import { motion } from "framer-motion";
import { varent } from "../../transition";

function Services() {
  useEffect(() => {
    window.scrollTo({ top: "0", behavior: "smooth" });
  }, []);
  return (
      <motion.div
      variants={varent}
      initial="hidden"
      animate="show"
      exit="exit"
        >
        <TitleOfPages />
        <Bars />
        <WhyChooseUs />
        <HandCraftedServices />
      </motion.div>
  );
}

export default Services;
