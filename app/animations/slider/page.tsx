import { SliderLeft } from "@/app/lib/anim"

const Slider = () => {
  return (
<>
<SliderLeft>
<div className="text-[50px] px-[10px] mx-[-10px]">TOP</div>

</SliderLeft>
<br></br>
<SliderLeft>
<div className="text-[50px] px-[10px]">Left</div>
</SliderLeft>
</>
  )
}

export default Slider