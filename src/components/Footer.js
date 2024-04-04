import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="pt-[50px] bg-[#26243c] dark:bg-[#282734] text-[#97a1a9]">
      <div className="container mx-auto smT0:px-5 px-3 grid sm:grid-cols-2 xsm:grid-cols-1 grid-cols-4 gap-3 pb-4">
        <div className="logo-and-describe sm:text-center xsm:text-center">
          <h2 className="logo capitalize tracking-wider md:tracking-normal font-['Pacifico'] text-3xl text-white md:text-2xl font-bold ">
            web services
          </h2>
          <p className="text-sm mt-3">
            We are real pros at digital and web design. We work for our clients
            to provide them with the best service and products. We value every
            project as we get invaluable experience.
          </p>
          <div className="media flex gap-x-3 items-center mt-3 sm:justify-center xsm:justify-center">
            <a
              className="w-[20px] h-[20px] border rounded-full p-4 flex justify-center items-center hover:bg-red-500 hover:text-white transition"
              href="/"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              className="w-[20px] h-[20px] border rounded-full p-4 flex justify-center items-center hover:bg-red-500 hover:text-white transition"
              href="/"
            >
              <FontAwesomeIcon icon={faX} />
            </a>
            <a
              className="w-[20px] h-[20px] border rounded-full p-4 flex justify-center items-center hover:bg-red-500 hover:text-white transition"
              href="/"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              className="w-[20px] h-[20px] border rounded-full p-4 flex justify-center items-center hover:bg-red-500 hover:text-white transition"
              href="/"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
        <div className="useful-links ">
          <h3 className=" text-center title text-xl capitalize font-bold text-white">
            useful links
          </h3>
          <div className="links flex flex-col text-center">
            <Link className="hover:text-white">about us</Link>
            <Link className="hover:text-white">blog posts</Link>
            <Link className="hover:text-white">pricing plans</Link>
            <Link className="hover:text-white">services</Link>
            <Link className="hover:text-white">contact us</Link>
          </div>
        </div>
        <div className="resources">
          <h3 className="text-center title text-xl capitalize font-bold text-white">
            resources
          </h3>
          <div className="links flex flex-col text-center">
            <Link className="hover:text-white">training</Link>
            <Link className="hover:text-white">marketplace</Link>
            <Link className="hover:text-white">our experts</Link>
            <Link className="hover:text-white">platform</Link>
            <Link className="hover:text-white">customers</Link>
          </div>
        </div>
        <div className="insagram-posts">
          <h3 className="text-center title text-xl capitalize font-bold text-white">
            Instagram posts
          </h3>
          <div className="posts space-y-2 mt-3">
            <div className="post text-center">
              <h3 className="title-of-post text-white font-bold">
                Practice Safe Design. Always Use...
              </h3>
              <p className="text text-sm mt-1 max-w-[200px] mx-auto">
                We work for our clients to provide them with the best service
              </p>
            </div>
            <div className="post text-center">
              <h3 className="title-of-post text-white font-bold">
                How to Start when You...
              </h3>
              <p className="text text-sm mt-1 max-w-[200px] mx-auto">
                We work for our clients to provide them with the best service
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="rights border-t p-3">
        <p className="text-center">
          © 2021 Web Service. All rights reserved. Design by{" "}
          <span className="capitalize text-red-500 font-bold">omar adel</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
