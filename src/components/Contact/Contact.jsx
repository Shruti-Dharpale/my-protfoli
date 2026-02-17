import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
    <div
      id="Contact"
      className="flex justify-around bd-[3465697 text-white p-10 md:p-12 items-center gap-2"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free to reach out
        </h3>
      </div>
      <ul className="text-sm md:text-xl">
        <li className="flex gap-1 item-center">
          <MdOutlineEmail size={20} />
          shiroo@gmail.com
        </li>
        <li className="flex gap-1 item-center">
          <CiLinkedin />
          linkedin.com/shiroo
        </li>
        <li className="flex gap-1 item-center">
          <FaGithub />
          github.com/shiroo
        </li>
      </ul>
    </div>
     <footer className="bg-black text-white text-center py-3 text-xs md:text-sm">
        © {new Date().getFullYear()} Portfolio. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;
