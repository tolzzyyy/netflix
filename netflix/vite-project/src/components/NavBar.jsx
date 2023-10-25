import React from 'react'
import logo from '../assets/logo.png'
const NavBar = () => {
  return (
   
      <nav className='w-full h-[150px] py-2'>
        <div className='flex items-center   justify-between px-4 '>
            <img className='md:w-[250px] md:ml-[50px] w-[200px] ml-[-25px]' src={logo} alt="" />
             <button className='   rounded-[5px] p-2 mr-2 bg-red-600 text-white md:py-2 px-4 md:mr-[50px] '>Sign In</button>
        </div>
 </nav>
      
 
  )
}

export default NavBar
