import "./Banner.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div id="banner-part" className="py-5 bg-[#FF4747]">
      <div className="banner-container flex  gap-1">
        <div className="banner-left w-[297px] h-[301px] bg-[#E7E8EC] rounded-[15px]">
          <div className="banner-text pt-3 ps-2">
            <p className="py-1"> Women and general fashion</p>
            <p className="py-1">Watch’s Bags & Jewellery</p>
            <p className="py-1">Kid’s & Men’s Fashion</p>
            <p className="py-1">Kitchen Products</p>
            <p className="py-1">Household & Outdoor</p>
            <p className="py-1">TC & Home Appliences</p>
            <p className="py-1">Electronic Accessories </p>
            <p>Gadget & Accessories</p>
          </div>
        </div>
        <div className="banner-right w-[770px] h-[301px] bg-orange-400">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <img
                className="h-[301px] w-full"
                src="/src/assets/banner (2).jpg"
                alt="banner"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-[301px] w-full"
                src="/src/assets/banner3.jpg"
                alt="banner"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-[301px] w-full"
                src="/src/assets/banner3.jpg"
                alt="banner"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="h-[301px] w-full"
                src="/src/assets/banner3.jpg"
                alt="banner"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;



