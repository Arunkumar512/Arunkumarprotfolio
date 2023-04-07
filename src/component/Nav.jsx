import React from "react";
import "../component/Navbar.css";
import {AiTwotoneHome} from 'react-icons/ai';
import {BsFillBookFill} from 'react-icons/bs';
import {FaAward} from 'react-icons/fa';
import {RiContactsBook2Fill} from 'react-icons/ri';

function Nav() {
  return (
    <nav>
<a href="home"><AiTwotoneHome/></a>
<a href=""><BsFillBookFill/></a>
<a href=""><FaAward/></a>
<a href=""><RiContactsBook2Fill/></a>
    </nav>
  );
}

export default Nav;
