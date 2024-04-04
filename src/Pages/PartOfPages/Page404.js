import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { varent } from "../../transition";
import TitleOfPages from "../../components/TitleOfPages";
import { Link } from "react-router-dom";
function Page404() {

  useEffect(() => {
    window.scrollTo({ top: "0", behavior: "smooth" });
  }, []);


  return (
    <motion.div variants={varent} initial="hidden" animate="show" exit="exit">
      <TitleOfPages />
      <div className="404 dark:bg-[#222831] py-[50px]">
        <div className="container mx-auto smT0:px-5 px-3">
          <div className="img-and-404">
            <img className="block mx-auto w-[500px]" src="./images/error.svg" alt="ErrorSvg" />
            <h2 className="text-9xl font-mono text-[#ff668a] mt-[-60px] stroke-slate-500 w-fit mx-auto font-bold">404</h2>
          </div>
          <div className="text w-fit mx-auto my-5 text-center">
            <h3 className="text-2xl font-bold dark:text-[#eee] capitalize">The page is lost</h3>
            <p className="max-w-[400px] font-semibold text-[#777] mt-3">
              Sorry, but nothing matched your search terms. Please try again with some different keywords..
            </p>
          </div>
          <div className="search mt-5 flex smT0:flex-col smT0:items-stretch items-center gap-5 mx-auto max-w-[400px]">
            <input
              className="border dark:bg-[#31363F] dark:text-white text-blacke block p-2 rounded flex-1
             placeholder:text-lg placeholder:capitalize "
              type="search"
              placeholder="search here"
            />
            <button className="btn m-0">search</button>
          </div>
          <Link className="block w-fit mx-auto dark:text-[#eee] mt-5 text-center font-bold transition-all hover:scale-125" to="/">
            &crarr; Back To Home
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default Page404;
