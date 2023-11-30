'use client'
import { InViev,InVievLeft } from "../lib/inviev"
export function Name(){
    return   <><div className="relative"><h1 className='text-[100px] font-semibold  flex'>
  <InViev duration={0.1}>  <div className="" > Сергей</div></InViev>
    <InViev duration={0.5}><div className="ml-[30px] text-[red]">Игнатьев</div></InViev>
  </h1>



  </div>
  

  <h1 className='text-[100px] font-semibold  flex'>
  <InVievLeft duration={0.1}>  <div className="text-[red]"> W</div></InVievLeft>
    <InVievLeft duration={0.2}><div className="text-[red]">E</div></InVievLeft>
    <InVievLeft duration={0.3}><div className="">B</div></InVievLeft>
    <InVievLeft duration={2}>  <div className=""> -</div></InVievLeft>
    <InVievLeft duration={0.5}><div className="text-[red]">D</div></InVievLeft>
    <InVievLeft duration={0.6}><div className="text-[red]">E</div></InVievLeft>
    <InVievLeft duration={3}><div className="">V</div></InVievLeft>
    <InVievLeft duration={0.6}><div className="">E</div></InVievLeft>
    <InVievLeft duration={0.5}><div className="">L</div></InVievLeft>
    <InVievLeft duration={2.5}>  <div className="">O</div></InVievLeft>
    <InVievLeft duration={0.3}><div className="">P</div></InVievLeft>
    <InVievLeft duration={0.2}><div className="">E</div></InVievLeft>
    <InVievLeft duration={0.1}><div className="">R</div></InVievLeft>

  </h1>

</>
}