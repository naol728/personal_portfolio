import React from 'react'
import Navbar from '../components/Navbar'
import { BackgroundLines } from '../components/ui/background-lines'
import { TypewriterEffectSmooth } from '../components/ui/typewriter-effect';
const words = [
  {
    text: "Hello",
  },
  {
    text: "I’m",
  },
  {
    text: "Naol",
  },
  {
    text: "Meseret👋",
  },
];
export default function Home() {
  return (
    <div className='h-dvh'>
         
      <Navbar />
    
    <div className='flex flex-col items-center justify-center h-full  '>
          <div className='border-solid border-black border-[10px] rounded-full'>
        <img src='myphoto.jpg' className='size-40 rounded-full shadow-lg shadow-slate-700 sm:size-44 lg:size-52' />
          </div>
         <TypewriterEffectSmooth words={words} />
        <p className='text-center mt-3 p-10 text-base sm:text-xl font-semibold '> a passionate front-end web developer dedicated to creating stunning and user-friendly websites. With a keen eye for design and a deep understanding of web technologies, I specialize in transforming ideas into visually appealing and responsive designs. </p>
     
    </div>

    
    
    </div>
  )
}
