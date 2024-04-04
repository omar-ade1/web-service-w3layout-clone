import React from "react";

function Progress() {
  // console.log();
  let dataProgressBar = [
    {
      progress: "65%",
      title: "Completed projects",
    },
    {
      progress: "75%",
      title: "Happy Clients",
    },
    {
      progress: "90%",
      title: "Award winning design",
    },
    {
      progress: "80%",
      title: "24/7 support",
    },
  ];
  return (
    <div className=" py-[50px] bg-slate-200 dark:bg-[#222831] transition-colors duration-300">
      <div className="container mx-auto smT0:px-5 px-3 flex smT0:flex-col md:flex-col justify-between">
        <div className="text max-w-[45%] smT0:max-w-[100%] md:max-w-[100%]">
          <h2 className="text-3xl capitalize font-bold text-[#22123f] dark:text-[#eeeeee]">
            We create simple, effective strategies that connect with people
            across every channel by putting the customer at the center
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
        </div>
        <div className="image smT0:mt-10 md:mt-10 max-w-[50%] min-w-[50%] smT0:max-w-[100%] md:max-w-[100%] grid grid-cols-2 gap-[20px] ">
          {dataProgressBar.map((bar,index) => {
            return (
              <div key={index} className="box-progress flex justify-center items-center flex-col gap-5">
                <div className="progress relative w-[150px] h-[150px] rounded-full bg-white flex justify-center items-center overflow-hidden">
                  <h3 className="text-4xl font-bold relative z-30 dark:text-white">
                    {bar.progress}
                  </h3>
                  <div
                    style={{
                      background: `conic-gradient(#e91e63 ${bar.progress}, #eee 0%)`,
                    }}
                    className={`bar w-full h-full absolute before:content-[''] before:absolute before:h-[90%] before:w-[90%] before:bg-slate-200 dark:before:bg-[#222831] before:top-[50%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%]  before:rounded-full before:z-20`}
                  ></div>
                </div>
                <h3 className="text-xl smT0:text-base md:lg font-semibold text-center dark:text-[#eee]">{bar.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Progress;
