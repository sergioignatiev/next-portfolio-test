'use client'
import React from 'react'
import { Scroll } from './Scroll'
export const Button = ({clasName,children,onC}:{clasName?:string,children:string|JSX.Element|any,onC?:()=>void}) => {
  return (
    <Scroll>
        <div onClick={onC} className={`px-[10px] py-[5px] text-white rounded-full ${clasName}`}>{children}</div>
  </Scroll>
  )
}
