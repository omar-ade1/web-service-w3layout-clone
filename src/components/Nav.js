import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faMagnifyingGlass,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  let [mood, setMood] = useState("light");
  let [headerPadding, setHeader] = useState(false);
  let [showLinks, setShowLinks] = useState(false);
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  });
  return (
    <header
      className={`${
        headerPadding
          ? `py-3 bg-white h-[80px] shadow-2xl` /*IF SCROLL UPPER THAN 100*/
          : `py-10 bg-transparent h-[100px]` /*IF SCROLL LOWER THAN 100*/
      } flex z-50 items-center fixed left-0 w-full top-0 transition-all duration-300 header py-3`}
    >
      <div className="container px-5 flex justify-evenly items-center mx-auto">
        <div className="logo flex-1">
          <Link
            className={`capitalize tracking-wider md:tracking-normal font-['Pacifico'] text-3xl md:text-2xl font-bold ${headerPadding? `text-black`: `text-white`}`}
            to="/"
          >
            web services
          </Link>
        </div>
        {showLinks ? (
          <FontAwesomeIcon
            className="text-3xl text-red-700 order-last ml-5 hidden smT0:block cursor-pointer"
            onClick={() => setShowLinks(!showLinks)}
            icon={faXmark}
          />
        ) : (
          <FontAwesomeIcon
            className="text-2xl order-last ml-5 hidden smT0:block cursor-pointer"
            onClick={() => setShowLinks(!showLinks)}
            icon={faBars}
          />
        )}
        <ul
          className={`font-bold links mr-3 md:mr-1 flex space-x-3 md:space-x-1   capitalize  ${
            showLinks
              ? `smT0:absolute smT0:flex-col smT0:top-full smT0:left-0 smT0:bg-red-200 smT0:w-full smT0:text-center smT0:space-x-0  smT0:items-center smT0:gap-y-3`
              : `smT0:hidden`
          } ${headerPadding? `text-black`: `text-white`} `}
        >
          <li>
            <NavLink className="smT0:w-screen hover:bg-blue-200 block p-2 rounded" href="/">
              home
            </NavLink>
          </li>
          <li>
            <NavLink className="smT0:w-screen hover:bg-blue-200 block p-2 rounded" href="/">
              about
            </NavLink>
          </li>
          <li>
            <NavLink className="smT0:w-screen hover:bg-blue-200 block p-2 rounded" href="/">
              services
            </NavLink>
          </li>
          <li>
            <NavLink className="smT0:w-screen hover:bg-blue-200 block p-2 rounded" href="/">
              pages
            </NavLink>
          </li>
          <li>
            <NavLink className="smT0:w-screen hover:bg-blue-200 block p-2 rounded" href="/">
              contact
            </NavLink>
          </li>
          {showLinks ? (
            <li className=" w-2/3 hidden smT0:block search-bar relative">
              <input
                type="text"
                placeholder="search here"
                className=" w-full bg-white border-2 px-2 py-1 rounded placeholder:capitalize"
              />
              <FontAwesomeIcon
                className=" absolute right-2 top-1/2 -translate-y-1/2"
                icon={faMagnifyingGlass}
              />
            </li>
          ) : (
            ""
          )}
        </ul>
        <div className=" search-bar relative smT0:hidden">
          <input
            type="text"
            placeholder="search here"
            className=" bg-white border-2 px-2 py-1 rounded placeholder:capitalize"
          />
          <FontAwesomeIcon
            className=" absolute right-2 top-1/2 -translate-y-1/2"
            icon={faMagnifyingGlass}
          />
        </div>
        <div className="mood ml-5 relative">
          {mood === "light" ? (
            <FontAwesomeIcon
              className="absolute cursor-pointer text-2xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              onClick={() => {
                setMood("dark");
              }}
              icon={faSun}
            />
          ) : (
            <FontAwesomeIcon
              className="absolute cursor-pointer text-2xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              onClick={() => {
                setMood("light");
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
