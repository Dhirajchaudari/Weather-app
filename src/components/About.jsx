import React from "react";
import { ImCloudDownload } from "react-icons/im";
// import images
import Image from "../assets/img/about-me.jpg";
// import Image from "../assets/img/my_fairwell_party.jpg"
// import Image from "../assets/img/my_fairwell_pary_2.jpg"

const About = () => {
  const resumePath = "../resume.pdf";
  const handleClick = () => {
    console.log(resumePath);
  };
  return (
    <section className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col gap-24 xl:flex-row">
          <img
            className="object-cover h-full w-[466px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Dhiraj Chaudhari
              </h2>
              <p className="mb-4 text-accent">Full Stack Developer</p>
              <hr className="mb-8 opacity-5" />
              <p class="text-center text-lg text-gray-500 mb-4">
                🔥 A versatile full stack developer on a mission to turn
                concepts into captivating web experiences. My toolbox includes
                Data structures and algorithms, React, Next.js, Express,
                Tailwind, MongoDB, and I revel in coding both the frontend jazz
                and backend magic. I'm all about creative problem-solving and
                delivering results that speak code and design fluently. Ready to
                collaborate on your next project? Let's connect and make ideas
                happen! 🌟👨‍💻
              </p>
              <p class="text-center text-lg text-gray-500 mb-8">
                When I'm not immersed in code, you can find me exploring local
                eateries, playing chess. These experiences fuel my creativity
                and help me approach challenges from fresh perspectives. With an
                unwavering commitment to continuous learning, I stay current
                with industry trends to deliver modern, future-proof solutions.
                🍔♟️🎨
              </p>
            </div>
            <a href="resume.pdf" download="Dhiraj Resume.pdf">
              <button className="transition-all btn btn-md bg-accent hover:bg-accent-hover">Resume</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
