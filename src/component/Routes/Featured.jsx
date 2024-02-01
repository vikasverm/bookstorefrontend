import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Glide from "@glidejs/glide";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import { books } from "../cotegory/Items";
import { featured } from "../cotegory/Items";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export default function Items({ addItem }) {
  const [range, setRange] = useState({ min: 0, max: 2000 });
  const [query, setQuery] = useState("");

  useEffect(() => {
    const slider = new Glide(".glide-06", {
      type: "carousel",
      focusAt: "center",
      perView: 5,
      autoplay: 2000,
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
  const handleRangeChange = (e) => {
    setRange({ ...range, [e.target.name]: Number(e.target.value) });
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const filteredData = books.filter(
    (item) =>
  
      item.price >= range.min &&
      item.price <= range.max &&
      item.name.toLowerCase().includes(query.toLowerCase())
   
  
  );
  return (
    <>
   
      
      <div className="glide-06 relative w-full">
        <div
          className="flex w-full items-center justify-center gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center    text-slate-700 transition duration-300 hover:border-slate-900  focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              className="w-9 h-9 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center    text-slate-700 transition duration-300 hover:border-slate-900  focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              className="w-9 h-9  text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </button>
        </div>
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {featured.map((data, index) => {
              return (
                <div key={index}>
                  <li>
                    <div className="relative aspect-[16/9]  hover:shadow-lg w-auto rounded-md md:aspect-auto md:h-[430px] pb-10  flex flex-col items-center bg-white">
                      <img src={data.url} className="w " />

                      <div className="absolute left-3 top-3">
                        <p className="sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] block sm:text-xs font-bold tracking-wide text-white uppercase bg-yellow-400 rounded-full">
                          {data.Status}
                        </p>
                      </div>
                      <div className="absolute right-3 top-3">
                        <button className="">
                          <FontAwesomeIcon
                            icon={faHeart}
                            className=" h-5 text-slate-400 hover:text-red-600"
                          />
                        </button>
                      </div>
                      <div className="absolute center  mt-48">
                        <div className=" w-full">
                          <div className="px-4 sm:px-8 max-w-5xl m-auto">
                            <div className="mx-auto inline-flex w-full justify-center">
                              <div className="group  max-w-max relative mx-1 flex flex-col items-center justify-center rounded-full  0 p-1  hover:text-gray-600">
                                <Link
                                  to="#_"
                                  className="relative text-sm px-5 py-1 font-medium text-white group"
                                >
                                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-yellow-500 group-hover:bg-yellow-500 group-hover:skew-x-12"></span>
                                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                                  <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                                  <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                                  <span className="relative ">Quick View</span>
                                </Link>
                                <div className=" absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden text-white group-hover:block w-auto">
                                  <div className="flex max-w-xs flex-col items-center">
                                    <div className="rounded bg-gray-900 p-2 w-60  text-sm text-center shadow-lg">
                                      {data.Description}
                                      <svg
                                        className="absolute left-0 top-full h-4 w-full text-black"
                                        x="0px"
                                        y="0px"
                                        viewBox="0 0 255 255"
                                        xmlSpace="preserve"
                                      >
                                        <polygon
                                          className="fill-current"
                                          points="0,0 127.5,127.5 255,0"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start h-28 justify-center  space-x-4">
                        <div>
                          <h3 className="text-sm font-bold text-gray-900 sm:text-sm md:text-base">
                            <p>
                              {data.name}
                              <span
                                className="absolute "
                                aria-hidden="true"
                              ></span>
                            </p>
                          </h3>
                          <div className="flex justify-center">
                            <svg
                              className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                              className="w-3 h-3 text-gray-300 sm:w-4 sm:h-4"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                          <p className="flex justify-center font-bold text-gray-900 sm:text-sm md:text-base">
                            ₹{data.price}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center mt-3">
                        <button
                          className="inline-flex overflow-hidden font-medium  text-sm text-md  text-center mr-2 mb-2  text-white bg-gray-900 rounded group"
                          onClick={() =>
                            addItem(
                              data,
                              data.name,
                              data.url,
                              data.Genres,
                              data.price
                            )
                          }
                        >
                          <span className="px-3.5 py-2 text-white bg-yellow-500 group-hover:bg-purple-600 flex items-center justify-center">
                            <svg
                              className="w-7 h-7"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                              ></path>
                            </svg>
                          </span>

                          <span className="pl-4 pr-5 py-2.5">Shop Now</span>
                        </button>
                      </div>
                    </div>
                  </li>
                </div>
              );
            })}
          </ul>
        </div>
        {/*    <!-- Controls --> */}
      </div>
      
      <h1 className=" flex justify-center pl-10 mt-10  font-bold tracking-tightn text-black sm:text-3xl">
        <span className=" border-b-4  flex justify-center ">Our Books</span>
      </h1>
      <div className="bg-red-800">
      <div className="flex justify-center pt-7   ">
        <div className="flex   ">
          
          <div className="w-1/2 ">
          
            <input
              type="range"
              name="min"
              min="0"
              max="2000"
              value={range.min}
              onChange={handleRangeChange}
              className="w-full h-2 bg-yellow-400 appearance-none "
            />
            <input
              type="range"
            
              name="max"

              min="0"
              max="2000"
              value={range.max}
              onChange={handleRangeChange}
              className="w-full h-2 bg-yellow-400 appearance-none"
            />
          </div>{" "}
          </div>{" "}
         
          <div className="flex  shadow-lg   rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid  place-items-center h-full w-12 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              onChange={handleSearch}
              value={query}
              className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search something.."
            />
            
          </div>
         
        </div>
<div className="flex justify-center text-yellow-400 font-bold"> <p>
          Price range:  ₹{range.min} -  ₹{range.max}
        </p></div>
    </div>
      <div
        className="overflow-hidden flex justify-center"
        data-glide-el="track"
      >
        <div className=" grid w-full  max-w-7xl space-y-4 px-2 py-10 md:grid-cols-2 md:gap-4 md:space-y-0 lg:grid-cols-5">
          {filteredData.length > 0 ? (filteredData.map((data, index) => {
            return (
              <div
                className="rounded-md border bg-white shadow-md "
                key={index}
              >
                <div className=" right-3 flex   p-2 justify-end  ">
                  <button className="">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className=" h-5 text-slate-400 hover:text-red-600"
                    />
                  </button>
                </div>
                <div className=" absolute   justify-end sm:px-3 sm:py-1.5 px-1.5 py-1 text-[8px] block sm:text-xs font-bold tracking-wide text-white uppercase bg-yellow-400 rounded-full  ">
                  {data.Genres}
                </div>
                <div className=" absolute flex center ml-5 mt-28  ">
                  <div className=" w-full ">
                    <div className="px-4 sm:px-8 max-w-5xl m-auto">
                      <div className="mx-auto inline-flex w-full justify-center">
                        <div className="group  max-w-max relative mx-1 flex flex-col items-center justify-center rounded-full  0 p-1  hover:text-gray-600">
                          <Link
                            to="#_"
                            className=" relative text-sm px-5 py-1 font-medium text-white group"
                          >
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-yellow-500 group-hover:bg-yellow-500 group-hover:skew-x-12"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-purple-700 group-hover:bg-purple-500 group-hover:-skew-x-12"></span>
                            <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-purple-600 -rotate-12"></span>
                            <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-purple-400 -rotate-12"></span>
                            <span className="relative ">Quick View</span>
                          </Link>
                          <div className=" absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden text-white group-hover:block w-auto">
                            <div className="flex max-w-xs flex-col items-center">
                              <div className="rounded bg-gray-900 p-2 w-60  text-sm text-center shadow-lg">
                                {data.Description}
                                <svg
                                  className="absolute left-0 top-full h-4 w-full text-black"
                                  x="0px"
                                  y="0px"
                                  viewBox="0 0 255 255"
                                  xmlSpace="preserve"
                                >
                                  <polygon
                                    className="fill-current"
                                    points="0,0 127.5,127.5 255,0"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  src={data.url}
                  alt="Laptop"
                  className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] px-8 lg:h-[250px]"
                />

                <div className="h-24  ">
                  <h1 className=" items-center py-3 justify-center flex text-sm font-semibold">
                    {data.name}
                  </h1>

                  <div className="flex justify-center mt-2.5 space-x-px">
                    <svg
                      className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-3 h-3 text-yellow-400 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      className="w-3 h-3 text-gray-300 sm:w-4 sm:h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div className="flex justify-center font-bold">
                    ₹{data.price}
                  </div>
                </div>

                <div>
                  <div className="flex justify-center">
                    <button
                      className="inline-flex overflow-hidden font-medium  text-sm text-md  text-center mr-2 mb-2  text-white bg-gray-900 rounded group"
                      onClick={() =>
                        addItem(
                          data,
                          data.name,
                          data.url,
                          data.Genres,
                          data.price
                        )
                      }
                    >
                      <span className="px-3.5 py-2 text-white bg-yellow-500 group-hover:bg-purple-600 flex items-center justify-center">
                        <svg
                          className="w-7 h-7"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          ></path>
                        </svg>
                      </span>

                      <span className="pl-4 pr-5 py-2.5">Shop Now</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })): query && <div className="h-8">No items found for {query}</div>}
        </div>
      </div>

      <Footer />

      {/*<!-- End Carousel with controls outside --> */}
    </>
  );
}
