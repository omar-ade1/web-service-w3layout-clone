import React, { useEffect } from "react";
import TitleOfPages from "../../components/TitleOfPages";
import Forms from "./Components/Forms";
import { motion } from "framer-motion";
import { varent } from "../../transition";
import Map from "./Components/Map";

function Contact() {
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
      <Forms />
      <Map/>
    </motion.div>
  );
}

export default Contact;
