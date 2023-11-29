'use client'
import { Scroll } from "./Scroll"
export function Name(){
    return   <div className="relative"><h1 className='text-[100px] font-semibold  flex'>
  <Scroll duration={0.1}>  <div className="" > Сергей</div></Scroll>
    <Scroll duration={0.5}><div className="ml-[30px] text-[red]">Игнатьев</div></Scroll>
  </h1>
  <h1 className='text-[100px] font-semibold  flex'>
  <Scroll duration={0.8}>  <div className="text-[red]"> WEB</div></Scroll>
    <Scroll duration={1.2}><div className="ml-[30px]">Developer</div></Scroll>
  </h1>
  
  </div>
}