import React, { useState } from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import { MdAccountCircle } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { RiCloseLine } from "react-icons/ri";
import { useRouter } from "next/router";


const Navbar = ({ user, logOut, key }) => {

  const router = useRouter();
  const path = router.pathname;

  const [menu, setMenu] = useState({ style: "invisible", animation: false });
  const [bar, setbar] = useState("invisible");

  const toggleBar = () => {
    if (bar == "invisible") {
      setbar("visible");
    } else {
      setbar("invisible");
    }
  };

  const toggle_menu = () => {
    if (menu.style == "invisible") {
      setMenu({ style: "visible", animation: true });
    } else {
      setMenu({ style: "invisible", animation: false });
    }
  };

  return (
    <>
      <div className="invisible md:visible text-gray-600 body-font fixed w-full z-50 bg-white shadow-md shadow-colour-main-blue-700">
        <div className="flex container mx-auto flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link className="no-underline" href={"/home"}>
              <div className="mr-5 font-bold-26 text-sm text-colour-main-blue-500 group">
                <li className={`${path == "/home"?"bg-colour-main-blue-800 text-white scale-95 -translate-y-1":"hover:scale-95 hover:-translate-y-1 duration-300 transition ease-in-out delay-100 group-hover:bg-colour-main-blue-800"} flex justify-center items-center rounded-xl py-2 px-4 group-hover:text-white text-colour-main-blue-500 text-sm font-bold-26 cursor-pointer relative`}>
                  Home
                  <hr className={`${path == "/home"?"scale-x-100":"scale-x-0 transition ease-in-out group-hover:scale-x-125 duration-300 delay-100"} bg-colour-main-blue-800 h-1 w-full absolute top-9`} />
                </li>
              </div>
            </Link>
            <Link className="no-underline" href={"/about"}>
              <div className="mr-5 hover:text-gray-900 font-bold-26 text-sm text-colour-main-blue-500 group">
                <li className={`${path == "/about"?"bg-colour-main-blue-800 text-white scale-95 -translate-y-1":"hover:scale-95 hover:-translate-y-1 duration-300 transition ease-in-out delay-100 group-hover:bg-colour-main-blue-800"} flex justify-center items-center rounded-xl py-2 px-4 group-hover:text-white text-colour-main-blue-500 text-sm font-bold-26 cursor-pointer relative`}>
                  About
                  <hr className={`${path == "/about"?"scale-x-100":"scale-x-0 transition ease-in-out group-hover:scale-x-125 duration-300 delay-100"} bg-colour-main-blue-800 h-1 w-full absolute top-9`} />
                </li>
              </div>
            </Link>
            <Link className="no-underline" href={"contact"}>
              <div className="mr-5 hover:text-gray-900 font-bold-26 text-sm text-colour-main-blue-500 group">
                <li className={`${path == "/contact"?"bg-colour-main-blue-800 text-white scale-95 -translate-y-1":"hover:scale-95 hover:-translate-y-1 duration-300 transition ease-in-out delay-100 group-hover:bg-colour-main-blue-800"} flex justify-center items-center rounded-xl py-2 px-4 group-hover:text-white text-colour-main-blue-500 text-sm font-bold-26 cursor-pointer relative`}>
                  Contact
                  <hr className={`${path == "/contact"?"scale-x-100":"scale-x-0 transition ease-in-out group-hover:scale-x-125 duration-300 delay-100"} bg-colour-main-blue-800 h-1 w-full absolute top-9`} />
                </li>
              </div>
            </Link>
            {user.value && (
              <Link className="no-underline" href={"/user"}>
                <div className="mr-5 hover:text-gray-900 font-bold-26 text-sm text-colour-main-blue-500 group">
                  <li className={`${path == "/user"?"bg-colour-main-blue-800 text-white scale-95 -translate-y-1":"hover:scale-95 hover:-translate-y-1 duration-300 transition ease-in-out delay-100 group-hover:bg-colour-main-blue-800"} flex justify-center items-center rounded-xl py-2 px-4 group-hover:text-white text-colour-main-blue-500 text-sm font-bold-26 cursor-pointer relative`}>
                    User
                    <hr className={`${path == "/user"?"scale-x-100":"scale-x-0 transition ease-in-out group-hover:scale-x-125 duration-300 delay-100"} bg-colour-main-blue-800 h-1 w-full absolute top-9`} />
                  </li>
                </div>
              </Link>
            )}
          </nav>
          <Link
            href={"/home"}
            className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0 no-underline"
          >
            <span className="ml-3 text-7xl font-black text-colour-logo-primary font-poppins">
              Trainore
            </span>
          </Link>

          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 gap-x-4">
            {!user.value && (
              <Link href={"/login"}>
                <button className="inline-flex justify-center items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-sm text-xs mt-4 md:mt-0 text-colour-secondary-white-100-general bg-colour-main-blue-800 font-medium cursor-pointer w-32 h-7 transition ease-in-out hover:scale-95 hover:bg-colour-main-blue-700 hover:text-white focus:scale-95 focus:text-white focus:bg-colour-main-blue-700">
                  Login
                </button>
              </Link>
            )}
            {!user.value && (
              <Link href={"/signup"}>
                <button className="inline-flex justify-center items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded-sm text-xs text-center mt-4 md:mt-0 text-colour-secondary-white-100-general bg-colour-main-blue-800 font-medium cursor-pointer w-32 h-7 transition ease-in-out hover:scale-95 hover:bg-colour-main-blue-700 hover:text-white focus:scale-95 focus:text-white focus:bg-colour-main-blue-700">
                  Signup
                </button>
              </Link>
            )}

            {user.value && (
              <MdAccountCircle
                onClick={toggle_menu}
                className="text-7xl text-colour-main-blue-800 hover:opacity-70"
              />
            )}
            <Fade when={menu.animation}>
              <div
                className={`${menu.style} flex flex-col absolute z-20 bg-white h-[1.5rem] w-32 border border-solid border-colour-main-blue-800 right-[3.5rem] top-[3.5rem] rounded-sm transition ease-in-out hover:scale-95 hover:bg-colour-main-blue-800 hover:text-white focus:scale-95 focus:text-white focus:bg-colour-main-blue-800 cursor-pointer`}
              >
                <button
                  onClick={() => {
                    toggle_menu();
                    logOut();
                  }}
                  className="h-full flex justify-center items-center text-center font-medium text-sm font-bold-26 text-colour-main-blue-700 hover:bg-colour-main-blue-800 hover:text-white rounded-sm transition ease-in-out hover:scale-95 focus:scale-95 focus:text-white focus:bg-colour-main-blue-700 cursor-pointer"
                >
                  Log out
                </button>
              </div>
            </Fade>
          </div>
        </div>

        
      </div>

      {/* Mobile menu */}
      <div className="visible md:invisible flex flex-row items-center justify-between h-16 w-full fixed z-50 bg-white shadow-md shadow-colour-main-blue-700">
      <Link
            href={"/home"}
            className="no-underline px-6"
          >
            <span className="flex items-center justify-center text-center text-7xl font-black text-colour-logo-primary font-poppins">
              Trainore
            </span>
          </Link>
        {bar == "invisible" ? 
        <TiThMenu onClick={toggleBar} className="text-center font-black text-7xl text-colour-main-blue-700 px-6"/>:
        <RiCloseLine onClick={toggleBar} className="text-center font-black text-7xl text-colour-main-blue-700 px-6"/>
        }

        <div className={`${bar} visible md:invisible h-auto w-full absolute top-[4.5rem] left-0 bg-white rounded-lg shadow-lg shadow-colour-main-blue-700 ${bar == 'invisible'?"transition ease-out duration-200 opacity-0 translate-y-1":"transition ease-in duration-600 opacity-100 translate-y-0"}`}>
          <div className="flex flex-col justify-center py-2 divide-solid divide-y-2 divide-colour-main-blue-800">

            <Link onClick={toggleBar} className="w-full flex items-center justify-center no-underline" href={'/home'}><span className="py-2 flex justify-center text-3xl text-colour-main-blue-800 font-black font-bold-26">Home</span></Link>
            <Link onClick={toggleBar} className="w-full flex items-center justify-center no-underline" href={'/about'}><span className="py-2 flex justify-center text-3xl text-colour-main-blue-800 font-black font-bold-26">About</span></Link>
            <Link onClick={toggleBar} className="w-full flex items-center justify-center no-underline" href={'/contact'}><span className="py-2 flex justify-center text-3xl text-colour-main-blue-800 font-black font-bold-26">Contact</span></Link>
            {user.value && (
            <Link onClick={toggleBar} className="w-full flex items-center justify-center no-underline" href={'/user'}><span className="py-2 flex justify-center text-3xl text-colour-main-blue-800 font-black font-bold-26">User</span></Link>
            )}
            {!user.value && (
            <Link onClick={toggleBar} className="w-full flex items-center justify-center no-underline" href={'/login'}><span className="py-2 flex justify-center text-3xl text-colour-main-blue-800 font-black font-bold-26">Login</span></Link>
            )}
            {!user.value && (
            <Link onClick={toggleBar} className="w-full flex items-center justify-center no-underline" href={'/signup'}><span className="py-2 flex justify-center text-3xl text-colour-main-blue-800 font-black font-bold-26">Signup</span></Link>
            )}
            {user.value && (
            <Link onClick={() => {
              logOut();
              setTimeout(() => {
                toggleBar();
              }, 500);
            }} className="w-full flex items-center justify-center no-underline" href={'/signup'}><span className="py-2 flex justify-center text-3xl text-colour-main-blue-800 font-black font-bold-26">Log out</span></Link>
            )}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Navbar;
