import React from "react";

function Header() {
  return (
    <>
      <div className="flex flex-col justify-center gap-y-1 bg-gray-100 pt-8 pb-8">
        <div className="flex flex-row justify-center justify-items-center mb-4">
          <img
            className="h-36 border-l-fuchsia-50 rounded-full"
            src="https://pbs.twimg.com/profile_images/1519334458511749120/851Vlw5e_400x400.jpg"
            alt="nikhil lad profile"
          />
        </div>
        <div className="lg:text-3xl">nikhil lad</div>
        <div className="lg:text-3xl text-gray-400">software engineer</div>
      </div>
    </>
  );
}

export default Header;
