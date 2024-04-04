import React from "react";
import TitleOfSections from "../../About/components/TitleOfSections";
import Skills from "../../Home/components/Skills";

function HandCraftedServices() {
  return (
    <div className="py-[50px] dark:bg-[#31363f]">
        <TitleOfSections title="Hand-Crafted services" />
        <Skills/>
    </div>
  );
}

export default HandCraftedServices;
