import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  const date = new Date();

  return (
    <>
      <div className="bg-[#1a3783] pt-10">
        <div className="max-w-screen-xl  px-5 lg:px-14  pb-8 mx-auto ">
          <div className="md:flex justify-evenly ">
            <div className="text-start md:mb-0 mb-10">
              <h3 className="text-white text-[16px] font-[600] pb-5 ">
CHURCH OF THE NATIVITY
              </h3>
              <div className="flex flex-col text-white gap-3">
                <div className="flex gap-2">
                  <IoLocationSharp />
                  <h6 className="text-[12px] max-w-[300px]">
                   Diocese of Lagos (Anglican Communion) Church Of The Nativity, Parkview Estate, Ikoyi, Lagos.
                  </h6>
                </div>

                <div className="flex gap-2">
  <IoCall />
  <a href="tel:+2348034769466" className="text-[12px]">
    0803 4769 466
  </a>
</div>

                <div className="flex gap-2">
                <MdEmail />
                  <a href="mailto:churchofdnativity@gmail.com" className="text-[12px]">churchofdnativity@gmail.com</a>
                </div>
              </div>

              <div>
                <h3 className="text-white text-[16px] mt-7 font-[600] pb-3 ">
                  SOCIAL LINKS
                </h3>

                <div className="flex gap-1">
               {/* <a href="https://x.com/osctbs" title="Twitter (deprecated)" class="wpex-twitter wpex-social-btn wpex-social-btn-flat wpex-social-bg" rel="noopener noreferrer" target="_blank"><span class="wpex-svg-icon" aria-hidden="true"><svg height="20" width="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg></span><span class="screen-reader-text">Twitter (deprecated)</span></a> */}
             <a target="_blak" href="https://www.youtube.com/conacparkview"> 
               <FaYoutube className="w-7 h-7 text-white" /> 
               </a>
               <a target="_blak" href="https://www.instagram.com/conacparkview"> 
               <FaSquareInstagram className="w-7 h-7 text-white"/>
               </a>
               <a target="_blak" href="https://web.facebook.com/Conacparkview"> 
<FaFacebookSquare className="w-7 h-7 text-white"/>
               </a>
               <a target="_blak" href="https://x.com/Conacparkview"> 
               <FaSquareXTwitter className="w-7 h-7 text-white"/> 
               </a>
                </div>
              </div>
            </div>

            <div className="md:text-start md:mb-0 mb-10">
              <h3 className="text-white text-[16px] font-[600] pb-5 ">
                WEEKLY MEETINGS
              </h3>
              <div className="flex flex-col ">
                <h3 className="text-white text-[14px] font-[600]  ">SUNDAYS:</h3>

                <h6 className="text-[12px] text-white mt-1">
                  7am – Holy Communion Service
                </h6>
                <h6 className="text-[12px] text-white mt-1">
                  9am – Bible Study
                </h6>
                <h6 className="text-[12px] text-white mt-1">
                  10am – (Holy Communion) 1st & 4th Sundays
                </h6>
                <h6 className="text-[12px] text-white mt-1">
                Mattins (2nd & 3rd Sundays)
                </h6>
                <h6 className="text-[12px] text-white mt-1">
                Testimony/Praise Sunday (5th Sunday of the month)
                </h6>
             
                <h3 className="text-white text-[12px] mt-1 font-[600]">
                Girls’ Guild Meeting:
                </h3>
                <h6 className="text-white text-[12px] mt-1">
                Every other Sunday immediately after service
                </h6>
                <h3 className="text-white text-[12px] mt-1 font-[600]">
                Men's Fellowship:
                </h3>
                <h6 className="text-white text-[12px] mt-1">
                Meets on the 2nd Sunday of the month, after service
                </h6>
              </div>
            </div>

            <div className="text-start">
              <h3 className="text-white text-[16px] font-[600] pb-5 ">
            MORE
              </h3>
              <div className="flex flex-col ">
                {/* <h3 className="text-white text-[12px] font-[600]  ">SUNDAYS</h3> */}

                <h3 className="text-white text-[12px] mt-1 font-[600]">
              TUESDAYS:
                </h3>
                <h6 className="text-[12px] text-white mt-1 ">
                  7am – Choir Practice	
                </h6>
                <h3 className="text-white text-[12px] mt-1 font-[600]">
                WEDNESDAY:
                </h3>
                <h6 className="text-[12px] text-white mt-1 ">
                  7am – Holy Communion Service
                </h6> 
                 <h6 className="text-[12px] text-white mt-1 ">
                  12noon – Mid day Prayer	
                </h6>
                <h6 className="text-[12px] text-white mt-1 ">
                  6pm – Parish Prayer Rain
                </h6>

                <h3 className="text-white text-[12px] mt-1 font-[600]">
                THURSDAYS:
                </h3>
                <h6 className="text-[12px] text-white mt-1 ">
                  6pm – Bible Study	
                </h6>
                <h3 className="text-white text-[12px] mt-1 font-[600]">
                FRIDAYS:
                </h3>
                <h6 className="text-[12px] text-white mt-1 ">
                  11pm – Vigil Holds last Friday of every month	
                </h6>

                <h3 className="text-white text-[12px] mt-1 font-[600]">
                SATURDAYS:
                </h3>
                <h6 className="text-[12px] text-white mt-1 ">
                  8am – Intercessory Ministry	
                </h6>
                <h6 className="text-[12px] text-white mt-1 ">
                  3pm – Music Training for the Youth	
                </h6>
                <h6 className="text-[12px] text-white mt-1 ">
                  5pm – Youth Fellowship
                </h6>
                <h6 className="text-[12px] text-white mt-1 ">
                  4pm – Band Rehearsal		
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0D1C43] py-[15px]">
        <div>
          <h6 className="text-center text-[#DBDBDB]">
            Copyright &copy; {date.getFullYear()} Church of the Nativity All
            Rights Reserved.
          </h6>
          {/* <h6 className="text-center text-[#DBDBDB]">
            Website designed by{" "}
            <a target="_blank" href="http://www.linkedin.com/in/joseph-ijaola">
              IJB
            </a>
          </h6> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
