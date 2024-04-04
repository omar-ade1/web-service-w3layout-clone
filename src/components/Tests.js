import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const variants = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 1,
    },
  },
  exit: {
    x: 100,
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};
const child = {
  hidden: {
    y: -100,
    x: 100,

    opacity: 0,
  },
  show: {
    y: 0,
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    y: 100,
    x: -100,

    opacity: 0,
  },
};

export default function Tests(props) {
  const [show, setShow] = useState(true);

  return (
    <div className="h-[100vh]">
      <AnimatePresence>
        {show ? (
          <motion.ul variants={variants} initial="hidden" animate="show" exit="exit" className="h-[100vh] flex flex-col justify-center items-center">
            <motion.li variants={child}>
              <a href="#">test1</a>
            </motion.li>
            <motion.li variants={child}>
              <a href="#">test2</a>
            </motion.li>
            <motion.li variants={child}>
              <a href="#">test3</a>
            </motion.li>
            <motion.li variants={child}>
              <a href="#">test4</a>
            </motion.li>
          </motion.ul>
        ) : (
          ""
        )}
      </AnimatePresence>
      <button
        onClick={() => {
          setTimeout(() => {
            setShow(!show);
          }, 0);
        }}
        className="btn absolute bottom-0"
      >
        show
      </button>
    </div>
  );
}
