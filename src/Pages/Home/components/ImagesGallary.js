import React from "react";

function ImagesGallary() {
  let data = [
    {
      image_url: "./images/p1.jpg",
      image_title: "UI experience",
      image_description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.",
    },
    {
      image_url: "./images/p2.jpg",
      image_title: "Wordpress",
      image_description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.",
    },
    {
      image_url: "./images/p3.jpg",
      image_title: "Ecommerce",
      image_description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.",
    },
    {
      image_url: "./images/p4.jpg",
      image_title: "Headphones",
      image_description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.",
    },
    {
      image_url: "./images/p5.jpg",
      image_title: "Mobile app",
      image_description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.",
    },
    {
      image_url: "./images/p6.jpg",
      image_title: "Modern Ideas",
      image_description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.",
    },
    {
      image_url: "./images/p7.jpg",
      image_title: "Fashion design",
      image_description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.",
    },

    {
      image_url: "./images/p8.jpg",
      image_title: "Creativity",
      image_description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, quia.",
    },
  ];
  return (
    <div className="image-gallary py-[50px] bg-slate-200">
      <div className="container mx-auto smT0:px-5 px-3 grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] smT0:grid-cols-[repeat(auto-fill,minmax(250px,1fr))]">
        {data.map((box,index) => {
          return (
            <div key={index} className="box-image relative group before:content-[''] before:absolute before:w-full before:h-full before:bg-black before:opacity-0 hover:before:opacity-50 before:transition-all before:duration-500">
              <img loading="lazy" src={box.image_url} alt="" />
              <div className="text transition-all duration-500 opacity-0 group-hover:opacity-100 absolute bottom-[40px] px-5">
                <h3 className="font-bold text-white text-2xl">
                  {box.image_title}
                </h3>
                <p className="mt-3 text-white text-lg">
                  {box.image_description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ImagesGallary;
