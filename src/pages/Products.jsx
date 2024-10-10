import React, { useState } from 'react'
import { GrNext ,GrPrevious} from "react-icons/gr";
const projectdata=[
    {
        src:"dataanalytics.png",
        link:"https://data-analythics-website.vercel.app/",
    },
    {
        src:"eatsplite.png",
        link:"https://eat-n-splite.vercel.app/?vercelToolbarCode=Z8bBu5wBY_Yzqa7",
    },
    {
        src:"contcreai.jpg",
        link:"https://eat-n-splite.vercel.app/?vercelToolbarCode=Z8bBu5wBY_Yzqa7",
    },
    {
        src:"popcorn.png",
        link:"https://eat-n-splite.vercel.app/?vercelToolbarCode=Z8bBu5wBY_Yzqa7",
    },
    {
        src:"worldwise.png",
        link:"https://eat-n-splite.vercel.app/?vercelToolbarCode=Z8bBu5wBY_Yzqa7",
    },
    {
        src:"reactfastpizza.png",
        link:"https://eat-n-splite.vercel.app/?vercelToolbarCode=Z8bBu5wBY_Yzqa7",
    },
   
]
export default function Products() {
     const [index,setIndex]=useState(1)
    function prevbtn(){
     if(0==index)
      setIndex(projectdata.length-1)
    else
      setIndex(index-1)
    }
    function nxtbtn(){
     if(projectdata.length-1==index) setIndex(0)
      
    else setIndex(index+1)
    
    }
  return (
    <div className=' p-6'>
        <h2 className='text-center font-extrabold text-xl mb-5'>Products</h2>
      <div className="mockup-browser bg-base-300 border">
  <div className="mockup-browser-toolbar">
    <div className="input">{projectdata[index].link}</div>
  </div>
  <div className="bg-base-200 flex justify-center px-4 py-16">
    <div className=''>
        <div className='absolute top-2/4 left-8 sm:left-10  p-1 text-xl border sm:text-4xl cursor-pointer' >
        <GrPrevious onClick={prevbtn}/>
        </div>
        <div>
           <a href={projectdata[index].link} target='_blank'><img src={projectdata[index].src} alt='/'  /></a> 
        </div>
        <div className='absolute top-2/4 right-8 sm:right-10 p-1  text-xl border sm:text-4xl cursor-pointer' >
            <GrNext onClick={nxtbtn}/>
        </div>

    </div>
    
  </div>
</div>
    </div>
  )
}
