import Axios from "axios"
import FormC from "../../components/FormC"
import FormInput from "../../components/FormInput"
import * as Yup from "yup"
import Api from "../../components/URL/Api"
import SuccessError from "../../components/SuccessError"
import Loader from "../../components/Loader"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const emailValidation = Yup.object({
  email: Yup.string().required('enter email for verification')
})

const Forgotton = () => {

  const initValue = {
    email: ''
  }

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [token, setToken] = useState('')

  const handleEmailVerification = async(value) => {
    setLoading(true)
    const verify = await Axios.post(`${Api}/admin/email/verify`, value)
    const response = verify.data
    try {
      if(response.success == true){
        setSuccess(true)
        setMessage(response.message)
        setToken(response.token)
      }else{
        setError(true)
        setMessage(response.message)
      }
    } catch (error) {
      console.log();
      
    }finally{
      setLoading(false)
    }
  }

  const nav = useNavigate()
  return (
    <div>
         <div className="flex justify-center items-center mx-auto mt-20">
            <img src="/images/logo 1.png" alt="" /> <h1 className="relative -bottom-6 text-2xl font-sans font-semibold text-[#101A24]">restaurant</h1>
        </div>

        <FormC Style={`mx-auto px-6 mt-20 sm:px-36 md:px-56 lg:px-72 xl:px-96`} Submission={handleEmailVerification} FormSchema={emailValidation} DefualtValue={initValue}>
            
            <FormInput Title='Email for verification' Type='text' FieldName='email' Component='p' ErrorStyle={'text-red-500'} ContainerStyle='text-black flex flex-col mb-4' InputStyle='bg-white px-3 py-3 outline-none border border-black py-3 rounded-2xl'/>
            <button type="submit" className="text-center text-white font-bold w-full px-28  py-3 rounded-3xl mt-4 bg-[#EA6D27]">Verify</button>
          </FormC>

          {
           success && (
           <SuccessError Image='https://i.pinimg.com/originals/35/f3/23/35f323bc5b41dc4269001529e3ff1278.gif' style='bg-gray-50' message={message} click={() => {nav(`/otp/validate/${token}`), setSuccess(false)}} />
           )
       }

       {
           error && (
               <SuccessError Image='https://media.lordicon.com/icons/wired/flat/38-error-cross-simple.gif' style='bg-white' message={message} click={() => setError(false)} />
           )
       }

   {
       loading && (
           <Loader />
       )
   }
    </div>
  )
}

export default Forgotton