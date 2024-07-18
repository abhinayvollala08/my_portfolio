import logo from "../assets/nav.png"
import React, { useEffect } from 'react';
import About from "./About";
import { Link } from "react-scroll";

const Navbar = () => {

  return <div>
    <nav className="bg-white dark:bg-gray-900 backdrop-blur-sm fixed w-full z-20 top-0 start-0 border-b border-gray-900 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} className="flex items-center space-x-3 cursor-pointer">
          <img className="mx-1 w-12" src={logo} alt="Home" />
          <span className="self-center text-1xl font-semibold whitespace-nowrap dark:text-white ">Abhinay Vollala</span>
        </Link>

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8  md:flex-row md:mt-0 md:border-0 md:bg-dark dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
          <li>
            <Link to="hero" spy={true} smooth={true} offset={-100} duration={500} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer" ><a>Home</a></Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={500} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">About</Link>
          </li>
          <li>
            <Link to="qualification" spy={true} smooth={true} offset={-100} duration={500} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">Qualification</Link>
          </li>
          <li>
            <Link to="technologies" spy={true} smooth={true} offset={-100} duration={500} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">Skills</Link>
          </li>
          <li>
            <Link to="profiles" spy={true} smooth={true} offset={-100} duration={500} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">Profiles</Link>
          </li>
          <li>
            <Link to="projects" spy={true} smooth={true} offset={-100} duration={500} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">Projects</Link>
          </li>
          <li>
            <Link to="contacts" spy={true} smooth={true} offset={-100} duration={500} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 cursor-pointer">Contact</Link>
          </li>
        </ul>
        </div>
      </div>
    </nav>


  </div>

}

export default Navbar;
