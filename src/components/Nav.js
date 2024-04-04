import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { faArrowDownLong, faBars, faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  hidden: {
    opacity: 0,
    y: -100,
    scaleX: 0,
    translateX: "-50%",
  },
  show: {
    opacity: 1,
    y: 20,
    scaleX: 1,
    translateX: "-50%",
  },
  exit: {
    opacity: 0,
    y: -100,
    zIndex: -999999,
    scaleX: 0,
    translateX: "-50%",
  },
};

const variantsLinks = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 5, // تأخير بين ظهور كل عنصر li بمقدار 0.5 ثانية
      staggerDirection: "forward", // اتجاه التأخير ليكون بالتسلسل الطبيعي
    },
  },
  exit: {
    opacity: 0,
    y: -100,
    scale: 0,
  },
};


const variantsLi = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: .5,
      delay: .5, // تأخير ظهور الاب ul
    },
  },
  exit: {
    opacity: 0,
  },
};


function Nav() {
  const [mood, setMood] = useState("light");
  const [headerPadding, setHeader] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [show_menu_of_pages_nav, set_show_menu_of_pages_nav] = useState(false);

  let [matches, setMatches] = useState(window.matchMedia("(max-width: 766px)").matches);

  useEffect(() => {
    const handleResize = () => {
      setMatches(window.matchMedia("(max-width: 766px)").matches);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (matches) {
      setShowLinks(false);
    } else {
      setShowLinks(true);
    }
  }, [matches]);

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  });

  return (
    <header
      className={`
        ${
          headerPadding
            ? `py-3 bg-white dark:bg-[#31363F] h-[80px] shadow-2xl` /*IF SCROLL UPPER THAN 100*/
            : `py-10 bg-transparent h-[100px]` /*IF SCROLL LOWER THAN 100*/
        }
       flex z-50 items-center fixed left-0 w-full top-0 transition-all duration-300 header py-3`}
    >
      <div className="container px-5 flex justify-evenly items-center mx-auto">
        <div className="logo flex-1">
          <Link
            className={`capitalize tracking-wider md:tracking-normal font-['Pacifico'] text-3xl md:text-2xl font-bold ${
              headerPadding ? `text-black dark:text-[#EEEEEE]` : `text-white`
            }`}
            to="/"
          >
            web services
          </Link>
        </div>
        {showLinks ? (
          <FontAwesomeIcon
            className={`text-3xl text-red-700 order-last ml-5 hidden smT0:block cursor-pointer  `}
            onClick={() => setShowLinks(!showLinks)}
            icon={faXmark}
          />
        ) : (
          <FontAwesomeIcon
            className={`text-2xl order-last ml-5 hidden smT0:block cursor-pointer ${headerPadding ? `text-black dark:text-[#EEEEEE]` : `text-white`}`}
            onClick={() => setShowLinks(!showLinks)}
            icon={faBars}
          />
        )}
        <AnimatePresence>
          {showLinks ? (
            <motion.ul
              id="linksUl"
              variants={variantsLinks}
              initial="hidden"
              animate="show"
              exit="exit"
              className={`font-bold links mr-3 md:mr-1 flex space-x-3 md:space-x-1 capitalize ${
                showLinks
                  ? `smT0:absolute smT0:flex-col smT0:top-full smT0:left-0 smT0:bg-red-200 smT0:w-full smT0:text-center smT0:space-x-0  smT0:items-center smT0:gap-y-3`
                  : `smT0:hidden`
              } ${headerPadding ? `text-black dark:text-[#EEEEEE] ` : `text-white`} `}
            >
              <motion.li variants={variantsLi} initial="hidden" animate="show" exit="exit">
                <NavLink
                  className="smT0:w-screen hover:bg-blue-200 dark:hover:bg-blue-400 top-24 transition-colors duration-200 block p-2 rounded"
                  to="/"
                >
                  home
                </NavLink>
              </motion.li>
              <motion.li variants={variantsLi} initial="hidden" animate="show" exit="exit">
                <NavLink
                  className="smT0:w-screen hover:bg-blue-200 dark:hover:bg-blue-400 top-24 transition-colors duration-200 block p-2 rounded"
                  to="/about"
                >
                  about
                </NavLink>
              </motion.li>
              <motion.li variants={variantsLi} initial="hidden" animate="show" exit="exit">
                <NavLink
                  className="smT0:w-screen hover:bg-blue-200 dark:hover:bg-blue-400 top-24 transition-colors duration-200 block p-2 rounded"
                  to="/services"
                >
                  services
                </NavLink>
              </motion.li>
              <motion.li
                variants={variantsLi}
                initial="hidden"
                animate="show"
                exit="exit"
                className={`
relative before:content-[''] before:absolute before:border-[10px]  before:border-x-transparent before:border-t-transparent before:border-b-white dark:before:border-b-[#31363F] before:top-[calc(100%+10px)] before:left-1/2 before:-translate-x-1/2 before:transition ${
                  show_menu_of_pages_nav === true ? "before:opacity-100 before:z-30" : "before:opacity-0 before:z-[-1000]"
                } `}
              >
                <motion.button variants={variantsLi}
initial="hidden"
animate="show"
exit="exit"
                  className="smT0:w-screen hover:bg-blue-200 dark:hover:bg-blue-400 top-24 transition-colors duration-200 block p-2 rounded"
                  onClick={() => {
                    set_show_menu_of_pages_nav(!show_menu_of_pages_nav);
                  }}
                >
                  Pages <FontAwesomeIcon icon={faArrowDownLong} />
                </motion.button>

                {/* from here this is a menu of links show when click in Pages button in navbar */}
                <AnimatePresence>
                  {show_menu_of_pages_nav && (
                    <motion.ul
                      variants={variants}
                      initial="hidden"
                      animate="show"
                      exit="exit"
                      className="menu shadow-2xl dark:shadow-md dark:shadow-white divide-y-2  absolute w-[200px] grid gap-y-2 text-center font-semibold  p-2 bg-white dark:bg-[#31363F] rounded top-[calc(100%+10px)] left-1/2 -translate-x-1/2"
                    >
                      <li>
                        <NavLink
                          onClick={() => set_show_menu_of_pages_nav(false)}
                          to="/blog-posts"
                          className={`block rounded text-black dark:text-white hover:bg-blue-200 dark:hover:bg-blue-400 transition-colors duration-200 `}
                        >
                          Blog posts
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => set_show_menu_of_pages_nav(false)}
                          to="/blog-single"
                          className={`block rounded text-black dark:text-white hover:bg-blue-200 dark:hover:bg-blue-400 transition-colors duration-200 `}
                        >
                          Blog single
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => set_show_menu_of_pages_nav(false)}
                          to="/404"
                          className={`block rounded text-black dark:text-white hover:bg-blue-200 dark:hover:bg-blue-400 transition-colors duration-200 `}
                        >
                          404
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          onClick={() => set_show_menu_of_pages_nav(false)}
                          to="/landing-page"
                          className={`block rounded text-black dark:text-white hover:bg-blue-200 dark:hover:bg-blue-400 transition-colors duration-200 `}
                        >
                          Landing page
                        </NavLink>
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
                {/* End The Menu OF Pages Button In NavBar */}
              </motion.li>
              <motion.li
              variants={variantsLi}
              initial="hidden"
              animate="show"
              exit="exit"
              >
                <NavLink
                  className="smT0:w-screen hover:bg-blue-200 dark:hover:bg-blue-400 top-24 transition-colors duration-200 block p-2 rounded"
                  to="/contact"
                >
                  contact
                </NavLink>
              </motion.li>
              {showLinks ? (
                <li className=" w-2/3 hidden smT0:block search-bar relative">
                  <input
                    type="text"
                    placeholder="search here"
                    className=" w-full bg-white border-2 px-2 py-1 rounded text-black dark:text-white placeholder:capitalize dark:bg-[#31363F] "
                  />
                  <FontAwesomeIcon className={`absolute right-2 top-1/2 -translate-y-1/2`} icon={faMagnifyingGlass} />
                </li>
              ) : (
                ""
              )}
            </motion.ul>
          ) : (
            ""
          )}
        </AnimatePresence>
        <div className=" search-bar relative smT0:hidden">
          <input
            type="text"
            placeholder="search here"
            className=" bg-white dark:bg-[#31363F] dark:text-white dark:border-[#76ABAE] border-2 px-2 py-1 rounded placeholder:capitalize"
          />
          <FontAwesomeIcon className=" absolute right-2 top-1/2 dark:text-[#76ABAE]  -translate-y-1/2" icon={faMagnifyingGlass} />
        </div>
        <div className="mood ml-5 relative">
          {mood === "light" ? (
            <FontAwesomeIcon
              className={`absolute cursor-pointer text-2xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  ${
                headerPadding ? `text-black dark:text-[#fff]` : `text-white`
              }`}
              onClick={() => {
                setMood("dark");
                document.documentElement.classList.add("dark");
              }}
              icon={faSun}
            />
          ) : (
            <FontAwesomeIcon
              className={`absolute cursor-pointer text-2xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  ${
                headerPadding ? `text-black dark:text-[#76ABAE] ` : `text-white`
              }`}
              onClick={() => {
                setMood("light");
                document.documentElement.classList.remove("dark");
              }}
              icon={faMoon}
            />
          )}
        </div>
      </div>
    </header>
  );
}

export default Nav;
