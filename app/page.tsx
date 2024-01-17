'use client'
import { useState } from "react"

export default function Home() {
 let [theme,setTheme]=useState('white')
 
  return (

   <div className={`${theme}  `}>
    <h1 className="text-[100px]">{localStorage.getItem('name')}</h1>
    <div className="text-[black] dark:text-[red] dark:bg-[black]">
    <div className="dark:text-[100px]" onClick={()=>setTheme('dark')}>dark</div>
    <div className="text-[100px] dark:text-[14px]" onClick={()=>setTheme('white')}>white</div>

   <h1 className="">Hello There</h1>
   <h1 className="text-[black] dark:text-[red] dark:bg-[black]">Hello There</h1>
   <h1 className="">Hello There</h1>
 
</div>
   </div>
  
  )
}
