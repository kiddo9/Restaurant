import { useEffect, useState } from "react";
import FormC from "../components/FormC";
import FormInput from "../components/FormInput";
import Urls from "../components/URL/Url"

function Signup() {
  const [Url, SetUrl] = useState('')

  useEffect(() => {
   const CurrentUrl = window.location.href;
    SetUrl(CurrentUrl)
  }, [])

  const url = Url;



 return (
   <div className="xl:px-44">
     {url == `${Urls}/Auth/Signup/guest` ? (
       <div className="flex justify-center mt-44">
       <FormC>
         <FormInput Title='Email' Type='email' FieldName='email' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
         <button type="submit" className="text-center text-white font-bold w-full px-36 py-2 rounded-3xl mt-4 bg-[#EA6D27]">Be our guest</button>
       </FormC>
       </div>
     ) : url == `${Urls}/Auth/Signup/member` ? (
      <div className="flex justify-center gap-3 mt-44">
      <FormC>
        <FormInput Title='Email' Type='email' FieldName='email' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
        <FormInput Title='Username' Type='username' FieldName='username' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
        <FormInput Title='Password' Type='password' FieldName='password' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
        <FormInput Title='Re-enter password' Type='password' FieldName='password' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
        <button type="submit" className="text-center text-white font-bold w-full px-36 py-2 rounded-3xl mt-4 bg-[#EA6D27]">Become a member</button>
      </FormC>
      </div>
     ) : '' }
   </div>
 )
}

export default Signup
