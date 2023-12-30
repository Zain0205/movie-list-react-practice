import React, { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [hamburgerActive, setHamburgerActive] = useState(false);

  const toggleHamburger = () => {
    setHamburgerActive(!hamburgerActive);
  };

  const hamburgerActiveClass = hamburgerActive ? "hamburger" : "";
  const showHamburgerMenu = hamburgerActive ? "" : "hidden";


  return (
    <>
      <header className="bg-white fixed border-b-[0.5px] z-20 border-black top-0 left-0 w-full flex justify-center items-center">
        <div className="container">
          <div
            className="flex px-4 justify-between
           items-center relative"
          >
            <div className="px-4 sm:px-20 md:px-28">
              <a href="#" className="font-bold text-lg block py-6">
                Movie List
              </a>
            </div>
            <div className="flex items-center px-10">
              <button onClick={toggleHamburger} id="humberger" name="humberger" type="button" className={`${hamburgerActiveClass} block absolute right-4 sm:right-[6rem] md:right-[8rem] lg:hidden`}>
                <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out origin-top-left"></span>
                <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out"></span>
                <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
              <nav className={`${showHamburgerMenu} absolute left-0 top-full animate-kedip lg:animate right-0 py-5 bg-white shadow-lg w-full lg:px-14 lg:block lg:static lg:bg-transparent lg:shadow-none lg:rounded-none lg:max-w-full`}>
                <ul className="block lg:flex">
                  <li className="group">
                    <Link to="/" className="text-base text-black py-2 mx-8 flex group-hover:text-lime-400">
                      Movies
                    </Link>
                  </li>
                  <li className="group">
                    <Link to='tv' className="text-base text-black py-2 mx-8 flex group-hover:text-lime-400">
                      Tv Series
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
