import React, { useState } from "react";

function ImportanceOfSkills() {
  let data = [
    {
      title: "Figma illustrations",
      progress: "80",
    },
    {
      title: "PHP programming",
      progress: "95",
    },
    {
      title: "Web design & development",
      progress: "90",
    },
    {
      title: "Adobe Photoshop",
      progress: "75",
    },
  ];
  const [scrollBars, setScrollBars] = useState(false);
  const sco = () => {
    console.log();
    if (window.scrollY >= document.querySelector(".bar").offsetTop - 400) {
      setScrollBars(true);
    }
  };
  window.addEventListener("scroll", sco);

  return (
    <div id="bars" className="Importance-of-skills py-[50px] bg-slate-200">
      <div className="container mx-auto smT0:px-5 px-3 flex smT0:flex-col justify-between items-center">
        <div className="text-and-progress w-[45%] smT0:w-full">
          <div className="title">
            <h2 className="text-3xl text-[#22123f] font-bold">
              Importance of Skills
            </h2>
            <p className="text-gray-500 mt-4">
              Lorem ipsum viverra feugiat. Pellen tesque libero ut justo,
              ultrices in ligula. Semper at. Lorem ipsum dolor sit amet elit.
              Non quae, ad.
            </p>
          </div>
          <div className="bars-progress space-y-5 mt-5">
            {data.map((bar, index) => {
              return (
                <div key={index} className="bar">
                  <p className="title text-[#22123f] font-bold">{bar.title}</p>
                  <div className="progress w-full h-2 relative bg-white shadow-lg rounded-full">
                    <span className={`w-[${bar.progress}%] h-full absolute`}>
                      <span
                        className={`bg-red-500 absolute h-full ${
                          scrollBars ? "animate-barsAnimation" : ""
                        }  rounded-full  `}
                      >
                        <span
                          className={`absolute right-0 w-[20px] top-[-25px] h-[20px] 
                           ${scrollBars === true ? "opacity-100" : "opacity-0"} 
                           text-[#22123f] font-bold transition-all duration-1000`}
                        >
                          {bar.progress}%
                        </span>
                      </span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="image w-[45%] smT0:w-full smT0:mt-7 rounded-2xl overflow-hidden">
          <img src="./images/progress.jpg" alt="progress" />
        </div>
      </div>
    </div>
  );
}

export default ImportanceOfSkills;
