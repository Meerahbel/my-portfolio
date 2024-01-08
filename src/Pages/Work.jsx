import Workcard from "../Components/Workcard";
import Workheader from "../Components/Workheader";
import work from "../Data/work.json";

const Work = () => {
  return (
    <main>
      <Workheader />
      <div className="grid grid-cols-1 gap-10">
        {work?.map((item, index) => {
          return <Workcard key={index} item={item} index={index} />;
        })}
      </div>
    </main>
  );
};

export default Work;
