import React from "react";

const NavLinks = ({ menu }) => {
  return (
    <ul
      className={`${menu ? "block" : "hidden"}
        mx-24 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 
        md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 py-5`}
    >
      <a href="#About">
        <li className="text-md p-1 md:p-0">About</li>
      </a>
      <a href="#Experience">
        <li className="text-md p-1 md:p-0">Experience</li>
      </a>
      <a href="#Contact">
        <li className="text-md p-1 md:p-0">Contact</li>
      </a>
    </ul>
  );
};

export default NavLinks;
