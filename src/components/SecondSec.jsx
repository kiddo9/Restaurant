import Card from './Card'
import InfoSec from './InfoSec'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import Button from './Button'

function SecondSec() {
  useEffect (() => {
    AOS.init();
  }, [])

  return (
    <div className="relative pb-20 bg-gray-200 lg:-mt-[30rem] ">
      <div>
        <div className="flex justify-between">
            <img src="images/Group2.png" alt="" className="w-12" />
            <div className="flex flex-col justify-center">
                <h1 className="text-[#101A24] text-center font-serif text-3xl sm:text-6xl" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="700">Our Special Dishes</h1>
                <p className="text-[#5C6574] mt-8 sm:text-2xl lg:text-center" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="900">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt 
                </p>
            </div>
            <img src="images/Group3.png" alt="" className="w-12" />
        </div>
        <Card />
        <img src="images/Group4.png" alt="" className='absolute right-0' />
      <img src="images/Group6.png" alt="" className='mt-16 -ml-20 rotate-[-55deg]' />

      <div className='mt-10 sm:-mt-6'>
        <div className='lg:flex'>
          <div className='relative mb-20 lg:w-10/12'data-aos="fade-right" data-aos-duration="1200" data-aos-delay="700">
          <img src="images/leaf-3.png" alt="" className='absolute z-10 rotate-45 w-28 right-12 sm:right-36 sm:w-48' />
          <img src="images/dish-2 2.png" alt="" className='relative sm:w-9/12 sm:mx-auto ' />
          <img src="images/leaf-3.png" alt="" className='absolute -rotate-45 w-28 top-28 sm:left-14 sm:top-48 sm:w-48' />
          <img src="images/leaf-3.png" alt="" className='absolute w-28 top-56 right-14 sm:right-44 sm:top-96 sm:w-48 lg:top-64 lg:left-56' />
        </div>
        <div className='hidden lg:block'>
            <h1 className='text-[#101A24] text-4xl font-bold ml-2 -mt-11 mb-16 sm:text-6xl sm:mb-24' data-aos="fade-in" data-aos-duration="1200" data-aos-delay="200">Welcome To Our Restuarant</h1>
            <div className="text-[#5C6574] flex flex-col gap-10 -mt-14 mx-2 sm:mx-10 lg:top-4 lg:relative">
            <div className="lg:w-96" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="300">
            <p className="sm:text-xl">Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
        <div className="flex justify-evenly lg:left-0 lg:relative">
            {/* <span data-aos="fade-right" data-aos-duration="1200" data-aos-delay="400" className="bg-[#101A24] px-6 py-2 rounded-tl-2xl rounded-br-2xl text-white shadow-zinc-800 shadow-lg sm:px-10 sm:py-4">Menu</span>
            <span data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" className="bg-[#EA6D27] px-6 py-2 rounded-tl-2xl rounded-br-2xl text-white shadow-zinc-800 shadow-lg sm:px-10 sm:py-4">Book a table</span> */}
            <Button />
        </div>
      </div>
          </div>
        </div>

        <div className='relative'>
          <div className='lg:hidden'>
            <h1 className='text-[#101A24] text-4xl font-bold ml-2 -mt-11 mb-16 sm:text-6xl sm:mb-24' data-aos="fade-in" data-aos-duration="1200" data-aos-delay="200">Welcome To Our Restuarant</h1>
            <InfoSec />
          </div>

          
            <img src="images/Group2.png" alt="" className='absolute left-0 w-32 -top-5'/>
            <img src="images/Group3.png" alt="" className='absolute top-0 right-0 w-32 scale-x-[-1]'/>
            <img src="images/Group5.png" alt="" className=''/>
            <img src="images/Group7.png" alt="" className='absolute top-64 left-32'/>
          
        </div>
      </div>
      </div>
    </div>
  )
}

export default SecondSec
