'use client'
import { motion, useScroll } from "framer-motion"
import { Button } from './components/Button'
import { useState } from 'react'
import { Scroll } from "./components/Scroll";

export default function Home() {
  const { scrollYProgress } = useScroll();
  let [st,setSt]=useState("translate-x-[-200px] opacity-10")
  function changeAlert(){
    setSt("transform translate-x-[0px] opacity-100 text-center")
  }
  function back(){
    setSt('translate-x-[-1000px] opacity-10')
  }
  return (

   <div className="text-left homepage">
      <Button onC={changeAlert} clasName={`bg-[blue]  text-[20px] `}>Just a button</Button>
<ul >
  <li>framer motion</li>
  <li>prisma</li>
  <li>spanish</li>
</ul>


   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quam placeat deserunt natus voluptates unde odit alias, voluptatum enim id dignissimos ipsum animi harum itaque laudantium sed nostrum a modi saepe. Amet sequi molestias velit architecto, veritatis atque iste magni mollitia corporis quas similique saepe hic vel ad obcaecati dolores adipisci impedit at earum ea dolorem.
 

   </div>
  
  )
}
