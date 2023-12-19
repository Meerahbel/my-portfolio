import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <footer className="bg-black text-white py-20 px-5 md:px-40">
      <div className="flex flex-col lg:flex-row w-full gap-20 lg:gap-0">
        <div
          className="flex flex-col gap-10 lg:w-[50%] pr-5"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          <h1 className="text-3xl font-bold">
            Let's create something{" "}
            <span className="text-purple-800">together?</span>
          </h1>
          <button className="px-3 py-1 border-2 border-purple-800 w-[40%] md:w-[30%] lg:w-[40%] xl:w-[30%]">
            Contact Me
          </button>
        </div>
        <div
          className="flex flex-col gap-10 lg:w-[50%] lg:pl-5"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          <h1 className="text-3xl font-bold">
            You can find me on{" "}
            <span className="text-blue-600">social media:</span>
          </h1>
          <div className="flex flex-col gap-5 font-bold">
            <p>Linkedin</p>
            <p>Twitter</p>
            <p>Github</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-14 font-bold text-sm">
        <h3>Built by Mirabel</h3>
        <h3>Copyright © 2023 Mirabel Ugoji. All rights reserved.</h3>
      </div>
    </footer>
  );
};

export default Footer;
