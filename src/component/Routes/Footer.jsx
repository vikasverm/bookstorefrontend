import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook,faHeart } from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
export default function Footer() {
  return (
    <section className="relative overflow-hidden py-10 mt-20 bg-black" >
    <div className="relative z-10 mx-auto max-w-7xl px-4">
      <div className="m-6 flex flex-wrap">
        <div className="w-full p-6 md:w-1/2 lg:w-5/12">
          <div className="flex h-full flex-col justify-between">
            <div className="mb-4 inline-flex items-center">
            <div className="flex flex-shrink-0 items-center">
          <FontAwesomeIcon className="h-8 w-auto pr-3 text-yellow-400" icon={faBook} beat />
        <span className="text-white font-bold">Book Point</span>
        </div>
            </div>
          
          </div>
        </div>
        <div className="w-full p-6 md:w-1/2 lg:w-2/12">
          <div className="h-full">
            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
              Company
            </h3>
            <ul>
              <li className="mb-4">
                <Link
                  className=" text-base font-medium text-white hover:text-yellow-400"
                  to="/Home"
                >
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className=" text-base font-medium text-white hover:text-yellow-400"
                  to="/FeatureAuthor"
                >
                 Author
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className=" text-base font-medium text-white hover:text-yellow-400"
                  to="/Genres"
                >
                 Genres
                </Link>
              </li>
              <li>
                <Link
                  className=" text-base font-medium text-white hover:text-yellow-400"
                  to="/Featured"
                >
                  Feature
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full p-6 md:w-1/2 lg:w-2/12">
          <div className="h-full">
            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
              Support
            </h3>
            <ul>
              <li className="mb-4">
                <Link
                  className=" text-base font-medium text-white hover:text-yellow-400"
                  to="#"
                >
                  Account
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className=" text-base font-medium text-white hover:text-yellow-400"
                  to="#"
                >
                  Help
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className=" text-base font-medium text-white hover:text-yellow-400"
                  to="#"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className=" text-base font-medium text-white hover:text-yellow-400"
                  to="#"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full p-6 md:w-1/2 lg:w-3/12">
          <div className="h-full">
            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
              Legals
            </h3>
            <ul>
              <li className="mb-4">
                <Link
                  className=" text-base font-medium text-white hover:text-yellow-400"
                  to="#"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  className=" text-base font-medium text-white hover:text-yellow-400"
                  to="#"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className=" text-base font-medium text-white hover:text-yellow-400"
                  to="#"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
             
         
           </div>
           
      </div>
    </div>
    <div className="flex justify-center">

          <p className="text-sm text-white ">
               © Copyright 2024. All Rights Reserved by <FontAwesomeIcon icon={faHeart} className="text-red-500"/> Vikku.
             </p>
          </div>
  </section>
  
  )
}
