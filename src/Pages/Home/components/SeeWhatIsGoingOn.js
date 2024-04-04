import React from "react";

function SeeWhatIsGoingOn({ data, title }) {
  return (
    <div className="py-[50px] dark:bg-[#31363F]">
      <div className="container mx-auto smT0:px-5 px-3">
        <div className="title w-fit mx-auto mb-5">
          <h2 className="text-2xl font-bold capitalize text-[#22123f] dark:text-[#eeeeee] tracking-wider">{title}</h2>
        </div>
        <div className="image-boxs grid grid-cols-3 smTlg:grid-cols-2 smT0:grid-cols-1 gap-5">
          {data.map((box, index) => {
            return (
              <div key={index} className="box shadow-xl dark:shadow-[#0f0f0f] rounded overflow-hidden">
                <img className=" object-cover block w-full h-[220px] " src={box.img_url} alt="blog" />
                <div className="text p-3">
                  <h3 className="capitalize font-semibold text-[#22123f] dark:text-[#eeeeee]">{box.title}</h3>
                  <span className="text-gray-500 capitalize">{box.history}</span>
                  <p className="mt-3 text-purple-900 dark:text-[#76ABAE]">{box.description}</p>
                  <button className="block border-b-2 w-fit capitalize mt-3 border-b-red-500 dark:border-b-[#007F73] transition-transform duration-300 text-[#a4004d] dark:text-red-500 font-bold hover:scale-110">
                    read more
                  </button>
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
