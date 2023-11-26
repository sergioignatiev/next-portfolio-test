'use client'
import Link from "next/link";
import Image from "next/image";
import React from 'react'
import { usePathname } from "next/navigation";
import classnames from "classnames";
const Nav = () => {
let currentPath=usePathname()
    let navbar=[{href:"/",label:"Главная"},{href:"/works",label:"Работы"},{href:"/skills",label:"Навыки"}]
  return (
 <nav className="text-right sticky top-0 bg-white bg-opacity-70 py-3">

  {navbar.map(l=><Link key={l.href} className={classnames({
        'opacity-50':l.href===currentPath,
        '':l.href!==currentPath,
        'px-[10px] font-bold':true
      })}  href={l.href}>{l.label}</Link>)}
 </nav>
  
  
  
  )
}

export default Nav