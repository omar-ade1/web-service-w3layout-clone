import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Asks() {
  const [data, setData] = useState([
    {
      ask: "How much does a static website cost?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor.",
      isOpen: false,
    },
    {
      ask: "How to choose a best web template?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor.",
      isOpen: false,
    },
    {
      ask: "How to download a template?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor.",
      isOpen: false,
    },
    {
      ask: "Why should i choose a free website?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum sagittis vitae et leo duis ut. Ut tortor.",
      isOpen: false,
    },
  ]);

  const toggleData = (index) => {
    let newData = [...data];
    newData.filter((ask) => {
      return ask !== newData[index] ? (ask.isOpen = false) : "";
    });
    newData[index].isOpen = !newData[index].isOpen;
    setData(newData);
  };
  return (
    <div className="py-[50px] dark:bg-[#222831] ">
      <div className="container mx-auto smT0:px-5 smT0:flex-col md:flex-col px-3 flex justify-around items-start">
        <div className="asks-part py-3 w-[30%] smT0:w-[100%]  md:w-[100%]">
          {data.map((ask, index) => {
            return (
              <div className="ask-box group cursor-pointer select-none transition-all duration-300">
                <div
                  onClick={() => {
                    toggleData(index);
                  }}
                  className="ask-text-icon border-b-2 flex items-center justify-between py-3"
                >
                  <h3
                    className={`font-semibold dark:text-[#eeeeee] text-xl group-hover:text-red-500 transition-all duration-300 ${
                      ask.isOpen ? "text-red-500 dark:text-red-500" : ""
                    }`}
                  >
                    {ask.ask}
                  </h3>
                  <FontAwesomeIcon
                    className={`border-2 w-3 h-3 dark:text-[#eeeeee] rounded-full p-1 group-hover:text-red-500 group-hover:border-red-500 transition-all duration-300 ${
                      ask.isOpen ? "text-red-500 dark:text-red-500 border-red-500" : ""
                    }`}
                    icon={faPlus}
                  />
                </div>
                <p
                  className={`answer text-lg dark:text-[#FF9800] font-semibold transition-all duration-300 ease-linear overflow-hidden py-4 border-b-2 ${
                    ask.isOpen ? "max-h-52 opacity-100 " : "max-h-0 opacity-0"
                  }`}
                >
                  {ask.answer}
                </p>
              </div>
            );
          })}
        </div>
        <div className="image smT0:w-[100%]  md:w-[100%] w-[40%] smT0:mt-5 md:mt-5">
          <img className="rounded-xl" src="./images/faq.jpg" alt="asked" />
        </div>
      </div>
    </div>
  );
}

export default Asks;
