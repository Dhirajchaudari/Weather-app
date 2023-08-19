import React from "react";

// import navigation data
import { navigation } from "../data";

// import Link
import { Link } from "react-scroll";

const Nav = () => {
  return (
    <nav className="flex space-x-8 capitalize text-[15px]">
      {navigation.map((item, index) => {
        return (
          <li
            className="text-white list-none cursor-pointer hover:text-accent"
            key={index}
          >
            {/* activeClas="active" => when we click on that link it will stay active till that time and respective css stays active. */}
            <Link
              to={item.href}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="transition-all duration-300"
            >
              {item.name}
            </Link>
          </li>
        );
      })}
    </nav>
  );
};

export default Nav;
