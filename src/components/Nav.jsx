import { useState } from "react"

function Nav() {
  const [IsMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!IsMenuOpen);
  }

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="flex flex-col">
        <div className="flex justify-center mx-auto">
            <img src="images/logo 1.png" alt="" /> <h1 className="relative -bottom-6 text-2xl font-sans font-semibold text-[#101A24]">restaurant</h1>
        </div>

        <nav className="flex justify-between mx-3 mt-4">
            <div className="text-[#101A24]">


         
            <div className="hamburger" onClick={toggleMenu}>
              <input className="checkbox" type="checkbox" />
                <svg fill="none" viewBox="0 0 50 50" height="50" width="50">
                  <path
                    className="lineTop line"
                    strokeLinecap="round"
                    strokeWidth="4"
                    stroke="black"
                    d="M6 11L44 11"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeWidth="4"
                    stroke="black"
                    d="M6 24H43"
                    className="lineMid line"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeWidth="4"
                    stroke="black"
                    d="M6 37H43"
                    className="lineBottom line"
                  ></path>
                </svg>
          </div>



                {IsMenuOpen && (
                   <ul className={`fixed bottom-0 left-0 right-0 flex flex-col gap-10 px-4 py-4 bg-white top-[7.5rem] transition-transform ${IsMenuOpen ? '-translate-x-0 duration-1000' : 'translate-x-full'}`}>
                    <li className="py-4 text-xl border-b-4 border-[#101A24]">Menu</li>
                    <li className="py-4 text-xl border-b-4 border-[#101A24]">Events</li>
                    <li className="py-4 text-xl text-[#EA6D27] border-b-4 border-[#EA6D27]">Gallery</li>
                    <li className="py-4 text-xl border-b-4 border-[#101A24]">About</li>
                    <li className="py-4 text-xl border-b-4 border-[#101A24]">Contact</li>
                  </ul>
                )}  
                
                   
            </div>

            <div className="bg-[#EA6D27] px-3 py-2 rounded-tl-2xl rounded-br-2xl">
                <button className="my-auto text-sm font-semibold">Book a table</button>
            </div>
        </nav>
      </div>
    </div>
  )
}

export default Nav
