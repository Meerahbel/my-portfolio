import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Qualities = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="flex flex-col bg-white py-20 px-5 md:px-40">
      <h1
        className="text-3xl font-semibold mb-10"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="300"
      >
        Here is what I can do:
      </h1>
      <div className="grid lg:grid-cols-2 gap-10">
        <div
          className="flex flex-col gap-2 text-lg"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          <h1 className="text-purple-800 font-semibold">UI/UX Development</h1>
          <p>
            Designing and implementing user-centric interfaces that blend
            functionality with aesthetics for optimal user engagement.
          </p>
        </div>
        <div
          className="flex flex-col gap-2 text-lg"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          <h1 className="text-purple-800 font-semibold">
            Responsive Web Development
          </h1>
          <p>
            Creating websites and applications that adapt flawlessly across
            various devices, ensuring a consistent user experience.
          </p>
        </div>
        <div
          className="flex flex-col gap-2 text-lg"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          <h1 className="text-purple-800 font-semibold">
            JavaScript Expertise
          </h1>
          <p>
            Leveraging advanced JavaScript techniques to build interactive and
            dynamic frontend solutions.
          </p>
        </div>
        <div
          className="flex flex-col gap-2 text-lg"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="300"
        >
          <h1 className="text-purple-800 font-semibold">Team Collaboration</h1>
          <p>
            Collaborating effectively with cross-functional teams, fostering
            innovation, and delivering high-quality frontend solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Qualities;
