import Workcard from "../Components/Workcard";
import Workheader from "../Components/Workheader";
import work from "../Data/work.json";
import Footer from "../Components/Footer";

const Work = () => {
  return (
    <main>
      <Workheader />
      <div className="grid grid-cols-1 gap-10">
        {work?.map((item, index) => {
          return <Workcard key={index} item={item} index={index} />;
        })}
      </div>
      <Footer />
    </main>
  );
};

export default Work;
