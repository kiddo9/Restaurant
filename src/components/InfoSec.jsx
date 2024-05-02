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
            <div className="text-[#5C6574] flex flex-col gap-10 -mt-14 mx-2">
        <div data-aos="fade-down" data-aos-duration="1200" data-aos-delay="300">
            <p>Lorem ipsum dolor sit amet, consectetur 
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
