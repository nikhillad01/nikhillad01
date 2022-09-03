import React from "react";

function AboutMe() {
  return (
    <>
      <div className="text-left font-bold text-xl pb-2">about me</div>
      <div className="text-left text-gray-800 lowercase leading-relaxed">
        hi ✋, I'm a full-stack backend developer. I have expertise in creating
        software products and solutions that have an impact and produce
        measurable business benefits.
        Currently building products at <a  href="https://cargill.com/" target="_blank"  rel="noreferrer" className="font-medium  dark:text-green-700 hover:underline">cargill</a>
      </div>
    </>
  );
}

export default AboutMe;
