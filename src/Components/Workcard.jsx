import React, { useState } from "react";
import "../Workcard.css";

const Workcard = ({ item, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
      className="flex flex-col gap-3 items-center my-10 w-fit mx-auto"
    >
      <img
        src={item?.image}
        alt="work image"
        className={`w-[400px] md:w-[550px] lg:w-[700px] h-[300px] md:h-[250px] lg:h-[300px] image ${
          isHovered ? "colored-image" : "bw-image"
        }`}
      />
      <p className="font-bold">{item?.title}</p>
    </div>
  );
};

export default Workcard;
