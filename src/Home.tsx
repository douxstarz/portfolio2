import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-stone-100 to-rose-200 opacity-50" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-80 p-4 bg-white shadow-lg rounded-3xl flex max-w-screen-lg items-center ">
          <nav>
            <ul className="flex space-x-4 font-urbanist font-bold text-2xl tracking-wider">
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="mr-2 text-2xl"
                />
              </li>
              <li>
                <a href="#" className="hover:text-rose-200 mr-2">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-stone-300 mr-2">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-200 mr-2">
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="relative p-10 bg-white rounded-3xl shadow-lg flex items-center max-w-screen-lg">
          <img src="/images/AVITRANS - Copy.png" className="size-96" />
          <div className=" text-left font-urbanist font-medium tracking-[.1em]  ">
            <h1 className="text-7xl mb-3">Hello!</h1>
            <p className="text-7xl">I'm Sophia*</p>
            <p className="text-lg mt-5">I am a Student</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
