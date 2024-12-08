import InfoSec from "./InfoSec"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

function FirstSec() {
  useEffect (() => {
    AOS.init();
  }, [])

  return (
    <div className="flex flex-col mt-14 2xl:px-44">
      <div className="flex mx-auto lg:ml-6" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="500">
        <img src="images/Group 1.png" alt="" className="logo"/>
      </div>

      <div className="mt-10 lg:ml-7 lg:w-6/12" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="700">
        <h1 className="text-[#101A24] text-3xl font-bold text-center font-serif sm:text-5xl lg:text-left lg:leading-normal">We provide the 
            best food for you
        </h1>
      </div>

      <div className="relative mx-2 mt-20 sm:mx-12 lg:w-5/12 lg:ml-[55%] lg:-mt-64">
        <div className="relative flex flex-col justify-center">
            <img src="images/Group.png" alt="" className="w-48 absolute -top-10  rotate-[15deg] lg:w-80 lg:-top-18 lg:-left-32" data-aos="fade-in" data-aos-duration="1400" data-aos-delay="700" />
            <img src="images/Group2.png" alt="" className="absolute w-44 -right-2 -top-20 lg:w-52" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="800" />
            <img src="images/Mask group.png" alt="" className="z-30" data-aos="fade-top-right" data-aos-duration="1200" data-aos-delay="1000"/>
            <img src="images/dish-2 1.png" alt="" className="relative z-40 -top-44 lg:-top-96 lg:-left-48 lg:w-10/12 sm:w-96 sm:mx-auto" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="300" />
            <img src="images/Group3.png" alt="" className="w-20 absolute right-4 rotate-[90deg] bottom-32 lg:rotate-0 lg:bottom-96 lg:w-56 lg:-right-9" />
        </div>
      </div>

      <InfoSec />

      <div className="flex py-10 mx-auto lg:relative lg:-left-80 lg:-top-[40rem] xl:-top-[53rem] xl:-left-[30rem] 2xl:-top-[43rem] 2xl:-left-96">
        <ul className="flex gap-9">
            <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="400"><img src="images/Facebook.png" className="w-16" /></li>
            <li data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" className="border rounded-full p-5 border-[#101A24]"><img src="images/icons8-instagram 1.png" /></li>
            <li data-aos="fade-down" data-aos-duration="1200" data-aos-delay="400" className="border rounded-full p-4 border-[#101A24]"><img src="images/image 2.png" /></li>
        </ul>
      </div>
    </div>
  )
}

export default FirstSec
