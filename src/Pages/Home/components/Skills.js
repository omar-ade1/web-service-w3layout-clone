import { faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faChartSimple,
  faMagnifyingGlassPlus,
  faRepeat,
  faTrash,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function Skills() {
  let data = [
    {
      title: "Social Media Strategy",
      description:
        "Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duis sed et dolor sit amet.",
      icon: faRepeat,
    },
    {
      title: "Branding Strategy",
      description:
        "Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duis sed et dolor sit amet.",
      icon: faClock,
    },
    {
      title: "UI/UX Design",
      description:
        "Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duis sed et dolor sit amet.",
      icon: faChartSimple,
    },
    {
      title: "Digital Product Strategy",
      description:
        "Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duis sed et dolor sit amet.",
      icon: faTrash,
    },
    {
      title: "Web Hosting Service",
      description:
        "Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duis sed et dolor sit amet.",
      icon: faVideo,
    },
    {
      title: "SEO Services",
      description:
        "Vivamus a ligula quam tesque et libero justo, ultrices in. Ut eu leo non. Duis sed et dolor sit amet.",
      icon: faMagnifyingGlassPlus,
    },
  ];
  return (
    <div className="skills py-[50px]">
      <div className="container mx-auto smT0:px-5 px-3 flex flex-wrap justify-between gap-y-5">
        {data.map((box,index) => {
          return (
            <div key={index}
              className={`box w-[100%] relative smTlg:w-[45%] xl:w-[33%] 2xl:w-[31%] mx-auto flex gap-x-2`}
            >
              <span className="block">
                    <FontAwesomeIcon
                      className="text-2xl text-[#ff668a] "
                      icon={box.icon}
                    />
                  </span>
              <div className="text relative w-fit mx-auto">
              
                <h2>
                  <Link
                    className="text-[#22123f] text-2xl font-bold block lg:max-w-[350px] xl:max-w-[350px] 2xl:max-w-[350px] hover:text-rose-500"
                    to=""
                  >
                    {box.title}
                  </Link>
                </h2>
                <p className="text-gray-500 text-lg mt-2 max-w-[300px] smT0:max-w-full">
                  {box.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
