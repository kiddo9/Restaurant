import { useState } from "react"
import { NavLink } from "react-router-dom"

function MemberNav({name}) {

    const [menu, OpenMenu] = useState();

    const toggle = () => {
        OpenMenu(!menu)
    }

  return (
    <div className="text-[#101A24]">

        <div className="flex py-4 bg-[#101A24] xl:w-full xl:justify-between">
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-500 size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

                <p className="text-gray-500">{name}</p>
            </div>

            <div className="xl:hidden">
                {!menu ? (
                <div onClick={toggle} className="absolute right-0 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-500 size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    </div>  
                    ) : (
                        <div onClick={toggle} className="z-[1000] fixed right-0 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-gray-500 size-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    </div>
                    )}
            </div> 

            <div>
                <ul className="items-center hidden gap-6 py-5 pr-10 text-gray-300 xl:flex">
                <li className="text-[#EA6D27]">
                    <NavLink to='/dashbored/MembershipAccount'>Menu</NavLink>
                </li>
                <li>
                    <NavLink to='/Memeber/table'>Tables</NavLink>
                </li>
                <li>
                    <NavLink to='/memeber/Booking'>Booking</NavLink>
                </li>
                <li>
                    <NavLink to=''>Exclusive Offers</NavLink>
                </li>
                <li>
                    <NavLink to=''>Contact</NavLink>
                </li>
                <li>
                    <NavLink to=''>Profile </NavLink>
                </li>
                <li>
                    <NavLink to=''>Invite Friends</NavLink>
                </li>
                </ul>
            </div>
        </div>
       
        
        

        {menu && (
           <div className={`fixed top-0 h-full w-full bg-[#101A24] z-[900]`}>
            <ul className="flex flex-col items-center font-semibold gap-10 mt-20 text-gray-300 text-xl h-[30rem]">
                <li className="text-[#EA6D27]">
                    <NavLink to='/dashbored/GuestAccount'>Menu</NavLink>
                </li>
                <li>
                    <NavLink to='/Member/table'>Tables</NavLink>
                </li>
                <li>
                    <NavLink to='/member/booking'>Booking</NavLink>
                </li>
                <li>
                    <NavLink to=''>Exclusive Offers</NavLink>
                </li>
                <li>
                    <NavLink to=''>Contact</NavLink>
                </li>
                <li>
                    <NavLink to=''>Profile </NavLink>
                </li>
                <li>
                    <NavLink to=''>Invite Friends</NavLink>
                </li>
            </ul>
        </div> 
        )}
    </div>
  )
}

export default MemberNav