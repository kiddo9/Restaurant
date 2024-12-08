import { useNavigate } from "react-router-dom"
//import Loader from "../components/Loader"
//import { useEffect } from "react"


function AuthOption() {
    const Nav = useNavigate()

  return (
    <>
    {/* <Loader /> */}
      <div className="flex flex-col justify-center h-[80vh] sm:h-screen sm:-mt-24 text-black items-center">
        <button className="border border-[#101A24] w-52 sm:w-72 sm:py-7 sm:text-xl font-semibold rounded-full text-center text-[#101A24] py-3 px-2" onClick={() => Nav('/Auth/Signup')}>Sign up</button>
        <div className="flex items-center justify-center py-3">
          <div className="h-[1px] bg-black w-20 sm:w-36"></div>
          <p className="px-2">OR</p>
          <div className="h-[1px] bg-black w-20 sm:w-36"></div>
        </div>
        <button className="sm:w-72 sm:py-7 bg-[#EA6D27] sm:text-lg  w-52 font-semibold rounded-full text-center text-white py-3 px-2"  onClick={() => Nav('/Auth/Login')}>Sign IN</button>
      </div>
    </>
  )
}

export default AuthOption
