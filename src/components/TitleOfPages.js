import React from "react";
import { Link, useLocation } from "react-router-dom";

function TitleOfPages({ children }) {
  let pageName = useLocation();
  return (
    <div
      style={{ backgroundImage: "url('./images/innerbg.jpg')" }}
      className={`h-[400px] relative bg-cover bg-no-repeat bg-center before:content-[''] before:absolute before:inset-0 before:bg-[#000000a8] flex items-center justify-center`}
    >
      <div className={`container mx-auto mt-10 smT0:px-5 px-3 relative flex justify-center flex-col`}>
        <h1 className="text-white text-5xl font-bold capitalize">{pageName.pathname.slice(1)}</h1>
        <h3 className="text-[#bcbcbc] text-xl font-semibold capitalize mt-4">
          <Link className="opacity-70 hover:underline" to="/">
            Home
          </Link>{" "}
          {pageName.pathname}
        </h3>
        <div className="flex gap-4 mt-4">
        {children && children.map((child, index) => {
          return <div key={index}>{child}</div>;
        })}
      </div>
      </div>

    </div>
  );
}

export default TitleOfPages;
