import React from "react";
import delivery from "../img/delivery.png";
import herobg from "../img/heroBg.png";
import { heroData } from "../utils/data";

const HomeContainer = () => {
  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
      <div className="gap-6 py-2 flex-1 flex flex-col items-start justify-center">
        <div className="flex items-center gap-2 justify-center bg-orange-100 p-2 rounded-full px-4 py-1">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img
              src={delivery}
              className="w-full h-full object-contain"
              alt="delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.25rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in{" "}
          <span className="md:text-[5rem] text-orange-600 text-[3rem]">
            Your City
          </span>
        </p>
        <p className="md:w-[80%] text-base text-textColor text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
          impedit quod saepe nam corporis quidem, praesentium consequuntur
          labore autem nisi provident voluptate? Voluptas, accusamus officiis.
        </p>
        <button
          type="button"
          className="md:w-auto bg-gradient-to-br from-orange-400 to-orange-500 w-full p-4 px-4 py-2 rounded-lg hover: shadow-lg transition-all ease-in-out duration-100"
        >
          {" "}
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={herobg}
          className="lg:h-650  ml-auto h-420 w-full lg:w-auto"
          alt="hero-bg"
        />
        <div className="lg:px-32 w-full h-full absolute py-4 top-0 left-0 flex items-center justify-center gap-4 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="drop-shadow-lg lg:w-190 p-4 flex flex-col items-center justify-center bg-cardOverlay rounded-3xl backdrop-blur-md"
              >
                <img
                  src={n.imageSrc}
                  className="w-20 -mt-10 lg:w-40 lg:-mt-20"
                  alt="I1"
                />
                <p className="text-base lg:text-xl font-semibold mt-2 text-textColor lg:mt-4">
                  {n.name}
                </p>
                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold lg:my-3 my-1">
                  {n.description}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-xs text-red-600">$</span>
                  {n.price}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
