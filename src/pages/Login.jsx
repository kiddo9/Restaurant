import { useEffect, useState } from "react";
import FormC from "../components/FormC";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";
import Urls from "../components/URL/Url"
//import * as Yup from 'yup'

function Login() {

 const [Url, SetUrl] = useState('')

   useEffect(() => {
    const CurrentUrl = window.location.href;
     SetUrl(CurrentUrl)
   }, [])

   const url = Url;

   const navigate = useNavigate();


  return (
    <div className="xl:px-44">
      {url == `${Urls}/Auth/Login/guest` ? (
        <div className="flex justify-center mt-44">
        <FormC>
          <FormInput Title='Guest Id' Type='text' FieldName='guestid' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
          <button type="submit" className="text-center text-white font-bold w-full px-36 py-2 rounded-3xl mt-4 bg-[#EA6D27]" onClick={() => navigate(`/dashbored/${'GuestAccount'}`)}>Log in</button>
        </FormC>
        </div>
      ) : url == `${Urls}/Auth/Login/member` ? (
        <div className="flex justify-center mt-44">
        <FormC>
          <FormInput Title='Membership Token' Type='text' FieldName='MST' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
          <FormInput Title='Password' Type='password' FieldName='password' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
          <button type="submit" className="text-center text-white font-bold w-full px-36 py-2 rounded-3xl mt-4 bg-[#EA6D27]" onClick={() => navigate(`/dashbored/${'MembershipAccount'}`)}>Log in</button>
        </FormC>
        </div>
      ) : '' }
    </div>
  )
}

export default Login
