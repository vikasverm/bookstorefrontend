import { Disclosure, Menu } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faBook,
  // faSun,
  // faMoon,
} from "@fortawesome/free-solid-svg-icons";
import SignOut from "../Sign/SignOut";
import { Link } from "react-router-dom";
const navigation = [
  { name: "Home", to: "/" },
  { name: "Author", to: "/FeatureAuthor", current: false },
  { name: "Genres", to: "/Genres", current: false },
  { name: "Feature", to: "Featured", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// eslint-disable-next-line react/prop-types
export default function Navbar({count}) {
  return (
    <>
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16  items-center justify-between">
              <div className="absolute inset-y-0  left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className=" flex-1 contents items-center justify-center sm:items-stretch sm:justify-start">
                
              <div className="flex relative flex-shrink-0 ml-12 items-center">
                  
                  <FontAwesomeIcon
                   className="h-8 w-auto pr-3 block  text-yellow-400"
                   icon={faBook}
                   beat
                 />
                 
                  <span className="text-black font-bold  text-md">
                    <span className=" text-2xl text-red-600 ">Bo</span>ok Point
                  </span>
                
                </div>
                </div>
                <div className="flex flex-1 items-center  justify-center sm:items-stretch ml-0 mr-12 ">
                <div className="flex flex-shrink-0 items-center ">
                <div className="hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current
                            ? " font-semibold"
                            : " text-yellow-600  hover:text-yellow-600 rounded-md  py-2 text-base font-medium b relative   block after:block after:content-[",
                          "] after:absolute after:h-[3px] after:bg-yellow-600 after:w-12 lg:text-base  after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left",
                          "rounded-md lg:px-3 sm:px-1 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2  sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <SignOut />

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-2">
                  <Link to="/CartList" className="relative flex rounded-ful lg:pl-4">
                    <div className="absolute text-center rounded-md w-4 h-4  bg-red-500 font-normal text-gray-200 leading-4 text-xs mx-6">{count}</div>
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="text-black text-2xl hover:text-yellow-600"
                    />
                  </Link>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden flex justify-center">
            <div className="space-y-1 px-2 pb-3 pt-2 ">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.to}
                  className={classNames(
                    item.current
                      ? " text-black font-semibold"
                      : " text-yellow-600  hover:text-yellow-600 rounded-md  py-2 text-base font-medium b relative   block after:block after:content-[",
                    "] after:absolute after:h-[3px] after:bg-yellow-600 after:w-12 after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left",
                    "rounded-md px-3 py-2 text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
          <hr />
</>
  );
}
