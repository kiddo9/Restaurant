import Button from "./Button"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

function ThirdSec() {
  useEffect (() => {
    AOS.init();
  }, [])


  return (
    <div className="px-2 py-2">
      <div>
        <div className="relative">
            <img src="images/Group7.png" alt="" className="absolute top-0" />
            <img src="images/Group4.png" alt="" className="absolute top-0 left-44" />
            <div className="pt-20">
                <h1 className="text-[#101A24] text-4xl font-semibold" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="500">Our Expect Chef</h1>
                <p className="text-[#5C6574] mt-8" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <ul className="mt-12 mb-12">
                <div className="grid grid-cols-2 gap-10 text-[#101A24] px-2" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="900">
                    <li className="relative flex gap-1 my-auto text-md"><img src="images/check.png" alt="" className="w-6 h-6 my-auto"/>Lorem ipsum dolor sit amet, consectetur </li>
                    <li className="relative flex gap-1 my-auto text-md"><img src="images/check.png" alt="" className="w-6 h-6 my-auto"/>Lorem ipsum dolor sit amet, consectetur </li>
                    <li className="relative flex gap-1 my-auto text-md"><img src="images/check.png" alt="" className="w-6 h-6 my-auto"/>Lorem ipsum dolor sit amet, consectetur </li>
                    <li className="relative flex gap-1 my-auto text-md"><img src="images/check.png" alt="" className="w-6 h-6 my-auto"/>Lorem ipsum dolor sit amet, consectetur </li>
                    <li className="relative flex gap-1 my-auto text-md"><img src="images/check.png" alt="" className="w-6 h-6 my-auto"/>Lorem ipsum dolor sit amet, consectetur </li>
                    <li className="relative flex gap-1 my-auto text-md"><img src="images/check.png" alt="" className="w-6 h-6 my-auto"/>Lorem ipsum dolor sit amet, consectetur </li>
                </div>
                </ul>

                <Button />
            </div>
        </div>

        <div className="mx-2 mt-12" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="700">
            <img src="images/chef 1.png" alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default ThirdSec
