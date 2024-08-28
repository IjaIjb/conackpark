import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaHouseChimney } from "react-icons/fa6";
import logo from "../assets/Church_Logo_2-removebg-preview.png";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
  const [toggle, setToggle] = useState(false);




  return (
       <div>
     
      <nav class="bg-white fixed w-full z-20 top-0 left-0 shadow-md px-2 md:px-4 py-2 body-font font-poppins ">
        <div class="flex justify-between items-center md:justify-between w-full px-4 mx-auto lg:px-5">
          {/* <div className="flex justify-between"> */}
          <NavLink to="/" class="">
          <img className="w-14 h-14" src={logo} alt="/" />

          </NavLink>
          <div className=" md:order-2 pl-44 md:pl-1 pr-8 pt-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm  rounded-lg md:hidden  hover:bg-gray-100"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#1a3783"
                    d="M4 18q-.425 0-.713-.288T3 17q0-.425.288-.713T4 16h16q.425 0 .713.288T21 17q0 .425-.288.713T20 18H4Zm0-5q-.425 0-.713-.288T3 12q0-.425.288-.713T4 11h16q.425 0 .713.288T21 12q0 .425-.288.713T20 13H4Zm0-5q-.425 0-.713-.288T3 7q0-.425.288-.713T4 6h16q.425 0 .713.288T21 7q0 .425-.288.713T20 8H4Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#1db459"
                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
                  />
                </svg>
              )}
            </button>
          </div>
         
          <div
            className="items-center justify-between gap-10 hidden w-full md:flex md:w-auto "
            id="navbar-sticky"
          >
            <div className="flex flex-col mt-5 font-medium gap-6 items-center md:flex-row lg:space-x-3 lg:mt-3">
              <NavLink
                to="/"
                className=" py-1 px-2  text-sm text-center tracking-wider flex justify-center gap-2 items-center font-normal hover:font-semibold leading-5   "
                style={({ isActive }) =>
                  isActive
                    ? { color: "#ffffff", fontWeight: "600", backgroundColor: "#1a3783" }
                    : { color: "#ffffff" }
                }
              >
                <FaHouseChimney />
                Home
              </NavLink>

       
              <div
                className=" flex space-x-2 text-[#1a3783] py-2 pr-4  text-sm tracking-wider font-normal hover:font-semibold leading-5  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#3f71a8] lg:pb-5 "
                // style={({ isActive }) =>
                //   isActive
                //     ? { color: "#ffffff", fontWeight: "600", backgroundColor: "#0d1c43" }
                //     : { color: "#ffffff" }
                // }
              >
                Gift
              </div>
          
              <div
                className=" flex space-x-2 text-[#1a3783] py-2 pr-4 text-sm tracking-wider font-normal hover:font-semibold leading-5  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#3f71a8] lg:pb-5 "
                // style={({ isActive }) =>
                //   isActive
                //     ? { color: "#ffffff", fontWeight: "600", backgroundColor: "#0d1c43" }
                //     : { color: "#ffffff" }
                // }
              >
                About&nbsp;Us
              </div>
             
      

         

              {/* <NavLink
                to="/apply-loan"
                className=" flex space-x-2 py-2 pr-4 text-sm drop-shadow-2xl shadow-[#D7F5DC] tracking-wider font-bold hover:font-normal leading-5    lg:pb-5 "
                style={({ isActive }) =>
                  isActive ? { color: '#777777', fontWeight: "600" } : { color: '#777777' }
                }
              >
                Apply&nbsp;for&nbsp;Loan
              </NavLink> */}
            </div>
              {/* <div className="flex space-x-4 ">
                <NavLink to={"/sign-in"}>
                  <button
                    type="button"
                    class="hidden md:flex text-[#06C447]  border border-[#06C447] hover:bg-[#06C447] hover:text-[#ffffff] font-normal rounded-[5px] text-sm px-6 py-2 mr-2 mb-2 ease-in duration-500"
                  >
                    Login
                  </button>
                </NavLink>
                <NavLink to={"/terms"}>
                  <button
                    type="button"
                    class="hidden md:block text-[#ffffff] bg-[#06C447] border border-[#06C447] hover:bg-[#ffffff] hover:text-[#06C447] hover:opacity-80 font-normal rounded-[5px] text-sm px-6 py-2 mr-2 mb-2 ease-in duration-500"
                  >
                    Register
                  </button>
                </NavLink>
              </div> */}
          </div>
          <div className=""></div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-500 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-400 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              className="lg:hidden bg-white w-full pl-6 pr-4 h-screen mt-3"
              id="mobile-menu"
            >
              <div ref={ref} className=" pt-10 pb-3 space-y-1">
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(!isOpen)}
                  className="block text-[#616161] py-3 font-bold hover:bg-gray-100"
                >
                  Home
                </NavLink>
                <hr className="pb-3" />

            
                {/* <NavLink
                  to="/blog"
                  onClick={() => setIsOpen(!isOpen)}
                  className="block text-[#616161] py-3 font-medium hover:bg-gray-100"
                >
                  Blog
                </NavLink>

                <hr className="pb-3" /> */}

                {/* <NavLink
                  to="/contact-us"
                  onClick={() => setIsOpen(!isOpen)}
                  className="block text-[#616161] py-2 font-medium hover:bg-gray-100"
                >
                  Contact Us
                </NavLink> */}

                <NavLink
                  to="/about-us"
                  onClick={() => setIsOpen(!isOpen)}
                  className="block text-[#616161] py-2 font-medium hover:bg-gray-100"
                >
                  About Us
                </NavLink>
                <hr className="pb-3" />

       
                {/* <NavLink
                  to="/afripay"
                  onClick={() => setIsOpen(!isOpen)}
                  className="block text-[#616161] py-2 font-medium hover:bg-gray-100"
                >
                  Afripay
                </NavLink> */}
                {/* <NavLink
                  to="/apply-loan"
                  onClick={() => setIsOpen(!isOpen)}
                  className="block text-[#616161] py-2 font-medium hover:bg-gray-100"
                >
                  Apply for Loan
                </NavLink> */}
          
                  {/* <>
                    <div className="flex">
                      <NavLink
                        to={"/sign-in"}
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <button className="block px-8 py-3 mt-3  text-[#076D30] border border-[#076D30] font-medium rounded-lg text-sm   ">
                          Login
                        </button>
                      </NavLink>
                    </div>
                    <div className="flex">
                      <NavLink to={"/terms"} onClick={() => setIsOpen(!isOpen)}>
                        <button className="block px-8 py-3 mt-3  text-[#ffffff] bg-[#076D30] border border-[#076D30] font-semibold rounded-lg text-sm  ">
                          Register
                        </button>
                      </NavLink>
                    </div>
                  </> */}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  )
}

export default Navbar