import React, { useState } from "react";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";

const Project = ({ item }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardHover = (isHovered) => {
    setIsFlipped(isHovered);
  };

  return (
    <div key={item.id} className="flex flex-col items-center text-center">
      <div
        className={`flip-card relative mb-5 ${isFlipped ? "flipped" : ""}`}
        onMouseEnter={() => handleCardHover(true)}
        onMouseLeave={() => handleCardHover(false)}
      >
        <div className="flip-card-inner">
          <div className="flip-card-front">
            {/* Front content */}
            <img className="rounded-2xl front-image" src={item.image} alt="" />
          </div>
          {/* Back content */}
          <div className="flip-card-back rounded-xl">
            <p>{item.about}</p>
            <div className="icons">
              <a href={item.gitHubLink} target="_blank" rel="noreferrer">
                <FiGithub className="github hover:text-accent" />
              </a>
              <a href={item.portfolioLink} target="_blank" rel="noreferrer">
                <AiOutlineLink className="link hover:text-accent" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="mb-3 text-sm capitalize text-accent">{item.category}</p>
      <h3 className="mb-3 text-2xl font-semibold capitalize">{item.name}</h3>
    </div>
  );
};

export default Project;
