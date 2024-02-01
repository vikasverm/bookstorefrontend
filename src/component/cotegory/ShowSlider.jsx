import { useEffect } from "react";
import Glide from "@glidejs/glide";
import { ShowSlider1 } from "./Items";
import { Link } from "react-router-dom";
export default function ShowSlider() {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 4,
      autoplay: 3500,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <>
    <div className="bg-gray-200
 pb-10 mt-5">
      {/*<!-- Component: Carousel with controls outside --> */}
      <h1 className="flex justify-center  sm:text-sm md:text-md font-bold lg:text-4xl py-10 underline">
        OUR POPULAR BOOKS
      </h1>
      <div className="glide-04 relative w-full">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {ShowSlider1.map((data, index) => {
              return (
                <div key={index} className="relative aspect-[16/9]     w-auto rounded-md md:aspect-auto md:h-[430px] pb-10  flex flex-col items-center ">
                <li className="   transform transition duration-500  hover:scale-90 ">
                    <div className="m-auto rounded-xl  hover:shadow-yellow-400 bg-white p-8 shadow-2xl s h-96 w-80 max-w-full">
                    <img
                      src={data.url}
                      className="h-full w-full rounded-xl"
                    />
<div className="absolute left-3 top-3">
                        <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] block sm:text-xs font-bold tracking-wide text-white uppercase bg-yellow-400 rounded-full">
                          {data.Status}
                        </p>
                      </div>
                      
              </div>
                    <div className="flex justify-center mt-3">
                      <Link
                        to="Featured"
                        className="relative  px-5 py-2 font-medium text-white group"
                      >
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-yellow-500 group-hover:bg-yellow-700 group-hover:skew-x-12"></span>
                        <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-yellow-500 group-hover:-skew-x-12"></span>
                        <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-yellow-600 -rotate-12"></span>
                        <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-yellow-400 -rotate-12"></span>
                        <span className="relative">{data.name}</span>
                      </Link>
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        {/*    <!-- Controls --> */}
      </div>
      </div>
      {/*<!-- End Carousel with controls outside --> */}
    </>
  );
}
