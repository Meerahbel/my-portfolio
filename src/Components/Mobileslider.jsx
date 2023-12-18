import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import { useState } from "react";
import slideshow from "../Data/slideshow.json";
import "../swiper-pagination.css";

export default function Mobileslider() {
  const [change, setChange] = useState(true);
  const [btn, setbtn] = useState(true);

  const handleSlideChange = () => {
    setChange(false);
    setbtn(false);
    setTimeout(() => {
      setChange(true);
    }, 500);
    setTimeout(() => {
      setbtn(true);
    }, 2500);
  };
  return (
    <Swiper
      effect="fade"
      // slidesPerView={1}
      // spaceBetween={30}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, EffectFade]}
      onSlideChange={handleSlideChange}
    >
      {slideshow?.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="w-full h-[650px] md:h-[500px] flex flex-col lg:flex-row mt-8 py-5 lg:py-20 px-5 md:px-40 bg-black">
              <div className="flex flex-col gap-5 lg:w-[30%] text-white">
                <h1 className="text-4xl font-semibold">{item?.title}</h1>
                <div className="flex gap-5">
                  <div className="w-1 h-6 bg-blue-600"></div>
                  <p className="font-bold">Web Development</p>
                </div>
                <p className="text-lg">{item?.subtitle}</p>
              </div>
              <img
                src={item?.image}
                alt="image-1"
                className="w-full h-[300px] object-cover lg:ml-5 mt-5 lg:mt-0"
              />
            </div>
            <button className="border-2 border-purple-800 absolute bottom-5 lg:bottom-10 right-[35%] lg:right-5 text-white px-3 py-1">
              See All Projects
            </button>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
