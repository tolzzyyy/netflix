import React from 'react'
import NavBar from './NavBar'
import Netflixbg from '../assets/Netflix-bg.jpg'
import Footer from './Footer';




const Body = () => {
  
const bgImage = {
  backgroundImage: `url(${Netflixbg})`,
  backgroundSize: 'cover',
  backgroundPosition:'center',
 };
  return (
    <div className='w-full  h-[700px]' style={bgImage} >
       <NavBar/>
      
       <div className='flex flex-col items-center mt-3 gap-[10px] justify-center min-h-[100px] md:min-h-[500px] md:gap-7'>
        <h1 className='md:text-[50px] text-white font-bold leading-10 space-x-5 text-[35px] text-center'>Unlimited movies,TV  shows, and more</h1>
        <h2 className='md:text-[25px] text-white font-normal text-[19px]'>Watch anywhere. Cancel anytime.</h2>
        <h3 className='md:text-[25px] text-white leading-6 font-normal text-center text-[17px]'> Ready to watch? enter your email to create or restart your membership</h3>
        <div className='mt-2'>
          <form className=' gap-3 flex flex-col md:inline-block items-center justify-center' action="">
            <input className=' bg-black/70 border-[1px] placeholder:pl-3 border-red-600 border-solid h-[50px] w-[300px]' placeholder='Email Address' type="email" />
            <button className=' md:ml-2 md:px-10 bg-red-600 text-white px-6 py-3'>Get started</button>
          </form>
        </div>
       
      </div>
      <Footer/>
      </div>
     
    
      
    
  
  )
}

export default Body
