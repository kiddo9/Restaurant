//import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

function Option() {

  // const [Url, SetUrl] = useState('')

  // useEffect(() => {
  //  const CurrentUrl = window.location.href;
  //  SetUrl(CurrentUrl)
  // }, [])

  // const url = Url;

  const Nav = useNavigate();
  let member = 'member'
  let guest = 'guest'

  const AuthCustomers = (id) => {
    Nav(`${id}`)
  }

  return (
    <>
    {/* <div className="text-red-700"></div> */}
      <div className="flex flex-col justify-center h-[80vh] sm:h-screen sm:-mt-24 text-black items-center">
        <button className="bg-[#EA6D27] w-52 sm:w-72 sm:py-7 sm:text-xl font-semibold rounded-full text-center text-white py-3 px-2" onClick={() => AuthCustomers(member)}>Member</button>
        <div className="flex items-center justify-center py-3">
          <div className="h-[1px] bg-black w-20 sm:w-36"></div>
          <p className="px-2">OR</p>
          <div className="h-[1px] bg-black w-20 sm:w-36"></div>
        </div>
        <button className="border sm:w-72 sm:py-7  sm:text-lg border-[#101A24] w-52 font-semibold rounded-full text-center text-[#101A24] py-3 px-2" onClick={() => AuthCustomers(guest)}>Guest</button>
      </div>
    </>
  )
}

export default Option
