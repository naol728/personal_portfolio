import React from 'react'
import { FaLinkedin,FaGithub,FaTelegram } from "react-icons/fa";
export default function About() {
  return (
  <div className='max-h-fit'>

     <div className="hero" >
  <div className="hero-content  flex-col-reverse lg:flex-row-reverse ">
    <img
      src="myphoto2.jpg"
      className="max-w-64  rounded-lg shadow-3xl " />
     
    <div>
      <h1 className="text-xl font-bold p-6">About</h1>
      <p className="p-6 text-sm ">
      I’m Naol Meseret, a passionate Software Engineering student at Debre Berhan University. I specialize in web development and AI engineering, where I merge creativity with technical expertise to build dynamic and innovative solutions. My journey began with a fascination for technology and problem-solving. Over the years, I’ve honed my skills in various programming languages and frameworks, always eager to learn and adapt. Whether it’s crafting responsive websites or exploring the exciting world of artificial intelligence, I love transforming ideas into reality! 
      In my portfolio, you’ll find a selection of projects that showcase my abilities in web development and AI. Each project reflects my dedication to quality, functionality, and user experience. I thrive on challenges and enjoy collaborating with others to create impactful solutions.
      I’m excited to connect with fellow tech enthusiasts and opportunities that allow me to grow and contribute to the ever-evolving tech landscape. Let’s innovate and make a difference together!
      </p>
    
    </div>
    <div className='flex lg:flex-col gap-8'>  
      <a className='hover:cursor-pointer ' href='https://www.linkedin.com/in/naol-meseret-3b4aa1319/' target='_blank'>
        <FaLinkedin className='size-6' />
      </a>
      <a className='hover:cursor-pointer ' href='https://github.com/naol728' target='_blank'>
        <FaGithub className='size-6' />
      </a>
      <a className='hover:cursor-pointer ' href='https://t.me/nm528' target='_blank'>
       <FaTelegram className='size-6' />
      </a>
    </div>
  </div>
</div>
  </div>
   
  )
}
