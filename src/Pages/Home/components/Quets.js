import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

function Quets() {
  let data = [
    {
      text: "They have responded immediately whenever we have had a question or problem and have been an amazing business partner. I Will recommend their services to many of our clients and have been thrilled with the work that they have done.",
      author: "omar adel",
      job: "front end",
    },
    {
      text: "They have responded immediately whenever we have had a question or problem and have been an amazing business partner. I Will recommend their services to many of our clients and have been thrilled with the work that they have done.",
      author: "omar adel",
      job: "front end",
    },
    {
      text: "They have responded immediately whenever we have had a question or problem and have been an amazing business partner. I Will recommend their services to many of our clients and have been thrilled with the work that they have done.",
      author: "omar adel",
      job: "front end",
    },
    {
      text: "They have responded immediately whenever we have had a question or problem and have been an amazing business partner. I Will recommend their services to many of our clients and have been thrilled with the work that they have done.",
      author: "omar adel",
      job: "front end",
    },
    {
      text: "They have responded immediately whenever we have had a question or problem and have been an amazing business partner. I Will recommend their services to many of our clients and have been thrilled with the work that they have done.",
      author: "omar adel",
      job: "front end",
    },
    {
      text: "They have responded immediately whenever we have had a question or problem and have been an amazing business partner. I Will recommend their services to many of our clients and have been thrilled with the work that they have done.",
      author: "omar adel",
      job: "front end",
    },
  ];

  let [numberOfBullets, setNumberOfBullets] = useState([]);
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
      setNumberOfBullets([1,2,3,4,5,6]);
    } else {
      setNumberOfBullets([1,2,3]);
    }
  }, [matches]);

  return (
    <div
      style={{ backgroundImage: "url('./images/testimonials.jpg')",backgroundAttachment: "fixed" }}
      className="quets py-[50px] relative bg-center bg-cover before:content-[''] before:w-full before:h-full before:bg-[#000000a6] before:absolute before:top-0 before:left-0"
    >
      <div className="container mx-auto smT0:px-5 px-3 relative">
        <div className="quets-box flex space-x-2 overflow-hidden relative">
          {data.map((quet) => {
            // f10d
            return (
              <>
                <div className="quet shrink-0 w-1/2 xsm:w-full p-3">
                  <div className="text mx-auto max-w-[430px]">
                    <q className=" block text-white font-semibold text-lg tracking-wide before:content-['']">
                <FontAwesomeIcon className="text-red-500 mr-3 text-3xl" icon={faQuoteLeft} />
                      
                      {quet.text}</q>
                  <div className="info flex gap-3 mt-4">
                    <p className="capitalize text-white font-bold">{quet.author}</p>
                    <p className="capitalize text-white">{quet.job}</p>
                  </div> 
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="bullets flex justify-center mt-10 gap-2">
          {numberOfBullets.map((quet, index) => {
            return (
              <button
                onClick={(event) => {
                  Array.from(event.target.parentElement.children).forEach((btn) => {
                    btn.classList.remove("active-bullets")
                    btn.style.backgroundColor = "red"
                  })
                  event.target.classList.add("active-bullets")
                  const quetElement =
                    event.target.parentElement.parentElement.children[0];
                  quetElement.scroll({
                    left:
                      /*{8} => is margin between boxs*/
                      (quetElement.clientWidth + 8) * index,
                    behavior: "smooth",
                  });
                }}
                className="w-3 h-3 first:bg-[#1976d2] bg-red-500 rounded-full hover:scale-125 hover:bg-red-700 transition-all "
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Quets;
