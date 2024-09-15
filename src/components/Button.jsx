import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"
import { useNavigate } from 'react-router-dom';

function Button() {
  useEffect (() => {
    AOS.init();
  }, [])

  const Nav = useNavigate();
   function Booking(){
    Nav('/Auth')
   }

   function Menu(){
    
   }

  return (
    <div>
       <div className="flex justify-evenly lg: lg:relative lg:w-96">
            <button onClick={Menu} data-aos="fade-right" data-aos-duration="1200" data-aos-delay="400" className="bg-[#101A24] px-6 py-2 rounded-tl-2xl rounded-br-2xl text-white shadow-zinc-800 shadow-lg sm:px-10 sm:py-4">Menu</button>
            <button onClick={Booking} data-aos="fade-up" data-aos-duration="1200" data-aos-delay="400" className="bg-[#EA6D27] px-6 py-2 rounded-tl-2xl rounded-br-2xl text-white shadow-zinc-800 shadow-lg sm:px-10 sm:py-4">Book a table</button>
        </div>
    </div>
  )
}

export default Button
