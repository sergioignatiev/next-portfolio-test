'use client'
import { useState } from "react"
import { Scroll } from "../components/Scroll"
import { Button } from "../components/Button"
const Works = () => {
const [data,setData]=useState(0)
function handleChange(e:any){
setData(e.target.value)
}
  return (
    <div style={{marginLeft:`${data}px`}}>
  <Scroll>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam cupiditate ex eius deserunt. Eum totam sequi similique. Architecto rerum voluptates nemo commodi corporis distinctio nostrum excepturi debitis eum quam adipisci esse exercitationem sunt, quasi explicabo maiores officiis id est molestias tempora reiciendis ex facilis.
    </p>
  </Scroll>
  <Scroll>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa doloremque ullam incidunt in voluptatum ab corporis iure quisquam blanditiis. Quas voluptatem iure libero asperiores quam minima odit numquam, quod cumque ipsam labore tempore quisquam illum, rerum reprehenderit neque, obcaecati non? Placeat pariatur facere vel magnam ratione aut adipisci eos reiciendis. Repellendus natus nihil aspernatur sapiente provident.</p>
  </Scroll>
  <Scroll>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, tenetur esse officia in minima explicabo commodi soluta consequuntur dolorem voluptates fugiat vel et ad vero? Aspernatur libero quae ea repellat distinctio. Numquam, aperiam? Magni amet sint debitis harum est officia quod culpa repellendus fuga dignissimos quae eos, nobis eum neque delectus adipisci placeat quam hic assumenda quidem rerum sapiente natus reiciendis soluta! Incidunt suscipit voluptatum omnis vitae vero saepe at nostrum sint sit delectus! Corrupti neque beatae ad alias tenetur. Voluptatibus dolores deleniti asperiores magnam illo molestias iusto nihil assumenda magni minima, alias consequatur officia cum animi itaque totam!</p>
  </Scroll>
  <Scroll>
    <Button>THIS IS MY BUTTON</Button>
  </Scroll>
    </div>
  )
}

export default Works