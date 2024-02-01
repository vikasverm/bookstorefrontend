import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Review from "../Routes/Review"
import ShowSlider from "../cotegory/ShowSlider";
function Home() {
  const [cont, setCont] = useState(0);

  let intervalId = null;

  const loopSlider = () => {
    intervalId = setInterval(() => {
      setCont((cont + 1) % 2);
    }, 8000);
  };

  const reinitLoop = (time) => {
    clearInterval(intervalId);
    setTimeout(loopSlider, time);
  };

  const sliderButton1 = () => {
    setCont(0);
    reinitLoop(6000);
  };

  const sliderButton2 = () => {
    setCont(1);
    reinitLoop(8000);
  };

  useEffect(() => {
    loopSlider();
    return () => clearInterval(intervalId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
    
      <div className="sliderAx h-auto">
        {cont === 0 && (
          <div id="slider-1" className="container mx-auto max-w-custom ">
            <div
              style={{ height: "600px" }}
              className="bg-cover  bg-center  text-white lg:mx-20   py-24 px-10 object-fill bg-[url('/src/component/img/wp2036903-books-wallpapers-modified.jpg')]"
            >
             <div className="lg:w-full mt-28 flex flex-col items-center">
  <h1 className="text-4xl font-bold tracking-tight animate-fade-in-down text-white sm:text-6xl text-center">
    Today a reader, tomorrow a leader.
  </h1>
  <p className="homedescription mt-6 font-bold text-lg leading-8 text-yellow-600 text-center">
    Books are mirrors: You only see in them what you already have inside you.
  </p>
  <div>
    <Link to="/Shopnow" className="animate-fade-in-left relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-600 via-purple-600 to-yellow-600"></span>
      <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
      <span className="relative text-white">Shop Now</span>
    </Link>
  </div>
</div>

            </div>
          </div>
        )}
        {cont === 1 && (
          <div id="slider-2" className="container mx-auto max-w-custom ">
            <div
              style={{ height: "600px" }}
              className="bg-cover bg-center h-dvh bg  text-white lg:mx-20 py-24 px-10 object-fill bg-[url('https://c1.wallpaperflare.com/path/1022/892/914/dark-table-lamp-spotlight-ea6612c84abff14c169c0e757e2227c3.jpg')]"
              >
           <div className="lg:w-full mt-28 flex flex-col items-center">
  <h1 className="text-4xl font-bold tracking-tight animate-fade-in-down text-white sm:text-6xl text-center">
    Today a reader, tomorrow a leader.
  </h1>
  <p className="homedescription mt-6 font-bold text-lg leading-8 text-yellow-600 text-center">
    Books are mirrors: You only see in them what you already have inside you.
  </p>
  <div>
    <Link to="/Shopnow" className="animate-fade-in-left relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-yellow-600 via-purple-600 to-yellow-600"></span>
      <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
      <span className="relative text-white">Shop Now</span>
    </Link>
  </div>
</div>

            </div>
          </div>
        )}

        <div className="justify-between w-20 mt-7 mx-auto  ">
          <button
            id="sButton1"
            onClick={sliderButton1}
            className={`bg-purple-400 rounded-full w-4 pb-2 ${
              cont === 0 ? "bg-yellow-600" : ""
            }`}
          />
          <button
            id="sButton2"
            onClick={sliderButton2}
            className={`bg-purple-400 rounded-full w-4 pb-2 ${
              cont === 1 ? "bg-yellow-600" : ""
            }`}
          />
          
        </div>
      </div>
      <ShowSlider/>
    <Review/>
      <Footer />
    </>
  );
}

export default Home;
