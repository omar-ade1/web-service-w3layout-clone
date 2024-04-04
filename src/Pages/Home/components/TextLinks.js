import React from "react";
import { Link } from "react-router-dom";

function TextLinks() {
  let data = [
    {
      span: "video productions",
      title: "Stunning video sequence and impressing ideas are all here.",
      discription: "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet.",
    },
    {
      span: "BRANDING DESIGN",
      title: "Great reflection of your brand be achieved by top designers.",
      discription: "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet.",
    },
    {
      span: "GRAPHIC DESIGN",
      title: "Creating gorgeous graphic design meeting clients needs.",
      discription: "Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor amet ipsum primis in faucibus orci dolor sit et amet.",
    },
  ];
  return (
    <div className="py-[50px] dark:bg-[#31363F]" id="text-links-part">
      <div className="container smT0:px-5 px-3 grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-y-10 gap-x-3 mx-auto">
        {data.map((box, index) => {
          return (
            <div className="box-text mx-auto" key={index}>
              <span className="font-bold text-neutral-400 capitalize">
                0{index + 1}. {box.span}
              </span>
              <h2>
                <Link
                  className="text-[#22123f] dark:text-[#eeeeee] text-2xl font-bold block lg:max-w-[350px] xl:max-w-[350px] 2xl:max-w-[350px] hover:text-rose-500"
                  to=""
                >
                  {box.title}
                </Link>
              </h2>
              <p className="text-gray-500 text-lg mt-2 max-w-[300px] smT0:max-w-full">{box.discription}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TextLinks;
