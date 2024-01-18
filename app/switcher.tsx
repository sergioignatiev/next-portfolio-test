'use client'
import { useState } from "react"
const Switcher = ({sw,cl}:{sw:boolean,cl:()=>void}) => {
    let [swit,setSwit]=useState(true)
    function switcher(){
        setSwit(prev=>!prev)
    }
    if(swit===true){

    }
  return (
    <div>Switcher</div>
  )
}

export default Switcher