import Workcard from "../Components/Workcard";
import Workheader from "../Components/Workheader";
import work from "../Data/work.json";

const Work = () => {
  return (
    <main>
      <Workheader />
      {work?.map((item, index) => {
        return <Workcard key={index} item={item} index={index} />;
      })}
    </main>
  );
};

export default Work;
