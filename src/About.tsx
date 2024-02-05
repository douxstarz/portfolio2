import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt } from "@fortawesome/free-brands-svg-icons";

function About() {
  return (
    <>
      <div className="flex flex-col items-center min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200 via-stone-100 to-rose-200 opacity-50" />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-80 p-4 bg-white shadow-lg rounded-3xl flex max-w-screen-lg items-center ">
          <nav>
            <ul className="flex space-x-4 font-urbanist font-bold text-2xl tracking-wider">
              <li>
                <Link to="/" className="hover:text-orange-300 mr-2">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-orange-300 mr-2">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-orange-300 mr-2">
                  Projects
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="relative translate-y-72 -mt-12 p-11 bg-white rounded-3xl shadow-lg flex items-center max-w-screen-lg">
          <div className=" text-center font-urbanist tracking-[.1em]">
            <h1 className="text-4xl font-bold">About Me</h1>

            <p className="mt-9 text-2xl text-left font-medium leading-8">
              Hi there! My name is Sophia Duong. <br /> A second year college
              student studying network security <br /> with a deep enthusiasm
              for design.
            </p>
            <p className="mt-9 text-xl text-right font-medium leading-8">
              I'm eager to take opportunities to learn new skills, <br />{" "}
              improve what I already know, and collaborate <br /> with my
              abilities in a creative environment.
            </p>
          </div>
        </div>
        <div className="relative translate-y-80 -translate-x-60 p-11 bg-white rounded-3xl shadow-lg items-center max-w-screen-lg">
          <h1 className="text-4xl font-bold font-urbanist">Coding Skills</h1>
          <div className="mt-5 space-x-5 ">
            <FontAwesomeIcon
              icon={faHtml5}
              size="4x"
              style={{ color: "#f46666" }}
            />
            <FontAwesomeIcon
              icon={faCss3Alt}
              size="4x"
              style={{ color: "#FFD43B" }}
            />
          </div>
        </div>

        <div className="relative translate-y-28 translate-x-56 p-11 bg-white rounded-3xl shadow-lg items-center max-w-screen-lg">
          <h1 className="text-4xl font-bold font-urbanist">Software Skills</h1>
        </div>
      </div>
    </>
  );
}

export default About;
