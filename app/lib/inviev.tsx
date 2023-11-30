'use client'
import { motion, useAnimation,useInView } from "framer-motion"
import { useEffect,useRef } from "react";
interface Props{
    children:string|React.ReactNode,
    width?:'fit-content'|'100%',
    duration?:number
}
export function InViev({children,width='fit-content',duration=0.4}:Props) {
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
        hidden:{transform:"rotateX(90deg)"},
        visible:{transform:'rotateX(0deg)'}

    }}
    initial='hidden'
    animate={mainControls}
    transition={{duration:0.4,delay:duration}}
    >{children}</motion.div>  
 
  </div>)
}
export function InVievLeft({children,width='fit-content',duration=0.4}:Props) {
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
         hidden:{transform:"translateY(-1900px)"},
         visible:{transform:'translateY(0px)'}
 
     }}
     initial='hidden'
     animate={mainControls}
     transition={{duration:0.4,delay:duration}}
     >{children}</motion.div>  
  
   </div>)
 }