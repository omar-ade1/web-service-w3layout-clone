export let varent = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: .5, type: "spring" },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};
/*
    initial={{  }}
    animate={{ }}
    exit={{ x: "100vw" }}
    transition={{ duration: .3 }}
*/
