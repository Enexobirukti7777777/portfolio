import React from 'react'
import heroimage from '../asset/pro1.jpg'
import { TypeAnimation } from 'react-type-animation'
/*import { TypeAnimation } from 'react-type-animation'*/
const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1600px] md:h-[100vh] mx-auto py-8 bg-black'>
      <div className=' col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
      <img src={heroimage} alt='hero sel'/>
    </div>
    
<div className=' col-span-2 px-5 my-auto'>
    <h1 className='text-white text-2xl sm:text-3xl lg:text-6xl font-extrabold'>
<span className='primary-color'> 
  I'am a
</span><br/>
<TypeAnimation sequence ={ [ "A Software Engineer",1000,"Frontend Dev",1000,"Webdesigner",1000,"UI/UX Designer",1000,]}
wrapper='span'
speed={50}
repeat={Infinity}
    />
    </h1>
    <p className='text-white sm:text-lg my-6 lg:text-xl'> 

      My Name is Biruktawit Biruk ,I am a student  in adama science and technology university ,I am juniour Frontend developer and ui/ux designer,and pationated in culnary art 
    </p>
    <div className='my-8'> 
      
      <a href='/' className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white'> Contact</a>
    </div>
</div>

</div>
  )
}

export default Hero
