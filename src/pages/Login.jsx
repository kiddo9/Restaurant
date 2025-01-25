import { useEffect, useState } from "react";
import FormC from "../components/FormC";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";
import Urls from "../components/URL/Url"
import SuccessError from "../components/SuccessError";
import Axios from 'axios'
import Api from "../components/URL/Api"
import * as Yup from 'yup'
import Loader from "../components/Loader";

const guestLoginValidation = Yup.object().shape({
  guestId: Yup.string().required('Guest Id is needed')
})

const memberLoginValidation = Yup.object({
  MST: Yup.string().required('membership token'),
  password: Yup.string().required('password is required')
})

function Login() {

 const [Url, SetUrl] = useState('')
  const [Error, SetError] = useState(false);
  const [Success, SetSuccess] = useState(false);
  const [SuccessM, SetSuccessM] = useState(false);
  const [message, Setmessage] = useState('');
  const [loader, SetLoader] = useState(false)
  const navigation = useNavigate();

   useEffect(() => {
    const CurrentUrl = window.location.href;
     SetUrl(CurrentUrl)
   }, [])

   const url = Url;
   
   useEffect(() => {
    if(url == `${Urls}/Auth/Login/member`){

      const verifyToken = async() => {
        SetLoader(true)
        const token = localStorage.getItem('memberAuthToken')
        const verifyToken = await Axios.get(`${Api}/verifyToken`, {
          headers: {
            authorization: token
          }
        })
    
          if(verifyToken.data.success == true){
            sessionStorage.setItem('authMember', true)
            SetLoader(false)
            navigation('/Member/MembershipAccount')
          }else{
            navigation('/Auth/Login/member')
            SetLoader(false)
          }
      
        }
       
        verifyToken();
     }

  }, [url]); // Include `url` in the dependency array
  


   const LoginInit = {
    guestId: ''
   }

   const initValue = {
    MST: '',
    password: ''
   }

   const LoginGuest = async (value) => {
    SetLoader(true)
    const LoginRequest = await Axios.post(`${Api}/Auth`, value)
    try {
      SetLoader(false)
      if (LoginRequest.data.success == 'true'){
        SetSuccess(true)
        Setmessage(LoginRequest.data.message)
        sessionStorage.setItem('Auth', true)
        sessionStorage.setItem('upgradeAccountWithEmail', JSON.stringify(LoginRequest.data.email))
      }else{
        SetError(true)
        Setmessage(LoginRequest.data.message)
      }
    } catch (error) {
      SetLoader(false)
      Setmessage(LoginRequest.data.message)
    }
   }

   const LoginMember = async (value) => {
    SetLoader(true)
    const loginMember = await Axios.post(`${Api}/Auth/member`, value)
    try {
      SetLoader(false)
      if (loginMember.data.success == true){
        SetSuccessM(true)
        Setmessage(loginMember.data.message)
        sessionStorage.setItem('authMember', true)
        localStorage.setItem('memberAuthToken', loginMember.data.token)
      }else{
        SetError(true)
        Setmessage(loginMember.data.message)
      }
    } catch (error) {
      SetLoader(false)
      Setmessage(loginMember.data.message)
    }
   }


  return (
    <div className="xl:px-44">
      {loader && (
        <Loader />
      )}
      {url == `${Urls}/Auth/Login/guest` ? (
        <div className="flex justify-center mt-44">
        <FormC DefualtValue={LoginInit} FormSchema={guestLoginValidation} Submission={LoginGuest}>
          <FormInput Title='Guest Id' Type='text' ErrorStyle='text-red-500' FieldName='guestId' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 px-3 rounded-2xl'/>
          <button type="submit" className="text-center text-white font-bold w-full px-36 py-2 rounded-3xl mt-4 bg-[#EA6D27]">Log in</button>
        </FormC>
        </div>
      ) : url == `${Urls}/Auth/Login/member` ? (
        <div className="flex justify-center mt-44">
        <FormC DefualtValue={initValue} FormSchema={memberLoginValidation} Submission={LoginMember}>
          <FormInput Title='Membership Token' ErrorStyle='text-red-500' Type='text' FieldName='MST' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 px-3 rounded-2xl'/>
          <FormInput Title='Password' ErrorStyle='text-red-500' Type='password' FieldName='password' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 px-3 rounded-2xl'/>
          <button type="submit" className="text-center text-white font-bold w-full px-36 py-2 rounded-3xl mt-4 bg-[#EA6D27]">Log in</button>
        </FormC>
        </div>
      ) : '' }


    {
      Success && (
        <SuccessError Image='https://i.pinimg.com/originals/35/f3/23/35f323bc5b41dc4269001529e3ff1278.gif' style='bg-gray-50' message={message} click={() => navigation('/Guest/GuestAccount')} />
      )
     }

     {
      SuccessM && (
        <SuccessError Image='https://i.pinimg.com/originals/35/f3/23/35f323bc5b41dc4269001529e3ff1278.gif' style='bg-gray-50' message={message} click={() => navigation('/Member/MembershipAccount')} />
      )
     }

     {
      Error && (
        <SuccessError Image='https://media.lordicon.com/icons/wired/flat/38-error-cross-simple.gif' style='bg-white' message={message} click={() => SetError(false)} />
      )
     }
    </div>
  )
}

export default Login
