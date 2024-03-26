import React from "react";
import Landing from "./components/Landing";
import TextLinks from "./components/TextLinks";
import ImagesGallary from "./components/ImagesGallary";
import Skills from "./components/Skills";
import ImportanceOfSkills from "./components/ImportanceOfSkills";
import SeeWhatIsGoingOn from "./components/SeeWhatIsGoingOn";
import Quets from "./components/Quets";
import Asks from "./components/Asks";
import Subscribe from "./components/Subscribe";

function Home() {
  return (
    <div>
      <Landing />
      <TextLinks />
      <ImagesGallary />
      <Skills />
      <ImportanceOfSkills />
      <SeeWhatIsGoingOn />
      <Quets />
      <Asks />
      <Subscribe />
    </div>
  );
}

export default Home;
