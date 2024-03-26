import React from "react";
import { Link } from "react-router-dom";

function SeeWhatIsGoingOn() {
  let data = [
    {
      img_url: "./images/blog1.jpg",
      title: "Best free Web templates",
      history: "march 25, 2024",
      description:
        "Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!",
    },
    {
      img_url: "./images/blog2.jpg",
      title: "Skills to become a Designer",
      history: "march 25, 2024",
      description:
        "Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!",
    },
    {
      img_url: "./images/blog3.jpg",
      title: "How to make 404 error page?",
      history: "march 25, 2024",
      description:
        "Lorem ipsum dolor sit amet ad minus libero ullam ipsam quas earum!",
    },
  ];
  return (
    <div className="py-[50px]">
      <div className="container mx-auto smT0:px-5 px-3">
        <div className="title w-fit mx-auto mb-5">
          <h2 className="text-2xl font-bold capitalize text-[#22123f] tracking-wider">
            see what's going on
          </h2>
        </div>
        <div className="image-boxs grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
          {data.map((box) => {
            return (
              <div className="box shadow-xl rounded overflow-hidden">
                <img src={box.img_url} alt="blog" />
                <div className="text p-3">
                  <h3 className="capitalize font-semibold text-[#22123f]">{box.title}</h3>
                  <span className="text-gray-500 capitalize">{box.history}</span>
                  <p className="mt-3 text-purple-900">{box.description}</p>
                  <Link className="block border-b-2 w-fit capitalize mt-3 border-b-red-500 transition-transform duration-300 text-[#d34588] font-bold hover:scale-110" to="/">read more</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SeeWhatIsGoingOn;
