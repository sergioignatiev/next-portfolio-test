'use client'
import Link from "next/link";
import Image from "next/image";
import React from 'react'
import { usePathname } from "next/navigation";
import classnames from "classnames";
const Nav = () => {
let currentPath=usePathname()
    let navbar=[{href:"/",label:"Главная"},{href:"/animations",label:"Анимации"},{href:"/works",label:"Работы"},{href:"/skills",label:"Навыки"}]
  return (
 <nav className="text-right sticky top-0 py-5 px-[100px]">

  {navbar.map(l=><Link key={l.href} className={classnames({
        'opacity-50 text-black':l.href===currentPath,
        '':l.href!==currentPath,
        'px-[10px] font-bold':true
      })}  href={l.href}>{l.label}</Link>)}
 </nav>
  
  
  
  )
}

export default Nav