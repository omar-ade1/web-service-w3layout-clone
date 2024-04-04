import React from "react";
import TitleOfSections from "./TitleOfSections";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGooglePlusG } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

function MeetTheTeam() {
  let data = [
    {
      img: "./images/team1.png",
      title: "John Marshall",
      job: "Designer",
      disc: "Our web design team will spend time with our digital marketing team.",
    },
    {
      img: "./images/team2.png",
      title: "Steve Roberts",
      job: "Photographer",
      disc: "Our web design team will spend time with our digital marketing team.",
    },
    {
      img: "./images/team3.png",
      title: "Michael Cartney",
      job: "Designer",
      disc: "Our web design team will spend time with our digital marketing team.",
    },
  ];
  return (
    <div className="meet-the-team py-[50px] dark:bg-[#31363f] transition-colors duration-300">
      <TitleOfSections title="meet our team" />
      <div className="container mx-auto smT0:px-5 px-3 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[20px]">
        {data.map((box,index) => {
          return (
            <div className="box-of-image" key={index}>
              <div className="imge relative group overflow-hidden">
                <img
                  className="bg-cover w-full h-full bg-slate-200 dark:bg-[#222831] rounded"
                  src={box.img}
                  alt=""
                />
                <div className="overLay group-hover:translate-y-[0%] translate-y-[100%] transition-all duration-300 absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-2 bg-[#00000044]">
                  <p className="text text-white font-semibold">{box.disc}</p>
                  <div className="icons flex gap-x-[10px] my-[10px]">
                    <FontAwesomeIcon
                      className="text-white rounded-full p-1 w-[20px] h-[20px] hover:bg-[#fbfbfb8a] transition-colors"
                      icon={faFacebookF}
                    />
                    <FontAwesomeIcon
                      className="text-white rounded-full p-1 w-[20px] h-[20px] hover:bg-[#fbfbfb8a] transition-colors"
                      icon={faX}
                    />
                    <FontAwesomeIcon
                      className="text-white rounded-full p-1 w-[20px] h-[20px] hover:bg-[#fbfbfb8a] transition-colors"
                      icon={faGooglePlusG}
                    />
                    <FontAwesomeIcon
                      className="text-white rounded-full p-1 w-[20px] h-[20px] hover:bg-[#fbfbfb8a] transition-colors"
                      icon={faEnvelope}
                    />
                  </div>
                </div>
              </div>
              <div className="text mx-auto w-fit text-center mt-3">
                <h3 className="text-lg font-semibold dark:text-[#eeeeee] hover:text-[#f43f5e] cursor-pointer">
                  {box.title}
                </h3>
                <p className="dark:text-[#a6a6a6]">{box.job}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MeetTheTeam;
