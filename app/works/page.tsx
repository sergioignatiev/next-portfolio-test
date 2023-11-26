'use client'
import { useState } from "react"
const Works = () => {
const [data,setData]=useState(0)
function handleChange(e:any){
setData(e.target.value)
}
  return (
    <div style={{marginLeft:`${data}px`}}>
        <input
        
   className="w-[90px]"
        onChange={handleChange}
        type="range" max='300' min='0' value={data} />
        <h2>{data}%</h2>
    </div>
  )
}

export default Works