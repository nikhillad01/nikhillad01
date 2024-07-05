import React from "react";

function AboutMe() {
  return (
    <>
      <div className="text-left font-bold text-xl pb-2">about me</div>
      <div className="text-left text-gray-800 lowercase leading-relaxed">
        hi ✋, I'm a full-stack backend developer. I have expertise in creating
        software products and solutions that have an impact and produce
        measurable business benefits. Currently building products at{" "}
        <a
          href="https://cargill.com/"
          target="_blank"
          rel="noreferrer"
          className="font-medium  dark:text-green-700 hover:underline"
        >
          cargill
        </a>
      </div>
      <p className="text-left text-gray-800 lowercase leading-relaxed">
        checkout my{" "}
        <a
          href="https://medium.com/@nikhillad01"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline"
        >
          Medium articles
        </a>
        .
      </p>
    </>
  );
}

export default AboutMe;
