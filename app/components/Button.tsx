'use client'
import React from 'react'
import { InViev } from '../lib/inviev'
export const Button = ({clasName,children,onC}:{clasName?:string,children:string|JSX.Element|any,onC?:()=>void}) => {
  return (
    <InViev>
        <div onClick={onC} className={`px-[10px] py-[5px] text-white rounded-full ${clasName}`}>{children}</div>
  </InViev>
  )
}
