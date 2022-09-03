import React from "react";

function Navbar() {
  return (
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-2">
      <div class="container  mx-auto flex flex-wrap items-center justify-between">
        <div class="w-full relative flex justify-between lg:w-auto  lg:static lg:block lg:justify-start">
          <a
            class="text-xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap"
            href="/"
          >
            nikhil lad
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
