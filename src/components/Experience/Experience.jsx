import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiRedis } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FaAmazon } from "react-icons/fa";

const Experience = () => {
  return (
    // changed padding for better scaling on tablets
    <div id="Experience" className="p-6 md:p-12 lg:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Experience</h1>

      {/* changed flex direction for tablets */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-around gap-8">
        {/* Skills Section */}
        <div className="flex flex-wrap md:w-2/5 gap-6 md:gap-8 md:p-8 py-6 justify-center">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiRedis color="#FF4438" size={50} />
          </span>
        </div>

        {/* Experience Cards Section */}
        <div className="flex flex-col md:gap-6 md:w-3/5">
          <div className="flex flex-col md:flex-row gap-6 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-start md:items-center">
            <FaGoogle color="#4285F4" size={70} />
            <span className="text-white">
              {/* added responsive text sizes */}
              <h2 className="text-base md:text-lg leading-tight">
                Software Engineer , Google
              </h2>
              <p className="text-sm md:text-base font-thin">
                Sept 2023 - Present
              </p>
              <ul className="text-sm md:text-base p-2">
                <li>- Senior SDE-developer</li>
                <li>- Building Scalable web Applications</li>
                <li>- Work as software developer on core features</li>
              </ul>
            </span>
          </div>

          <div className="flex flex-col md:flex-row gap-6 bg-slate-950 bg-opacity-45 mt-4 rounded-lg p-4 items-start md:items-center">
            <FaAmazon color="#FF9900" size={70} />
            <span className="text-white">
              {/* added responsive text sizes */}
              <h2 className="text-base md:text-lg leading-tight">
                Software Engineer, Amazon
              </h2>
              <p className="text-sm md:text-base font-thin">
                Sept 2023 - Present
              </p>
              <ul className="text-sm md:text-base p-2">
                <li>- Work as software developer.</li>
                <li>- Senior SDE-developer</li>
                <li>- Turning Ideas into functional Projects</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
