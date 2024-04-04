import React from "react";
import BarsImportanceOfskills from "../../Home/components/BarsImportanceOfskills";
import TitleOfSections from "../../About/components/TitleOfSections";
function Bars() {
  return (
    <div className="py-[50px] dark:bg-[#31363f]">
      <TitleOfSections title="What you will have"/>
      <div className="container mx-auto smT0:px-5 px-3 flex smT0:flex-col justify-between items-center">
        <BarsImportanceOfskills />
        <div className="text w-[45%] smT0:w-full smT0:mt-7 rounded-2xl overflow-hidden">
          <h2 className="text-xl font-semibold dark:text-white">
            Our Skills - We are qualified and of experienced with a lot of
            skills
          </h2>
          <p className="mt-5 text-[#6b7280]">
            Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices
            in ligula. Semper at. Lorem ipsum dolor sit amet elit. Non quae,
            fugiat nihil ad. Lorem ipsum dolor sit amet. Lorem ipsum init dolor
            sit, amet elit. Dolor ipsum non velit, culpa! elit ut et.
          </p>
          <p className="mt-5 text-[#6b7280]">
            Pellen tesque libero ut justo, ultrices in ligula. Semper at. Lorem
            init ipsum dolor sit amet elit. Dolor ipsum non velit, culpa! Pellen
            tesque libero ut justo, ultrices in ligula amet dolor sit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bars;
