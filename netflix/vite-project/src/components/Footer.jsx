import React from 'react';
import Netflix1 from '../assets/Netflix1.jpg';
import Netflix2 from '../assets/Netflix2.jpg';

const Footer = () => {
  return (
    <div className='h-full mt-[30px] w-full border-t-[6px] border-solid border-[#232323] bg-black'>
      <div className='grid xl:gap-[20px] w-full xl:items-center xl:justify-center text-center xl:py-[80px] py-2 xl:flex'>
        <div className='xl:mb-[70px] pt-5 xl:pt-0 xl:text-[40px] xl:justify-start xl:items-start xl:flex xl:flex-col text-white text-[20px]'>
          <h1 className='xl:font-bold xl:text-[55px] font-bold text-[33px]'>Enjoy on your TV</h1>
          <p className='xl:text-[25px] text-[19px] pt-2 md: xl:justify-start xl:items-start xl:flex xl:flex-col'>
            <p>Watch on smart TVs, Playstation, Xbox,</p>
            <p>Chromecast, Apple TV, Blu-ray players, and more</p>
          </p>
          
        </div>
        <div className=''>
          <img className='xl:w-[580px] w-full h-[328.5] xl:mt-0 mt-3' src={Netflix1} alt="" />
        </div>
      </div>
      <div className='xl:p-[100px] xl:gap-6 flex flex-col xl:flex-row-reverse xl:items-center xl:justify-center w-full bg-black text-white text-center pt-[39px] h-screen  border-t-[6px] border-[#232323] border-solid'>
        <div className='flex flex-col xl:pb-[70px] xl:justify-start xl:items-start text-center xl:text-left'>
          <h1 className='xl:text-[55px] xl:leading-[60px] xl:pt-3 leading-10 text-[33px] font-bold'>
            Download your <br /> shows to watch <br /> offline
          </h1>
          <p className='text-[17px] xl:text-[25px] pt-3'>Save your favourites easily and always have <p>something to watch</p></p>
        </div>
        <div className=''>
          <img className='pb-[250px] xl:pb-0 xl:pl-0 pl-4' src={Netflix2} alt="" />
        </div>
      </div>
      <div className='border-[6px] border-[#232323] border-t border-solid'>
     watch your shows anywhere anytime
      </div>
    </div>
  );
}

export default Footer;
