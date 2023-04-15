import React from "react";
import "../component/Navbar.css";
import { AiTwotoneHome } from "react-icons/ai";
import { BsFillBookFill } from "react-icons/bs";
import { FaAward } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";
function Nav() {
  return (
    <nav>
      <a href="/">
        <AiTwotoneHome />
      </a>
      <a href="#Project">
        <BsFillBookFill />
      </a>
      <a href="#Award">
        <FaAward />
      </a>
      {/* <a href="#Contact">
        <RiContactsBook2Fill />
      </a> */}
    </nav>
  );
}

export default Nav;
