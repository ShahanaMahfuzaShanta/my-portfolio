import React from "react";
import Headings from "../../Component/Headings";
import ProgressBar from "@ramonak/react-progress-bar";

import "./Bar.css";

const Skills = () => {
  return (
    <>
      <div className="p-10 h-screen overflow-y-auto">
        <Headings heading="My Skills" sub_heading="My Skills"></Headings>
        <div className="w-[800px] mx-auto grid gap-8 text-gray-600">
          <div className="">
            <p className="mb-3">HTML</p>
            <ProgressBar
          animateOnRender={true}
            completed={85}
            bgColor="linear-gradient(to right, white , #f472b6)"  
          />
          </div>
          <div className="">
            <p className="mb-3">CSS</p>
            <ProgressBar
          animateOnRender={true}
            completed={80}
            bgColor="linear-gradient(to right, white , #f472b6)"  
          />
          </div>
          <div className="">
            <p className="mb-3">Bootstrap</p>
            <ProgressBar
          animateOnRender={true}
            completed={80}
            bgColor="linear-gradient(to right, white , #f472b6)"  
          />
          </div>
          <div className="">
            <p className="mb-3">Tailwind</p>
            <ProgressBar
          animateOnRender={true}
            completed={85}
            bgColor="linear-gradient(to right, white , #f472b6)"  
          />
          </div>
          <div className="">
            <p className="mb-3">DaisyUI</p>
            <ProgressBar
          animateOnRender={true}
            completed={80}
            bgColor="linear-gradient(to right, white , #f472b6)"  
          />
          </div>
          <div className="">
            <p className="mb-3">React JS</p>
            <ProgressBar
          animateOnRender={true}
            completed={70}
            bgColor="linear-gradient(to right, white , #f472b6)"  
          />
          </div>
          <div className="">
            <p className="mb-3">Node JS</p>
            <ProgressBar
          animateOnRender={true}
            completed={65}
            bgColor="linear-gradient(to right, white , #f472b6)"  
          />
          </div>
          <div className="">
            <p className="mb-3">MongoDB</p>
            <ProgressBar
          animateOnRender={true}
            completed={60}
            bgColor="linear-gradient(to right, white , #f472b6)"  
          />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
