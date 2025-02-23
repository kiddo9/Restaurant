import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"

function GuestNav({name}) {

    const [menu, OpenMenu] = useState();

    const toggle = () => {
        OpenMenu(!menu)
    }

    const navigate = useNavigate()

  return (
    <div className="text-[#101A24]">

        <div className="flex py-2 bg-[#EA6D27] xl:w-full xl:justify-between">
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

                <p>{name}</p>
            </div>

            <div className="xl:hidden">
                {!menu ? (
                <div onClick={toggle} className="absolute right-0 cursor-pointer bg-[#EA6D27]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    </div>  
                    ) : (
                        <div onClick={toggle} className="z-[1000] fixed right-5 top-5 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 text-red-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    </div>
                    )}
            </div> 

            <div>
                <ul className="items-center hidden gap-6 pr-10 xl:flex">
                <li className="">
                    <NavLink to='/Guest/GuestAccount' className={({isActive}) => `${isActive ? 'xl:text-white' : ''}`}>Guest Menu</NavLink>
                </li>
                <li>
                    <NavLink to='/Guest/guesttable' className={({isActive}) => `${isActive ? 'xl:text-white' : ''}`}>Guest Tables</NavLink>
                </li>
                <li>
                    <NavLink to='/Guest/guestBooking' className={({isActive}) => `${isActive ? 'xl:text-white' : ''}`}>Booking</NavLink>
                </li>
                <li>
                    <NavLink to='/Guest/booking/details' className={({isActive}) => `${isActive ? 'xl:text-white' : ''}`}>view details</NavLink>
                </li>
                <li>
                    <NavLink to='/' className={({isActive}) => `${isActive ? 'xl:text-white' : ''}`}>Contact</NavLink>
                </li>
                <li className="text-md text-center ml-10 text-white bg-[#101A24] py-3 px-2 rounded-tl-2xl rounded-br-2xl">
                     <NavLink to={'/Auth/Signup/member'} className={`xl:text-white'`}>Upgrade to membershipAccount</NavLink>
                </li>

                <li onClick={() => {
                sessionStorage.removeItem('Auth');
                sessionStorage.removeItem('upgradeAccountWithEmail');
                navigate('/Auth/Login/guest')
            }}>
                    <div className="flex justify-center gap-3 cursor-pointer items-center bg-black text-white mx-2 mt-2 py-3 rounded-tr-2xl rounded-bl-2xl px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                        </svg>
                         Log out
                    </div>
                </li>
                </ul>
            </div>
        </div>

       
           <div className={`fixed transition duration-450 top-5 ease-in-out ${menu ? 'translate-y-0 translate-x-0' : '-translate-y-[150%] translate-x-[100%]'} right-2 rounded-xl overflow-hidden h-[23.5rem] w-[22rem] bg-gray-200 z-[900]`}>
            <ul className="flex flex-col items-start px-3 font-semibold gap-5 mt-5 text-xl h-[13rem]">
                <li onClick={toggle} className="">
                    <NavLink to='/Guest/GuestAccount' className={({isActive}) => `${isActive ? 'text-[#EA6D27]' : ''}`}>Guest Menu</NavLink>
                </li>
                <li onClick={toggle}>
                    <NavLink to='/Guest/guesttable' className={({isActive}) => `${isActive ? 'text-[#EA6D27]' : ''}`}>Guest Tables</NavLink>
                </li>
                <li onClick={toggle}>
                    <NavLink to='/Guest/guestBooking' className={({isActive}) => `${isActive ? 'text-[#EA6D27]' : ''}`}>Booking</NavLink>
                </li>
                <li onClick={toggle}>
                    <NavLink to='/Guest/booking/details' className={({isActive}) => `${isActive ? 'text-[#EA6D27]' : ''}`}>view details</NavLink>
                </li>
                <li>
                    <NavLink to='/' className={({isActive}) => `${isActive ? 'text-[#EA6D27]' : ''}`}>Contact</NavLink>
                </li>
            </ul>

            <div className="mx-2 mt-7">
                <p className="text-xl rounded-xl text-center text-white bg-[#EA6D27] py-3">
                    <NavLink to={'/Auth/Signup/member'} className={`text-[white]`}>Upgrade to membershipAccount</NavLink>
                </p>
            </div>

            <div className="flex justify-center gap-3 cursor-pointer items-center bg-black text-white mx-2 mt-2 py-3 rounded-xl" onClick={() => {
                sessionStorage.removeItem('Auth');
                sessionStorage.removeItem('upgradeAccountWithEmail');
                navigate('/Auth/Login/guest')
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                </svg>
                 Log out
            </div>
        </div> 
        
    </div>
  )
}

export default GuestNav
