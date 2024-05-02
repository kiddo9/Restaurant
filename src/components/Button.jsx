import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

function Button() {
  useEffect (() => {
    AOS.init();
  }, [])

  return (
    <div>
       <div className="flex justify-evenly">
            <span data-aos="fade-right" data-aos-duration="1200" data-aos-delay="400" className="bg-[#101A24] px-6 py-2 rounded-tl-2xl rounded-br-2xl text-white shadow-zinc-800 shadow-lg">Menu</span>
            <span data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" className="bg-[#EA6D27] px-6 py-2 rounded-tl-2xl rounded-br-2xl text-white shadow-zinc-800 shadow-lg">Book a table</span>
        </div>
    </div>
  )
}

export default Button
