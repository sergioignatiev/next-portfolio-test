import { SliderLeft } from "@/app/lib/anim"

const Slider = () => {
  return (
<>
<SliderLeft bkg='red'>
<div className="text-[40px] px-[10px] ">TOPs</div>

</SliderLeft>
<br></br>
<SliderLeft>
<div className="text-[60px] px-[10px]">Left</div>
</SliderLeft>
</>
  )
}

export default Slider