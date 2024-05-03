import Button from "./Button"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react"

function InfoSec() {
  useEffect (() => {
    AOS.init();
  }, [])

  return (
    <div>
            <div className="text-[#5C6574] flex flex-col gap-10 -mt-14 mx-2 sm:mx-10 lg:-top-[40rem] lg:relative xl:-top-[53rem] 2xl:-top-[44rem]">
        <div className="lg:w-96" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="300">
            <p className="sm:text-xl">Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
            </p>
        </div>
       <Button />
      </div>
    </div>
  )
}

export default InfoSec
