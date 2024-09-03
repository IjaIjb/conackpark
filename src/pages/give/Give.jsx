import React from 'react'
import Navbar from '../Navbar'
import whitec from '../../assets/DSC_4112.JPG'
import Footer from '../Footer'
const Give = () => {
  return (
    <div>
        <Navbar />
        <div className="w-full relative z-10 h-full  overflow-hidden ">
        <div className="absolute z-10 object-cover w-full h-full">
          <img className="h-full object-cover  w-full" src={whitec} alt="/" />
          <div className="overlay absolute inset-0 bg-[#283f68] opacity-50"></div>
        </div>
        <div className="flex justify-center text-center relative z-20 h-full md:py-[150px] py-[130px] w-full items-center ">
          <h2 className="text-white leading-[33px] md:leading-[45px] text-[26px] md:text-[35px] font-[600]">
          Give
          </h2>
        </div>
      </div>



      <div>
        <div className='flex  max-w-screen-xl  px-8 lg:px-14  pb-8 mx-auto'>
       <div className='pt-10'>
        <h4 className="text-[#801515]  pt-6  text-[18px] md:text-[24px] font-[500]">
           E-PAYMENTS DETAILS
          </h4>
<h4 className='text-[17px] '>As you are led by God to make E-Payments into the Church Accounts, kindly use the following:</h4>

<div className=' flex flex-col  gap-4 md:gap-9'>
<div className='mt-5 md:mt-10'>
<h5 className='text-[17px] font-[500]'>Church Hall/Advert/Family Thanksgiving</h5>
<h5 className='text-[16px]'> Zenith Bank - Account No: 1014752752</h5>
</div>

<div className=''>
<h5 className='text-[17px] font-[500]'> Youth/Childred & Adult Harvest</h5>
<h5 className='text-[16px]'>  Zenith Bank - Account no: 1217130076</h5>
</div>

<div className=''>
<h5 className='text-[19px] font-[500]'> Church Project</h5>
<h5 className='text-[16px]'>  Zenith Bank - Account No: 1221320829</h5>
<h5 className='text-[16px]'>  FBN Plc - Account No: 2017447470</h5>
</div>

<div className=''>
<h5 className='text-[17px] font-[500]'> Offertory/Collection/Seed of Faith/Thanksgiving & Others</h5>
<h5 className='text-[16px]'> FCMB (1) Account No: 0133762014</h5>
</div>

<div className=''>
<h5 className='text-[17px] font-[500]'> Church of the Nativity Mercy Home</h5>
<h5 className='text-[16px]'>  FCMB (2) Account No: 0133762052</h5>
</div>

<div className=''>
<h5 className='text-[17px] font-[500]'>  Tithe</h5>
<h5 className='text-[16px]'>  Ecobank - Account No: 3483060540</h5>
</div>

<div className=''>
<h5 className='text-[17px] font-[500]'> Domiciliary </h5>
<h5 className='text-[16px]'>
(Pounds)- FCMB - Account No: 0133762038
</h5>
<h5 className='text-[16px]'>

   (Dollars)- FCMB - Account No: 0133762021
</h5>

<h5 className='text-[16px]'>

   (Dollars)- FBN - Account No: 2017818320
   </h5>
   <h5 className='text-[16px]'>

   (Euro)- FCMB - Account No: 0133762045

   </h5>
   </div>

   <div className=''>
<h5 className='text-[17px] font-[500]'>Church of the Nativity Youth Empowerment</h5>
<h5 className='text-[16px]'>   FBN Plc - Account No: 2044916604</h5>
</div>


</div>

<h4 className="text-[#801515]  pt-6  text-[18px] md:text-[24px] font-[500]">
         WOMEN ANNUAL DUES
          </h4>

        

          <div className='flex flex-col gap-4 md:gap-9'>
          <div className=''>
          <h4 className="text-[#801515]  pt-6  text-[18px] md:text-[20px] font-[500]">
          Women's Guild
          </h4>
<h5 className='text-[16px]'> Account	Name:	Women’s	&	Girls’	Org.	Church	of	the	Nativity</h5>
<h5 className='text-[16px]'>  Account	Number:	2009930232</h5>
<h5 className='text-[16px]'>Bank:	First	Bank	</h5>
</div>

<div className=''>
          <h4 className="text-[#801515]   text-[18px] md:text-[20px] font-[500]">
         SACRIFICE
          </h4>
<h5 className='text-[16px]'> Account	Name:	Church	of	the	Nativity	Sacrifice</h5>
<h5 className='text-[16px]'> Account	Number:	1228673854</h5>
<h5 className='text-[16px]'>Bank:	Zenith	Bank	</h5>
</div>


<div className=''>
          <h4 className="text-[#801515]   text-[18px] md:text-[20px] font-[500]">
          Mother’s	Union
          </h4>
<h5 className='text-[16px]'>  Account	Name:	Church	of	the	Nativity	Mother’s	Union</h5>
<h5 className='text-[16px]'> Account	Number:	7570983019</h5>
<h5 className='text-[16px]'>Bank:	FCMB</h5>
</div>


          </div>
</div>

        </div>
      </div>

<Footer />
    </div>
  )
}

export default Give