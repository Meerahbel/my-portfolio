import { useState } from "react";
import { Link } from "react-router-dom";

const Workheader = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleMenu = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <header className="flex justify-between pt-8 px-5">
      <p className="text-sm text-black font-medium tracking-widest">
        Mirabel Ugoji.
      </p>

      <div onClick={handleMenu}>
        <img
          src="/images/align-right(b).png"
          alt="hamburger menu"
          className="w-6 h-6"
        />
      </div>

      {dropdown && (
        <div className="flex flex-col fixed w-full top-0 left-0 min-h-[100vh] bg-blue-600 py-20 px-5 md:px-40 z-[999]">
          <div className="flex justify-between items-center px-5 absolute w-full top-10 lg:top-5 left-0">
            <p className="text-sm text-purple-800 font-bold tracking-widest">
              Mirabel Ugoji.
            </p>
            <div onClick={handleMenu}>
              <img
                src="/images/cancel2.png"
                alt="cancel icon"
                className="w-7 h-7"
              />
            </div>
          </div>
          <div className="flex mt-10 md:mt-0">
            <ul className="flex flex-col gap-8 md:gap-14 w-[50%] font-medium text-white">
              <li className="text-4xl font-semibold">
                <Link to="/">Home</Link>
              </li>
              <li className="text-4xl font-semibold">
                <Link to="/work">Work</Link>
              </li>
              <li className="text-4xl font-semibold">
                <Link to="/about">About</Link>
              </li>
              <li className="text-4xl font-semibold">
                <Link to="/contact"> Contact</Link>
              </li>
            </ul>
            <div className="lg:flex flex-col gap-10 hidden text-white">
              <h1 className="text-4xl font-bold w-[80%]">
                Let's find solutions together?
              </h1>
              <p className="w-[80%]">
                Use my contacts below. You need to put a project on the move,
                let’s work on it!
              </p>
              <p>mirabelugoji@gmail.com</p>
              <button className="border-2 border-white w-[30%] py-1">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Workheader;
