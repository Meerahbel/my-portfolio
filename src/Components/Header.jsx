import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const handleMenu = () => {
    setDropdown((prev) => !prev);
  };

  return (
    <header className="flex justify-between pt-8 px-5">
      <p className="text-sm text-white tracking-widest">Mirabel Ugoji.</p>

      <div onClick={handleMenu}>
        <img
          src="/images/align-right.png"
          alt="hamburger menu"
          className="w-6 h-6"
        />
      </div>

      {dropdown && (
        <div className="absolute z-10 top-[70px] left-[50%] translate-x-[-50%]">
          <ul className="flex flex-col items-center gap-5 text-black/60 bg-white w-[50%] text-2xl font-medium">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact"> Contact</Link>
            </li>
          </ul>
          <div className="flex flex-col gap-10">
            <h1>Let's find solutions together?</h1>
            <p>
              Use my contacts below. You need to put a project on the move,
              let’s work on it!
            </p>
            <p>mirabelugoji@gmail.com</p>
            <button>Contact Me</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
