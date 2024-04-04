import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { varent } from "../../transition";
import TitleOfPages from "../../components/TitleOfPages"
import SeeWhatIsGoingOn from "../Home/components/SeeWhatIsGoingOn";
function BlogPosts() {

  useEffect(() => {
    window.scrollTo({ top: "0", behavior: "smooth" });
  }, []);

  let data = [
    {
      img_url: "./images/blog1.jpg",
      title: "Best free Web templates",
      history: "march 25, 2024",
      description:
        "Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!",
    },
    {
      img_url: "./images/blog2.jpg",
      title: "Skills to become a Designer",
      history: "march 25, 2024",
      description:
        "Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!",
    },
    {
      img_url: "./images/blog3.jpg",
      title: "How to make 404 error page?",
      history: "march 25, 2024",
      description:
        "Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!",
    },
    {
      img_url: "./images/faq.jpg",
      title: "Best fashion design websites",
      history: "march 25, 2024",
      description:
        "Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!",
    },
    {
      img_url: "./images/service3.jpg",
      title: "Creativity of designing",
      history: "march 25, 2024",
      description:
        "Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!",
    },
    {
      img_url: "./images/service1.jpg",
      title: "Frequently asked questions?",
      history: "march 25, 2024",
      description:
        "Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!",
    },
  ];
  return (
    <motion.div variants={varent} initial="hidden" animate="show" exit="exit">
      <TitleOfPages />
      <SeeWhatIsGoingOn data={data}/>
    </motion.div>
  );
}

export default BlogPosts;
