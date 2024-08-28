import React from "react";
import Navbar from "../Navbar";
import Carousel from "react-multi-carousel";
import pic from "../../assets/DSC_4107.JPG";
import picv from "../../assets/DSC_4112.JPG";
import picv1 from "../../assets/DSC_4113.JPG";
import picv2 from "../../assets/DSC_4129.JPG";
import picv3 from "../../assets/DSC_4130.JPG";
import "react-multi-carousel/lib/styles.css";
import Marquee from "react-fast-marquee";
import Footer from "../Footer";
import rev from "../../assets/WhatsApp_Image_2024-08-28_at_04.38.29_01bba680-removebg-preview.png";


const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // optional, default to 1.
    },
  };
  return (
    <div className="">
      <Navbar />
      <div className="mt-[65px]">
      <Carousel
        swipeable={true}
        draggable={true}
        rtl={true}
        // autoPlay={true}
        showDots={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1500}
        customTransition="all 20s linear"
        keyBoardControl={true}
        transitionDuration={5000}
        containerclassName="carousel-container"
        // removeArrowOnDeviceType={[
        //   "desktop",
        //   "tablet",
        //   "mobile",
        // ]}
        dotListclassName="custom-dot-list-style"
        itemclassName="carousel-item-padding-40-px"
        className="rounded-[7px]"
      >
        <div className="mr-3 ">
          <img className=" " src={pic} alt="/" />
        </div>

        <div className="mr-3 ">
          <img className="" src={picv} alt="/" />
        </div>

        <div className="mr-3 ">
          <img className="" src={picv1} alt="/" />
        </div>
        <div className="mr-3 ">
          <img className=" " src={picv2} alt="/" />
        </div>
        <div className="mr-3 ">
          <img className=" " src={picv3} alt="/" />
        </div>
      </Carousel>
      </div>
      <div className="flex justify-center max-w-screen-xl  px-8 lg:px-14  pb-8 mx-auto ">
        <div>
          <h4 className="text-[#801515] text-center pt-6 pb-3 md:py-20 text-[20px] md:text-[30px] font-[700]">
            WELCOME TO CHURCH OF THE NATIVITY, CONACPARKVIEW
          </h4>

{/* for large screen */}
          <div className="md:grid hidden md:grid-cols-12 gap-12">
            <div className="col-span-4 ">
             <div className="flex justify-center text-center">
              <img className="flex justify-center text-center" src={rev} alt="/" />
              </div>
              <div className="flex mt-2 justify-center">
<i className="text-[20px] font-[600]">Ven. Abiodun O. Popoola</i>

              </div>
              <div className="flex justify-center">
<i className="text-[14px]">Vicar</i>

              </div>
               </div>
            <div className="col-span-8">
              <div className="flex flex-col gap">
                <h4 className="font-[600] text-[35px] ">You are Welcome</h4>
                <h3 className="text-[14px] font-normal">
                  Church of the Nativity, Parkview Estate, Ikoyi is a Parish in
                  the Anglican Diocese of Lagos under the leadership of our dear
                  Father in the Lord, our Diocesan Bishop, Diocese of Lagos The
                  Right Revd. Gabriel Ifedola Okupevi with the 5-fold Mandate of
                  Priestly, Pastoral, Prophetic, Prayer and Praise Ministries as
                  we exist to Glorify God, edify believers and Multiply
                  disciples for the Lord Jesus Christ.
                  <br />
                  <br />
                  Kindly join us to worship God
                </h3>

                <div className="grid grid-cols-12 gap-4 py-7">
                  <div className="col-span-3">
                    <h4 className="text-[15px] font-[600]">Sunday</h4>
                  </div>
                  <div className="col-span-6">
                    <h5 className="text-sm">(Holy Communion Service)</h5>
                  </div>
                  <div className="col-span-3">
                    <h5 className="text-sm">7.30am</h5>
                  </div>

                  <div className="col-span-3 pt-3"></div>
                  <div className="col-span-6 pt-3">
                    <h5 className="text-sm">(Bible Study)</h5>
                  </div>
                  <div className="col-span-3 pt-3">
                    <h5 className="text-sm">9.00am</h5>
                  </div>

                  <div className="col-span-3  pt-3"></div>
                  <div className="col-span-6 pt-3">
                    <h5 className="text-sm">
                      (Holy Communion) 1st & 4th Sundays
                    </h5>
                  </div>
                  <div className="col-span-3 pt-3">
                    <h5 className="text-sm">11.00am</h5>
                  </div>

                  <div className="col-span-3 pt-3"></div>
                  <div className="col-span-6 pt-3">
                    <h5 className="text-sm">Mattins(2nd & 3rd Sundays)</h5>
                  </div>
                  <div className="col-span-3 pt-3">
                    <h5 className="text-sm"></h5>
                  </div>

                  <div className="col-span-3 pt-3"></div>
                  <div className="col-span-6 pt-3">
                    <h5 className="text-sm">
                      Testimony/Praise Sunday(5th Sunday of the month)
                    </h5>
                  </div>
                  <div className="col-span-3 pt-3">
                    <h5 className="text-sm"></h5>
                  </div>

                  <div className="col-span-3 pt-3">
<h4 className="text-[15px] font-[600]">Girls' Guild Meeting</h4>
</div>
<div className="col-span-6 pt-3">
<h5 className="text-sm">Every Other Sunday immediately after service</h5>
</div>
<div className="col-span-3 pt-3">
{/* <h5 className="text-sm">7.30am</h5> */}
</div>

<div className="col-span-3 pt-3">
<h4 className="text-[15px] font-[600]">Men's Fellowship</h4>
</div>
<div className="col-span-6 pt-3">
<h5 className="text-sm">Meets on the 2nd Sunday of the month, after service</h5>
</div>
<div className="col-span-3 pt-3">
{/* <h5 className="text-sm">7.30am</h5> */}
</div>

<div className="col-span-3 pt-3">
<h4 className="text-[15px] font-[600]">Tuesday:</h4>
</div>
<div className="col-span-6 pt-3">
<h5 className="text-sm">Choir Practice</h5>
</div>
<div className="col-span-3 pt-3">
<h5 className="text-sm">7.300pm</h5>
</div>

<div className="col-span-3 pt-3">
<h4 className="text-[15px] font-[600]">Wednesday:</h4>
</div>
<div className="col-span-6 pt-3">
<h5 className="text-sm">Every Other Sunday immediately after service</h5>
</div>
<div className="col-span-3 pt-3">
<h5 className="text-sm">7.00am</h5>
</div>


<div className="col-span-3 pt-3">
<h4 className="text-[15px] font-[600]"></h4>
</div>
<div className="col-span-6 pt-3">
<h5 className="text-sm">Mid day Prayer</h5>
</div>
<div className="col-span-3 pt-3">
<h5 className="text-sm">12noon</h5>
</div>

<div className="col-span-3 pt-3">
<h4 className="text-[15px] font-[600]"></h4>
</div>
<div className="col-span-6 pt-3">
<h5 className="text-sm">Parish Prayer Rain</h5>
</div>
<div className="col-span-3 pt-3">
<h5 className="text-sm">7.00pm</h5>
</div>


<div className="col-span-3 pt-3">
<h4 className="text-[15px] font-[600]">Thursday:</h4>
</div>
<div className="col-span-6 pt-3">
<h5 className="text-sm">Bible Study</h5>
</div>
<div className="col-span-3 pt-3">
<h5 className="text-sm">6.00pm</h5>
</div>

<div className="col-span-3 pt-3">
<h4 className="text-[15px] font-[600]">Friday:</h4>
</div>
<div className="col-span-6 pt-3">
<h5 className="text-sm">Vigil Holds last Friday of every month</h5>
</div>
<div className="col-span-3 pt-3">
<h5 className="text-sm">11.00pm</h5>
</div>


<div className="col-span-3 pt-3">
<h4 className="text-[15px] font-[600]">Saturday:</h4>
</div>
<div className="col-span-6 pt-3">
<h5 className="text-sm">Intercessory Ministry</h5>
</div>
<div className="col-span-3 pt-3">
<h5 className="text-sm">8.00am</h5>
</div>

<div className="col-span-3 pt-3">
<h4 className="text-[15px] font-[600]"></h4>
</div>
<div className="col-span-6 pt-3">
<h5 className="text-sm">Music Training for the Youth</h5>
</div>
<div className="col-span-3 pt-3">
<h5 className="text-sm">3.00pm</h5>
</div>


<div className="col-span-3 pt-3">
<h4 className="text-[15px] font-[600]"></h4>
</div>
<div className="col-span-6 pt-3">
<h5 className="text-sm">Youth Fellowship</h5>
</div>
<div className="col-span-3 pt-3">
<h5 className="text-sm">5.00pm</h5>
</div>

<div className="col-span-3 pt-3">
<h4 className="text-[15px] font-[600]"></h4>
</div>
<div className="col-span-6 pt-3">
<h5 className="text-sm">Band Rehearsal</h5>
</div>
<div className="col-span-3 pt-3">
<h5 className="text-sm">4.00pm</h5>
</div>

   </div>
   <i className="py-2">Prophetic Entrance into the New Month First 3 Days of the Month @ 6.00pm</i>
<h4>Visit.<a className="text-blue-700 pb-2" target="_blank" href="https://www.conacparkview.com/"> www.Conacparkview.com</a>, Facebook, Instagram & You Tube channels @conacparkview</h4>
             
<h3 className="text-[14px] pt-2 font-normal">
On behalf of our Diocesan, I am so delighted to invite you to a life-changing encounter with the Holy Spirit as we worship God together. By the grace of God, your prayer points will become praise points in Jesus Name. Amen.
Shalom.

                </h3>

                <h3 className="text-[14px] pt-2 font-[600]">The Venerable Olalekan Popoola</h3>
                <h3 className="text-[14px] ">Vicar</h3>
              </div>
            </div>
          </div>


          {/* for mobile screen */}
          <div className="block md:hidden ">
            <div className=" ">
             <div className="flex justify-center text-center">
              <img className="flex justify-center text-center" src={rev} alt="/" />
              </div>
              <div className="flex mt-2 justify-center">
<i className="text-[20px] font-[600]">Ven. Abiodun O. Popoola</i>

              </div>
              <div className="flex justify-center">
<i className="text-[14px]">Vicar</i>

              </div>
               </div>
            <div className="pt-4">
              <div className="flex flex-col gap">
                <h4 className="font-[600] text-center text-[25px] md:text-[35px] ">You are Welcome</h4>
                <h3 className="text-[14px] text-center font-normal">
                  Church of the Nativity, Parkview Estate, Ikoyi is a Parish in
                  the Anglican Diocese of Lagos under the leadership of our dear
                  Father in the Lord, our Diocesan Bishop, Diocese of Lagos The
                  Right Revd. Gabriel Ifedola Okupevi with the 5-fold Mandate of
                  Priestly, Pastoral, Prophetic, Prayer and Praise Ministries as
                  we exist to Glorify God, edify believers and Multiply
                  disciples for the Lord Jesus Christ.
                  <br />
                  <br />
                  Kindly join us to worship God
                </h3>

                <div className="grid grid-cols-12 gap-3 py-7">
                  <div className="col-span-3">
                    <h4 className="text-sm font-[600]">Sunday</h4>
                  </div>
                  <div className="col-span-6">
                    <h5 className="text-sm">(Holy Communion Service)</h5>
                  </div>
                  <div className="col-span-3">
                    <h5 className="text-sm">7.30am</h5>
                  </div>

                  <div className="col-span-3 pt-1"></div>
                  <div className="col-span-6 pt-1">
                    <h5 className="text-sm">(Bible Study)</h5>
                  </div>
                  <div className="col-span-3 pt-[0.5px]">
                    <h5 className="text-sm">9.00am</h5>
                  </div>

                  <div className="col-span-3  pt-1"></div>
                  <div className="col-span-6 pt-1">
                    <h5 className="text-sm">
                      (Holy Communion) 1st & 4th Sundays
                    </h5>
                  </div>
                  <div className="col-span-3 pt-1">
                    <h5 className="text-sm">11.00am</h5>
                  </div>

                  <div className="col-span-3 pt-1"></div>
                  <div className="col-span-6 pt-1">
                    <h5 className="text-sm">Mattins(2nd & 3rd Sundays)</h5>
                  </div>
                  <div className="col-span-3 pt-1">
                    <h5 className="text-sm"></h5>
                  </div>

                  <div className="col-span-3 pt-1"></div>
                  <div className="col-span-6 pt-1">
                    <h5 className="text-sm">
                      Testimony/Praise Sunday(5th Sunday of the month)
                    </h5>
                  </div>
                  <div className="col-span-3 pt-1">
                    <h5 className="text-sm"></h5>
                  </div>

                  <div className="col-span-3 pt-1">
<h4 className="text-sm font-[600]">Girls' Guild Meeting</h4>
</div>
<div className="col-span-6 pt-1">
<h5 className="text-sm">Every Other Sunday immediately after service</h5>
</div>
<div className="col-span-3 pt-1">
{/* <h5 className="text-sm">7.30am</h5> */}
</div>

<div className="col-span-3 pt-1">
<h4 className="text-sm font-[600]">Men's Fellowship</h4>
</div>
<div className="col-span-6 pt-1">
<h5 className="text-sm">Meets on the 2nd Sunday of the month, after service</h5>
</div>
<div className="col-span-3 pt-1">
{/* <h5 className="text-sm">7.30am</h5> */}
</div>

<div className="col-span-3 pt-1">
<h4 className="text-sm font-[600]">Tuesday:</h4>
</div>
<div className="col-span-6 pt-1">
<h5 className="text-sm">Choir Practice</h5>
</div>
<div className="col-span-3 pt-1">
<h5 className="text-sm">7.300pm</h5>
</div>

<div className="col-span-3 pt-1">
<h4 className="text-sm font-[600]">Wed:</h4>
</div>
<div className="col-span-6 pt-1">
<h5 className="text-sm">Every Other Sunday immediately after service</h5>
</div>
<div className="col-span-3 pt-1">
<h5 className="text-sm">7.00am</h5>
</div>


<div className="col-span-3 pt-1">
<h4 className="text-sm font-[600]"></h4>
</div>
<div className="col-span-6 pt-1">
<h5 className="text-sm">Mid day Prayer</h5>
</div>
<div className="col-span-3 pt-1">
<h5 className="text-sm">12noon</h5>
</div>

<div className="col-span-3 pt-1">
<h4 className="text-sm font-[600]"></h4>
</div>
<div className="col-span-6 pt-1">
<h5 className="text-sm">Parish Prayer Rain</h5>
</div>
<div className="col-span-3 pt-1">
<h5 className="text-sm">7.00pm</h5>
</div>


<div className="col-span-3 pt-1">
<h4 className="text-sm font-[600]">Thursday:</h4>
</div>
<div className="col-span-6 pt-1">
<h5 className="text-sm">Bible Study</h5>
</div>
<div className="col-span-3 pt-1">
<h5 className="text-sm">6.00pm</h5>
</div>

<div className="col-span-3 pt-1">
<h4 className="text-sm font-[600]">Friday:</h4>
</div>
<div className="col-span-6 pt-1">
<h5 className="text-sm">Vigil Holds last Friday of every month</h5>
</div>
<div className="col-span-3 pt-1">
<h5 className="text-sm">11.00pm</h5>
</div>


<div className="col-span-3 pt-1">
<h4 className="text-sm font-[600]">Saturday:</h4>
</div>
<div className="col-span-6 pt-1">
<h5 className="text-sm">Intercessory Ministry</h5>
</div>
<div className="col-span-3 pt-1">
<h5 className="text-sm">8.00am</h5>
</div>

<div className="col-span-3 pt-1">
<h4 className="text-sm font-[600]"></h4>
</div>
<div className="col-span-6 pt-1">
<h5 className="text-sm">Music Training for the Youth</h5>
</div>
<div className="col-span-3 pt-1">
<h5 className="text-sm">3.00pm</h5>
</div>


<div className="col-span-3 pt-1">
<h4 className="text-sm font-[600]"></h4>
</div>
<div className="col-span-6 pt-1">
<h5 className="text-sm">Youth Fellowship</h5>
</div>
<div className="col-span-3 pt-1">
<h5 className="text-sm">5.00pm</h5>
</div>

<div className="col-span-3 pt-1">
<h4 className="text-sm font-[600]"></h4>
</div>
<div className="col-span-6 pt-1">
<h5 className="text-sm">Band Rehearsal</h5>
</div>
<div className="col-span-3 pt-1">
<h5 className="text-sm">4.00pm</h5>
</div>

   </div>
   <i className="py-2 text-center">Prophetic Entrance into the New Month First 3 Days of the Month @ 6.00pm</i>
<h4 className="text-center">Visit.<a className="text-blue-700 pb-2" target="_blank" href="https://www.conacparkview.com/"> www.Conacparkview.com</a>, Facebook, Instagram & You Tube channels @conacparkview</h4>
             
<h3 className="text-[14px] pt-2 font-normal">
On behalf of our Diocesan, I am so delighted to invite you to a life-changing encounter with the Holy Spirit as we worship God together. By the grace of God, your prayer points will become praise points in Jesus Name. Amen.
Shalom.

                </h3>

                <h3 className="text-[14px] pt-2 font-[600]">The Venerable Olalekan Popoola</h3>
                <h3 className="text-[14px] ">Vicar</h3>
              </div>
            </div>
          </div>


        </div>
      </div>

       {/* <!-- Start block --> */}
<section className="bg-[#327397] py-16">
<div className="flex justify-center max-w-screen-xl  px-8 lg:px-14  pb-8 mx-auto ">
<div className="grid md:grid-cols-2 gap-10">
<div className="">
<h4 className="text-white text-[20px] font-[500] text-center ">UPCOMING EVENTS</h4>
<h4 className="text-white text-[14px] font-[400] text-center pt-3 pb-5">Join us in these events at Church of the Natitvity</h4>
<div className=" flex justify-center ">
{/* <iframe className="w-[70vw] md:w-[40vw] h-full aspect-video " src=""></iframe> */}
<iframe className="w-[70vw] md:w-[40vw] h-full aspect-video "  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FConacparkview%2Fvideos%2F2738560242988339%2F&show_text=false&width=560&t=0" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
</div>
</div>
<div className="">
<h4 className="text-white text-[20px] font-[500] text-center ">WATCH ONLINE</h4>
<h4 className="text-white text-[14px] font-[400] text-center pt-3 pb-5">Join all events and services LIVE on youtube</h4>
<div className="flex justify-center">

<iframe className="w-[70vw] md:w-[40vw] h-full aspect-video " src="https://www.youtube.com/embed/aJOWw1xEqKc?si=nmQdUXWP0sTezupy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
{/* <iframe className="block md:hidden" width="560" height="315" src="https://www.youtube.com/embed/aJOWw1xEqKc?si=nmQdUXWP0sTezupy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

</div>
</div>
</div>
</div>
</section>

        {/* <!-- End block --> */}


       {/* <!-- Start block --> */}

<section className="bg-white">
<div className="flex justify-center max-w-screen-xl  px-8 lg:px-14  pb-8 mx-auto">
<div className="">
 
<h4 className="text-[#801515] text-center pt-10  text-[30px] font-[700]">
          YEAR 2024 
          </h4>
          <h4 className="text-center text-[18px] py-7 font-light">THEME:</h4>
<h3 className="text-[20px] font-[400] text-center pb-7">“MY YEAR OF FULL RESTORATION (JOEL 2:25-26)”</h3>
<div className="flex justify-center text-center">
<h4 className="text-[14px] font-normal max-w-[800px] ">“So I will restore to you the years that the swarming locust has eaten,
the crawling locust, the consuming locust, and the chewing locust, My great army which I sent among you.  You shall eat in plenty and be satisfied, and praise the name of the Lord your God, Who has dealt wondrously with you; and My people shall never be put to shame.” - <b>Joel 2:25-26 NKJV</b></h4>
</div>

<h3 className="text-[20px] pt-10 font-[400] text-center pb-7">VESTRY INVOCATION</h3>
<div className="flex justify-center text-center">
<h4 className="text-[14px] font-normal max-w-[800px] ">
  We worship at thy holy feet and love to serve thee still, take thou our hearts, <br />our lips, our lives and mould them by thy will
</h4>
</div> 
</div>
</div>
</section>

<iframe className="w-full h-[305px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.462642693745!2d3.4497188999999997!3d6.4629224999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf48d72886035%3A0x8ca6631fe3d93d78!2sChurch%20Of%20The%20Nativity!5e0!3m2!1sen!2sng!4v1724797335365!5m2!1sen!2sng"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

{/* <!-- End block --> */}

<Footer />
    </div>
  );
};

export default Home;
