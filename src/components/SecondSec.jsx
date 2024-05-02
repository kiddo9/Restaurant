import Card from './Card'
import InfoSec from './InfoSec'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

function SecondSec() {
  useEffect (() => {
    AOS.init();
  }, [])

  return (
    <div className="relative pb-20 bg-gray-200">
      <div>
        <div className="flex justify-between">
            <img src="images/Group2.png" alt="" className="w-12" />
            <div className="flex flex-col justify-center">
                <h1 className="text-[#101A24] text-center font-serif text-3xl" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="700">Our Special Dishes</h1>
                <p className="text-[#5C6574] mt-8" data-aos="fade-in" data-aos-duration="1200" data-aos-delay="900">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt 
                </p>
            </div>
            <img src="images/Group3.png" alt="" className="w-12" />
        </div>
        <Card />
        <img src="images/Group4.png" alt="" className='absolute right-0' />
      <img src="images/Group6.png" alt="" className='mt-16 -ml-20 rotate-[-55deg]' />

      <div className='mt-10'>
        <div className='relative mb-20'data-aos="fade-right" data-aos-duration="1200" data-aos-delay="700">
        <img src="images/leaf-3.png" alt="" className='absolute z-10 rotate-45 w-28 right-12' />
        <img src="images/dish-2 2.png" alt="" className='relative' />
        <img src="images/leaf-3.png" alt="" className='absolute -rotate-45 w-28 top-28' />
        <img src="images/leaf-3.png" alt="" className='absolute w-28 top-56 right-14' />
        </div>

        <div className='relative'>
        <h1 className='text-[#101A24] text-4xl font-bold ml-2 -mt-11 mb-16' data-aos="fade-in" data-aos-duration="1200" data-aos-delay="200">Welcome To Our Restuarant</h1>
        <InfoSec />
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
