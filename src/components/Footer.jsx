import React from "react";

// import social data
import { social } from "../data";


const Footer = () => {
  return (
    <footer className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          {/* social icons  */}
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="text-accent text-base" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>

          {/* logo  */}
          <div>
            <h1 className="font-dancing-script text-4xl">Dhiraj Chaudhari</h1>
          </div>

          {/* copy  */}
          <p>&copy; 2023 Dhiraj Chaudhari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
