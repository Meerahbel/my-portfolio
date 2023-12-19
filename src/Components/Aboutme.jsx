import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Aboutme = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="bg-blue-600 py-20 px-5 md:px-40 text-white">
      <h1
        className="text-2xl md:text-3xl font-semibold"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        Hey, there! I’m a passionate and innovative Frontend Developer with a
        keen eye for design and a commitment to crafting engaging and responsive
        user interfaces.
      </h1>
      <button className="border-2 border-white px-3 py-1 mt-10">
        More About Me
      </button>
    </section>
  );
};

export default Aboutme;
