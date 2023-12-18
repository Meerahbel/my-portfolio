import Desktopslider from "./Desktopslider";
import Mobileslider from "./Mobileslider";

const Imageslider = () => {
  return (
    <>
      <div className="hidden md:block">
        <Desktopslider />
      </div>
      <div className="md:hidden w-full pb-[50px]">
        <Mobileslider />
      </div>
    </>
  );
};

export default Imageslider;
