import Link from "next/link"
const AnimationLayout = ({children}:{children:React.ReactNode}) => {
    let links=[{id:1,href:"/animations",label:"Главная"},{id:2,href:"/animations/slider",label:"Slider"}]
  return (
    <div className="">
<h1 className="text-center text-blue-950 text-[40px]">Animation Layout</h1>
{links.map(l=><Link className="px-[20px]" key={l.id} href={l.href}>{l.label}</Link>)}
      <div className="children">{children}</div>  
    </div>
  )
}

export default AnimationLayout