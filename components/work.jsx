import React from 'react'
import proj1 from '../asset/proj1.jpg'
import proj2 from '../asset/proj2.jpg'
import proj3 from '../asset/proj3.jpg'
import pro4 from '../asset/pro4.jpg'

const work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5 id="work'>
        <div className='pb-8'>
           
           <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
            <p className='text-gray-400'>Check Out My Work</p>
        </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
<div className='transform translation-transform duaration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container 
rounded-md flex justify-justify-center items-center  h-[200px] bg-cover relative'>
    <img src={proj1} alt=''></img>

<div className='opacity-0 group-hover:opacity-90 bg[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
<span className='text-2xl font-bold text-white tracking-wider'></span>
<div className='pt-8 text-center'>
    <a href='/'></a>
    <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
</div>


</div>



</div>
<div className='transform translation-transform duaration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container 
rounded-md flex justify-justify-center items-center  h-[200px] bg-cover relative'>
    <img src={proj2} alt=''></img>

<div className='opacity-0 group-hover:opacity-90 bg[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
<span className='text-2xl font-bold text-white tracking-wider'></span>
<div className='pt-8 text-center'>
    <a href='/'></a>
    <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
</div>


</div>



</div>
<div className='transform translation-transform duaration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container 
rounded-md flex justify-justify-center items-center  h-[200px] bg-cover relative'>
    <img src={proj3} alt=''></img>

<div className='opacity-0 group-hover:opacity-90 bg[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
<span className='text-2xl font-bold text-white tracking-wider'></span>
<div className='pt-8 text-center'>
    <a href='/'></a>
    <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
</div>


</div>



</div>
<div className='transform translation-transform duaration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container 
rounded-md flex justify-justify-center items-center  h-[200px] bg-cover relative'>
    <img src={pro4} alt=''></img>

<div className='opacity-0 group-hover:opacity-90 bg[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
<span className='text-2xl font-bold text-white tracking-wider'></span>
<div className='pt-8 text-center'>
    <a href='/'></a>
    <button  className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
</div>


</div>



</div>
 </div>
    </div>
  )
}

export default work
