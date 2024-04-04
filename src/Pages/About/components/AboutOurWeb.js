import React from "react";

function AboutOurWeb() {
  return (
    <div className=" py-[50px] dark:bg-[#31363F] transition-colors duration-300">
      <div className="container mx-auto smT0:px-5 px-3 flex smT0:flex-col md:flex-col justify-between">
        <div className="text max-w-[45%] smT0:max-w-[100%] md:max-w-[100%]">
          <h2 className="text-4xl capitalize font-bold text-[#22123f] dark:text-[#eeeeee]">
            about our web studio
          </h2>
          <p className="mt-6 text-xl leading-[1.7] dark:text-[#a6a6a6]	">
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
            in ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit.
            Non quae, fugiat nihil ad. Lorem ipsum dolor sit amet. Lorem ipsum
            init dolor sit, amet elit. Dolor ipsum non velit, culpa! elit ut et.
          </p>
          <p className="mt-6 text-xl  leading-[1.7]	dark:text-[#a6a6a6] ">
            Pellen tesque libero ut justo, ultrices in ligula. Semper at. Lorem
            init ipsum dolor sit amet elit. Dolor ipsum non velit, culpa! Pellen
            tesque libero ut justo, ultrices in ligula amet dolor sit.
          </p>
          <button className="btn">
            read more
          </button>
        </div>
        <div className="image smT0:mt-10 md:mt-10 max-w-[45%] smT0:max-w-[100%] md:max-w-[100%]">
          <img className="rounded-xl" src="./images/about.jpg" alt="about" />
        </div>
      </div>
    </div>
  );
}

export default AboutOurWeb;
