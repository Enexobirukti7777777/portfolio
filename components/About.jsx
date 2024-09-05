import React from 'react'
import aboutImg from'../asset/pro2.jpg'
const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12' id="about">
        <div className='md:grid md:grid-cols-2 sm:py-16'>
<div className='mt-4 md:mt-0 text-left flex '>
    <div className='my-auto mx-6'>
        <h2 className='text-4xl font-bold mb-4 primary-color'>About Me</h2>
        <p className='text-base lg:text-lg'>
            My name is Biruktawit Biruk, and I am a 21-year-old university student living in Ethiopia. Currently, I am in my third year at Adama Science and Technology University, where I am studying to become a junior UI/UX designer and a software engineer. I have a strong passion for design, focusing on enhancing user experiences through thoughtful interfaces. Alongside my design studies, I am also honing my programming skills to build functional and efficient software solutions. Outside of my academic pursuits, I love cooking, especially baking cakes. My diverse interests in design, software engineering, and culinary arts allow me to express my creativity in various ways.
        </p>
    </div>
</div>
<img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={300} height={300}/> 
    </div>
    </div>
  )
}

export default About
