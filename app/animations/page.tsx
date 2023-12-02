import { Scroll } from "../components/Scroll"
import { InVievShake } from "../lib/inviev"
const Animation = () => {
  const arr=[{id:1,text:"THIS IS THE TEXT",time:1},
  {id:2,text:"THIS IS THE SECONS TEXT",time:0.5},
  {id:3,text:"THIRD PART OF THE STORY",time:0.8},{
    id:4,text:"THIS IS THE TEXT OF THE STORY",time:7
  },{id:5,text:"FIFTH TEXT",time:2}]
  return (<>
 <div className="flex flex-wrap w-[1000px] bg-[red] gap-1"> 
    {arr.map(m=><InVievShake duration={m.time} key={m.id}><div className="text-[40px]">{m.text}</div></InVievShake>)}
    </div>

    <Scroll duration={0.4}>
   
    <div className='text-[yellow] text-[140px] bold relative'>Animation</div>
  </Scroll>
  </>
  )
}

export default Animation