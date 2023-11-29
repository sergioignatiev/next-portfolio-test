'use client'
import { motion, useScroll,useAnimation,useInView } from "framer-motion"
import { useEffect,useState,useRef } from "react";
interface Props{
    children:string|React.ReactNode,
    width?:'fit-content'|'100%'
}
export function Scroll({children,width='fit-content'}:Props) {
 const ref =useRef(null)
 const isInView=useInView(ref,{once:false})
 const mainControls=useAnimation()
 useEffect(()=>{
   if(isInView){
    mainControls.start('visible')
   }
   else if(!isInView){
    mainControls.start('hidden')
   }
 },[isInView])
  return (
    <div ref={ref}>
    
    <motion.div className="py-[20px]" 
    variants={{
        hidden:{opacity:0,y:75,x:-200},
        visible:{opacity:1,y:0,x:0}

    }}
    initial='hidden'
    animate={mainControls}
    transition={{duration:0.5}}
    >{children}</motion.div>  
 
  </div>)
}