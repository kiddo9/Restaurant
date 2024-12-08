import { useEffect, useState } from "react";
import FormC from "../components/FormC";
import FormInput from "../components/FormInput";
import Urls from "../components/URL/Url"
import * as Yup from 'yup'
import Axios from 'axios'
import Api from "../components/URL/Api";
import { useNavigate } from "react-router-dom";
import SuccessError from "../components/SuccessError";
import Loader from '../components/Loader'


// guest validation schema
const GuestFormValidation = Yup.object().shape({
  email: Yup.string().required('enter email')
})


// membership validation schema
const MembershipFormValidation = Yup.object().shape({
  email: Yup.string().required('please enter your email'),
  username: Yup.string().required('please enter a user name'),
  password: Yup.string().required('enter a secured password').min(10, 'Enter at least 10 character'),
  cpassword: Yup.string().required('Re-enter password').oneOf([Yup.ref('password'), null], 'password is not matching')
}) 

function Signup() {
  const [Url, SetUrl] = useState('');
  const [Error, SetError] = useState(false);
  const [Success, SetSuccess] = useState(false);
  const [message, Setmessage] = useState('');
  const [loader, SetLoader] = useState(false)
  const navigation = useNavigate();

  useEffect(() => {
   const CurrentUrl = window.location.href;
    SetUrl(CurrentUrl)
  }, [])

  const url = Url;

  // Guest Registration logics and request

  const GuestFormDefualt = {
    email: ''
  }

  const GuestSubmittion = async(values, {setSubmitting}) => {
    SetLoader(true)
    const SendRequest = await Axios.post(`${Api}/GuestRegistration`, values)
    try {
      
      let Status = SendRequest.data.success

      SetLoader(false)
      if(Status == 'true'){
        SetSuccess(true)
      }else if (SendRequest.data.Exist == 'true'){
        SetError(true)
        Setmessage('Email Has Been Taken By Anothet Guest')
      }else{
        SetError(true)
        Setmessage('Error 500. Internal server error')
      }
    } catch (error) {
      console.log(error);
    } finally{
      setSubmitting(false)
    }
  }


  // Membership Registration logic's and request
  const MembershipInit = {
    email: '',
    username: '',
    password: '',
    cpassword: ''
  }

  const MembershipRegistration = async(values) =>  {
    SetLoader(true)
    const MemberRequest = await Axios.post(`${Api}/api/v1/membershipReg`, values)
    try {
      SetLoader(false)
      console.log('ok', MemberRequest);
      
    } catch (error) {
      console.log(error);
      
    }
  }


 return (
   <div className="xl:px-44">
    {loader &&(
      <Loader />
    )}
     {url == `${Urls}/Auth/Signup/guest` ? (
       <div className="flex justify-center mt-44">
        <FormC DefualtValue={GuestFormDefualt} FormSchema={GuestFormValidation} Submission={GuestSubmittion}>
         <FormInput Title='Email' Type='email' FieldName='email' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl' ErrorStyle='text-red-500 open'/>
         <button type="submit" className="text-center text-white font-bold w-full px-36 py-2 rounded-3xl mt-4 bg-[#EA6D27]">Be our guest</button>
       </FormC> 
       </div>
     ) : url == `${Urls}/Auth/Signup/member` ? (
      <div className="flex justify-center gap-3 mt-44">
      <FormC DefualtValue={MembershipInit} FormSchema={MembershipFormValidation} Submission={MembershipRegistration}>
        <FormInput Title='Email' Type='email' ErrorStyle='text-red-500' FieldName='email' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
        <FormInput Title='Username' Type='username' ErrorStyle='text-red-500' FieldName='username' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
        <FormInput Title='Password' Type='password' ErrorStyle='text-red-500' FieldName='password' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
        <FormInput Title='Re-enter password' Type='password' ErrorStyle='text-red-500' FieldName='cpassword' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
        <button type="submit" className="text-center text-white font-bold w-full px-36 py-2 rounded-xl mt-4 bg-[#EA6D27]">Become a member</button>
      </FormC>
      </div>
     ) : '' }

     {
      Success && (
        <SuccessError Image='https://i.pinimg.com/originals/35/f3/23/35f323bc5b41dc4269001529e3ff1278.gif' style='bg-gray-50' message='Resgistration Successful. Your Guest Id will be sent to your email. Click OK to Proceed' click={() => navigation('/Auth/Login/guest')} />
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

export default Signup
