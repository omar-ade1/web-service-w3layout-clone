import React, { useEffect } from "react";
import Landing from "./components/Landing";
import TextLinks from "./components/TextLinks";
import ImagesGallary from "./components/ImagesGallary";
import Skills from "./components/Skills";
import ImportanceOfSkills from "./components/ImportanceOfSkills";
import SeeWhatIsGoingOn from "./components/SeeWhatIsGoingOn";
import Quets from "./components/Quets";
import Asks from "./components/Asks";
import Subscribe from "./components/Subscribe";
import { motion } from "framer-motion";
import { varent } from "../../transition";

function Home() {
  let data = [
    {
      img_url: "./images/blog1.jpg",
      title: "Best free Web templates",
      history: "march 25, 2024",
      description: "Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!",
    },
    {
      img_url: "./images/blog2.jpg",
      title: "Skills to become a Designer",
      history: "march 25, 2024",
      description: "Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!",
    },
    {
      img_url: "./images/blog3.jpg",
      title: "How to make 404 error page?",
      history: "march 25, 2024",
      description: "Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: "0", behavior: "smooth" });
  }, []);
  return (
    <motion.div variants={varent} initial="hidden" animate="show" exit="exit">
      <Landing />
      <TextLinks />
      <ImagesGallary />
      <Skills />
      <ImportanceOfSkills />
      <SeeWhatIsGoingOn title="see What's going on" data={data} />
      <Quets />
      <Asks />
      <Subscribe />
    </motion.div>
  );
}

export default Home;
