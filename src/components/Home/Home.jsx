import React from "react";
import avatarImg from "../../assets/Avatar1.png";

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          {" "}
          Hello I am Shirooo
        </h1>
        <p className="text-sm md:text-2xl tracking-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          iste quos dolores saepe esse nisi quasi sunt eum est culpa magnam
          ipsam id earum.
        </p>
        <button className="mt-5 md:md-10 text-white py02 text-sm md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-4xl bg-[#465697]">
          Contact Me
        </button>
      </div>
      <div>
        <img className="" src={avatarImg} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;
