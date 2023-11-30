'use client'
import { InViev } from "../lib/inviev"
export function Name(){
    return   <div className="relative"><h1 className='text-[100px] font-semibold  flex'>
  <InViev duration={0.1}>  <div className="" > Сергей</div></InViev>
    <InViev duration={0.5}><div className="ml-[30px] text-[red]">Игнатьев</div></InViev>
  </h1>
  <h1 className='text-[100px] font-semibold  flex'>
  <InViev duration={0.8}>  <div className="text-[red]"> WEB</div></InViev>
    <InViev duration={1.2}><div className="ml-[30px]">Developer</div></InViev>
  </h1>
  
  </div>
}