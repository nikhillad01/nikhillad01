import React from "react";

const gerHomePagePath=()=>{
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"){
    return ""
  }
  else return "nikhillad01"
}

function Navbar() {
  return (
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-2">
      <div class="container  mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between lg:w-auto  lg:static lg:block lg:justify-start">
          <a
            class="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
            href={"/"+gerHomePagePath()}
          >
            nikhil lad
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
