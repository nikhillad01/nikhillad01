import React from "react";
import AboutMe from "./aboutMe";
import Contact from "./contact"

function AboutWrapper() {
  return (
    <div class="flex mb-4 pt-8 pl-4 pr-4 lg:pl-96 lg:pr-96 gap-x-8">
      <div className="w-2/3">
        <AboutMe />
      </div>
      <div className="w-1/3">
        <Contact />
      </div>
    </div>
  );
}

export default AboutWrapper;
