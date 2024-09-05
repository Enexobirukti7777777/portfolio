import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black h-16 flex items-center justify-between px-4">
      <h1 className=" text-3xl font-bold  primary-color ">B&B</h1>
      <ul className="hidden md:flex">
        <li className="p-5"><a className="text-white" href="#about">About</a></li>
        <li className="p-5"><a className="text-white" href="#work">Work</a></li>
        <li className="p-5"><a className="text-white" href="#contact">Contact</a></li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={15} color="white" /> : <AiOutlineMenu size={15} color="white" />}
      </div>

      <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-purple-950 ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='z-10 text-3xl text-white m-4'>B&B</h1>
        <ul className='p-8 text-2xl text-white'>
          <li className='p-2'><a href='#home'>Home</a></li>
          <li className='p-2'><a href='#about'>About</a></li>
          <li className='p-2'><a href='#work'>Work</a></li>
          <li className='p-2'><a href='#experience'>Experience</a></li>
          <li className='p-2'><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;