import React from "react";
import { Link } from "react-scroll";

import MyImg from '../assets/img/avatar.png'

const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container h-full mx-auto">
        <div className="flex items-center h-full pt-8">
          {/* left side */}
          <div className="flex flex-col items-center flex-1 lg:items-start">
            <p className="text-lg text-accent mb-[22px]">Hey, I'm Dhiraj 🖐</p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md-tracking-[-2px]">
              I Build & Design <br /> Web Interfaces. 
            </h1>
            <p className="pt-4 pd-8 md:pt-6 md:pb-12 mx-w-[480px] text-lg text-center lg:text-left">
              I create comprehensive and seamless web experiences, handling both
              frontend design and backend development to deliver fully
              functional and user-friendly web interfaces.
            </p>
            <button className="transition-all btn btn-md bg-accent hover:bg-accent-hover md:btn-lg">
              <Link to="contact" spy="true" smooth="true" offset={-70} duration={1000}> 
              Work with me.
              </Link>
            </button>
          </div>
          {/* Rigth side */}
          <div className="items-end justify-end flex-1 hidden h-full lg:flex">
            <img src={MyImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
