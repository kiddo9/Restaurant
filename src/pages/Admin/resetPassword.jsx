import { useNavigate, useParams } from "react-router-dom"
import FormC from "../../components/FormC"
import FormInput from "../../components/FormInput"
import Loader from "../../components/Loader"
import SuccessError from "../../components/SuccessError"
import * as Yup from "yup"
import { useState } from "react"
import Axios from "axios"
import Api from "../../components/URL/Api"

const passwordValidation = Yup.object({
    pwd: Yup.string().required('enter a password').min(5),
    cpwd: Yup.string().oneOf([Yup.ref('pwd'), null], "password those not match").required('confirm youe password')
})

const ResetPassword = () => {
        const [loading, setLoading] = useState(false)
        const [message, setMessage] = useState('')
        const [success, setSuccess] = useState(false)
        const [error, setError] = useState(false)
    
       // const params = useParams()
        const nav = useNavigate()
    
        const initPwd = {
            pwd: '',
            cpwd: ''
        }

        const params = useParams()

        const handleResetPassword = async(values, {resetForm}) => {
            setLoading(true)
            const {token} = params
            const setPassword = await Axios.post(`${Api}/staff/resetpassword/${token}`, values)
            try {
                
                if(setPassword.data.success == true){
                    setSuccess(true)
                    setMessage(setPassword.data.message)
                }else{
                    setError(true)
                    setMessage(setPassword.data.message)
                }
                
            } catch (error) {
                console.log("eror occured", error);
                setError(true)
                setMessage(setPassword.data.message)
            }finally{
              resetForm() 
              setLoading(false)
            }
            
        }

  return (
    <div>
    <div className="flex justify-center items-center mx-auto">
            <img src="/public/images/logo 1.png" alt="" className="mt-2" /> <h1 className="relative -bottom-6 text-2xl font-sans font-semibold text-[#101A24]">restaurant</h1>
    </div>

   <FormC DefualtValue={initPwd} Submission={handleResetPassword} FormSchema={passwordValidation} Style={`mt-32 mx-3 sm:mx-10 md:mx-28 lg:mx-44 xl:mx-56 2xl:mx-64` }>
       <FormInput Title={'Password'} Type={'password'} ErrorStyle='text-red-500' FieldName='pwd' Component='p' ContainerStyle='text-black flex flex-col mt-3' InputStyle='bg-white outline-none p-3 border border-black py-3 rounded-2xl' />
       <FormInput Title={'Re-Password'} Type={'password'} ErrorStyle='text-red-500' FieldName='cpwd' Component='p' ContainerStyle='text-black flex flex-col mt-3' InputStyle='bg-white outline-none p-3 border border-black py-3 rounded-2xl' />
       <button type="submit" className=" text-center py-2 px-2 bg-black text-white rounded-xl w-full mt-3">reset</button>
   </FormC>


   {
           success && (
           <SuccessError Image='https://i.pinimg.com/originals/35/f3/23/35f323bc5b41dc4269001529e3ff1278.gif' style='bg-gray-50' message={message} click={() => {nav(`/Auth/Admin`), setSuccess(false)}} />
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

export default ResetPassword