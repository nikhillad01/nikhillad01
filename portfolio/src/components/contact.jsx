import React from "react";
import { TwitterButton, LinkedInButton, GithubButton } from "../assets/icons"

function Contact() {
  return (
    <div className="flex flex-col">
      <div className="text-left font-bold text-xl pb-2">contact</div>
      <div className="flex flex-col text-left text-gray-800 lowercase gap-0">
        <TwitterButton />
        <LinkedInButton/>
        <GithubButton/>
      </div>
      </div>
  );
}

export default Contact;
