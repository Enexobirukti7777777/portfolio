import React from 'react';
import html from '../asset/html.png';
import css from '../asset/css.png';
import javascript from '../asset/javascript.png';
import react from '../asset/react.png';

const Skills = () => {
  return (
    <div className='bg-black text-gray-400 md:flex md:justify-between md:items-center'>
      <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
        My<br/>
        Tech <br/>
        Stack <br/>
      </h2>
      <div className='flex flex-col items-center m-4 sm:my-0'>
        <img src={html} alt='HTML' className='w-16 h-16 md:w-24 md:h-24' /> 
        <p className='mt-2'>HTML</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0'>
        <img src={css} alt='CSS' className='w-16 h-16 md:w-24 md:h-24' /> 
        <p className='mt-2'>CSS</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0'>
        <img src={javascript} alt='JavaScript' className='w-16 h-16 md:w-24 md:h-24' /> 
        <p className='mt-2'>JavaScript</p>
      </div>
      <div className='flex flex-col items-center m-4 sm:my-0'>
        <img src={react} alt='React' className='w-16 h-16 md:w-24 md:h-24' /> 
        <p className='mt-2'>React</p>
      </div>
    </div>
  );
}

export default Skills;