import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

function FourthSec() {
  useEffect (() => {
    AOS.init();
  }, [])

  return (
    <div className="relative pb-16 bg-gray-300">
      <div>
        <div className="relative pt-4 ">
          <img src="images/Group9.png" alt=""  className="absolute mt-5"/>
        </div>
        <div>
          <h1 className="text-[#101A24] text-center text-3xl font-bold" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="700">Our Happy Customers</h1>
          <p className="text-[#5C6574] text-center" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>

          <div>
            <div  className="flex w-screen overflow-x-scroll" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="700">
            <div className="relative mx-3">
              <div className="relative flex justify-center top-10">
                <img src="images/person-1.png" alt="" className="rounded-full"/>
              </div>

              <div className="bg-white text-[#101A24] z-50 rounded-tl-[30%] rounded-br-[30%] px-10 py-10 w-72">
                <p>Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper 
                </p>
                <h4 className="mt-6 text-xl font-bold text-center">Ama Ampomah</h4>
                <p className="text-xl text-center">CEO & Founder Inc </p>
              </div>
              </div>
              <div className="relative mx-3">
              <div className="relative flex justify-center top-10">
                <img src="images/person-2.png" alt="" className=""/>
              </div>

              <div className="bg-white text-[#101A24] z-50 rounded-tl-[30%] rounded-br-[30%] px-10 py-10 w-72">
                <p>Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper 
                </p>
                <h4 className="mt-6 text-xl font-bold text-center">Kweku Annan</h4>
                <p className="text-xl text-center">CEO & Founder Inc </p>
              </div>
              </div>
            </div>
            <ul className="flex justify-center gap-5 mt-10">
                <li className="w-2 h-2 rounded-full bg-[#5C6574]"></li>
                <li className="w-2 h-2 rounded-full bg-[#EA6D27]"></li>
                <li className="w-2 h-2 rounded-full bg-[#5C6574]"></li>
                <li className="w-2 h-2 rounded-full bg-[#5C6574]"></li>
                <li className="w-2 h-2 rounded-full bg-[#5C6574]"></li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourthSec
