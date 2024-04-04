import React from "react";
import TitleOfSections from "../../About/components/TitleOfSections";

function WhyChooseUs() {
  let data = [
    {
      img: "./images/service1.jpg",
      title: "We believe in Quality",
      disc: "Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!",
    },
    {
      img: "./images/service2.jpg",
      title: "We stand for uniqueness",
      disc: "Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!",
    },
    {
      img: "./images/service3.jpg",
      title: "We respect Deadlines",
      disc: "Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!",
    },
  ];
  return (
    <div className="py-[50px] bg-slate-200 dark:bg-[#222831]">
      <TitleOfSections title="why choose us" />
      <div className="container mx-auto smT0:px-5 px-3 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-[30px]">
        {data.map((box,index) => {
          return (
            <div key={index} className="box">
              <img src={box.img} alt="why" className="rounded shadow-md" />
              <div className="text mt-5">
                <h3 className="font-semibold dark:text-white">{box.title}</h3>
                <p className="text-[#6b7280]">{box.disc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default WhyChooseUs;
