import React from "react";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faGlobe,
  faLocationDot,
  faPhone,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Forms() {
  return (
    <div className="py-[50px] dark:bg-[#31363f]">
      <div className="container mx-auto smT0:px-5 px-3 flex smT0:flex-col gap-6">
        <form id="form" className="w-[70%] smT0:w-[100%]">
          <p className="title-of-form text-md font-bold mb-4 dark:text-[#eee]">
            Your email address will not be published. Required fields are marked
            *
          </p>
          <div className="inputs grid grid-cols-4 gap-[10px] grid-rows-6 ">
            <input
              className="input-style dark:text-white text-black dark:bg-[#222831] dark:border-[#222] col-span-2 p-2"
              placeholder="Name"
              type="text"
              name="UserName"
              required
            />
            <input
              className="input-style dark:text-white text-black dark:bg-[#222831] dark:border-[#222] col-span-2 p-2"
              placeholder="Email"
              type="email"
              name="Email"
              required
            />
            <input
              className="input-style dark:text-white text-black dark:bg-[#222831] dark:border-[#222] col-span-2 p-2"
              placeholder="Phone Number"
              type="tel"
              name="Phone"
              required
            />
            <input
              className="input-style dark:text-white text-black dark:bg-[#222831] dark:border-[#222] col-span-2 p-2"
              placeholder="Subject"
              type="text"
              name="Subject"
            />
            <textarea
              className="input-style dark:text-white text-black dark:bg-[#222831] dark:border-[#222] col-span-4 p-2 resize-none row-span-3"
              placeholder="Message"
              name="Message"
            />
            <button  className=" col-start-4 smT0:col-start-1 smT0:col-end-5 col-end-4 btn">submit</button>
          </div>
        </form>
        <div className="address w-[30%] smT0:w-[100%]">
          <h3 className="title-of-address text-lg capitalize font-bold dark:text-[#eee]">
            our office address
          </h3>
          <address className="dark:text-[#eee]">
            <p className="">
              <FontAwesomeIcon
                className="pr-2 text-[#777]"
                icon={faLocationDot}
              />
              Style web design studio, 208 Trainer Avenue street, Corner Market,
              NY - 62617
            </p>
            <a className="block hover:underline" href="tel:+201023432232">
              <FontAwesomeIcon className="pr-2 text-[#777]" icon={faPhone} />{" "}
              +201023432232
            </a>
            <a className="block hover:underline" href="mailto:mail@example.com">
              <FontAwesomeIcon className="pr-2 text-[#777]" icon={faEnvelope} />
              mail@example.com
            </a>
            <a
              className="block hover:underline"
              href="mailto:support@example.com"
            >
              <FontAwesomeIcon className="pr-2 text-[#777]" icon={faGlobe} />
              support@example.com
            </a>
          </address>
          <div className="media mt-5 dark:text-[#eee]">
            <h3 className="title-of-media text-lg capitalize font-bold">
              follow us on social media
            </h3>
            <div className="media-icons flex gap-x-3 items-center mt-3 sm:justify-center xsm:justify-center">
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
        </div>
      </div>
    </div>
  );
}

export default Forms;
