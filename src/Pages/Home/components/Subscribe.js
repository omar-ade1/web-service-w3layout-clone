import React from "react";

function Subscribe() {
  return (
    <div className="py-[50px] bg-slate-200 dark:bg-[#31363F]">
      <div className="container mx-auto smT0:px-5 px-3">
        <div className="title w-fit mx-auto mb-5 text-center capitalize">
          <h2 className="text-2xl font-bold capitalize text-[#22123f] dark:text-[#eeeeee] tracking-wider">
            subscribe newsletter
          </h2>
          <p className="text-sm text-[#3a206a] dark:text-[#eeeeee]">
            enter your email & receive the latest news, updates & special offers
            from us.
          </p>
        </div>
        <form className=" flex items-center w-[clamp(250px,50%,1000px)] mx-auto justify-center gap-x-3">
          <input
            required
            className="border-2 p-2 rounded flex-1 placeholder:capitalize focus:outline-none focus:border focus:border-red-500"
            type="email"
            placeholder="enter your email"
          />
          <input
            className="p-2 bg-red-500 cursor-pointer text-white font-bold rounded capitalize tracking-wider"
            type="submit"
            value="subscribe"
          />
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
