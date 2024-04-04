import React from "react";
import TitleOfSections from "./TitleOfSections";

function OurClients() {
  let data = [
    {
      img: "./images/brand1.png",
    },
    {
      img: "./images/brand2.png",
    },
    {
      img: "./images/brand3.png",
    },
    {
      img: "./images/brand4.png",
    },
    {
      img: "./images/brand5.png",
    },
    {
      img: "./images/brand6.png",
    },
    {
      img: "./images/brand1.png",
    },
    {
      img: "./images/brand2.png",
    },
    {
      img: "./images/brand3.png",
    },
    {
      img: "./images/brand4.png",
    },
    {
      img: "./images/brand5.png",
    },
    {
      img: "./images/brand6.png",
    },
  ];

  return (
    <div className="py-[50px]  bg-slate-200 dark:bg-[#222831] transition-colors duration-300 select-none">
      <TitleOfSections title="our client" />
      <div className="container mx-auto smT0:px-5 px-3 grid grid-cols-6 gap-[30px] smT0:grid-cols-4">
        {data.map((box,index) => {
          return (
            <div className="box mx-auto" key={index}>
              <img className="w-[80px] opacity-50 hover:opacity-100 transition-opacity duration-200 cursor-pointer" src={box.img} alt="logo" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurClients;
