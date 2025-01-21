import { useEffect, useState } from "react"
import FormC from "../../components/FormC"
import FormInput from "../../components/FormInput"
import { useNavigate } from "react-router-dom"
import * as Yup from "yup"
import Axios from "axios"
import Api from "../../components/URL/Api"
import Loader from "../../components/Loader"
import SuccessError from "../../components/SuccessError"

//admin form validation
const AdminValidation = Yup.object({
    email: Yup.string().required("please enter your email"),
    password: Yup.string().required('password is missing')
})

function Login(){

    

    const [Admin, SetAdmin] = useState(false)
    const [Staff, SetStaff] = useState(false)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        const verify = async() => {
          try {
            const token = localStorage.getItem('adminAuth')

            if(token){
                setFlag(true)
               const verify = await Axios.get(`${Api}/tokenverify`,{
                headers:{
                  authurization: token
                }
              })

              if(verify.data.success == true){
                sessionStorage.setItem("adminAuth", true)

                Navigate('/Admin/Dashbored')
              } 
            }else{
                setFlag(false)
            }
            

            } catch (error) {
              console.log(error);
              localStorage.clear()
              sessionStorage.clear()
              setFlag(false)
            }
        }
        verify()
    
      }, [])

    const Navigate = useNavigate()

    const CloseOptions = () => {
        SetAdmin(false)   
        SetStaff(false)
    }

    const adminInitValue = {
        email: '',
        password:''
    }

    const logInAdmin = async (values) => {
        setLoading(true)
        try {
            const logAdmin = await Axios.post(`${Api}/login/admin`, values)
            
            if(logAdmin.data.success == true){
                setSuccess(true)
                setMessage(logAdmin.data.message)
                localStorage.setItem('adminAuth', logAdmin.data.Token)
                sessionStorage.setItem('adminAuth', "true")
            }else{
                setError(true)
                setMessage(logAdmin.data.message)
            }
            
        } catch (error) {
            console.log(error);
            setError(true)
            setMessage('something went wrong')
        }finally{
            setLoading(false)
        }
    }

    const logInStaff = async (values) => {
        setLoading(true)
        try {
            const logAdmin = await Axios.post(`${Api}/login/staff`, values)
            
            if(logAdmin.data.success == true){
                setSuccess(true)
                setMessage(logAdmin.data.message)
                localStorage.setItem('adminAuth', logAdmin.data.Token)
                sessionStorage.setItem('adminAuth', "true")
            }else{
                setError(true)
                setMessage(logAdmin.data.message)
            }
            
        } catch (error) {
            console.log(error);
            setError(true)
            setMessage('something went wrong')
        }finally{
            setLoading(false)
        }
    }
    return (
        <div className={`${flag == true ? 'hidden' : 'block'}`}>
        <div className="flex justify-center items-center mx-auto mt-20">
            <img src="/public/images/logo 1.png" alt="" /> <h1 className="relative -bottom-6 text-2xl font-sans font-semibold text-[#101A24]">restaurant</h1>
        </div>

        {Admin == true || Staff == true ? (
            <div className="fixed right-2 md:right-20 xl:right-52 bg-red-500 w-10 h-10 justify-center flex items-center rounded-xl top-24" onClick={CloseOptions}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
        ) : ''}
        
        


        <div className={`text-black mx-auto ${Admin == true || Staff == true ? 'w-[23rem] h-[31rem] px-3 my-36' : 'w-80'}  h-60 shadow-xl md:w-[34rem] md:h-[30rem] xl:h-[30rem] shadow-gray-600 mt-10 border border-gray-500 rounded-xl`}>
            {Admin == false && Staff == false ? (
                <div className="justify-center flex flex-col mt-10 md:mt-36 xl:mt-40 mx-10">
                    <button className="bg-[#EA6D27] py-3 rounded-lg mb-4" onClick={() => SetAdmin(true)}>Admin Master</button>

                        <div className="flex items-center gap-5">
                            <div className="h-1 bg-gray-400 w-52"></div>
                            <p>OR</p>
                            <div className="h-1 bg-gray-400 w-52"></div>
                        </div>

                    <button className="bg-[#101A24] py-3 text-white rounded-lg mt-4" onClick={() => SetStaff(true)}>Staff</button>
                </div>
            ) : ''}


            {Admin == true && (
            <>
                <FormC Submission={logInAdmin} DefualtValue={adminInitValue} FormSchema={AdminValidation}>
                <FormInput Title='Admin Email' Type='email' FieldName='email' Component='p'  ErrorStyle={'text-red-500'} ContainerStyle='text-black flex flex-col mb-4' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
                <FormInput Title='Password' Type='password' FieldName='password' Component='p' ErrorStyle={'text-red-500'} ContainerStyle='text-black flex flex-col mb-4' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
                <button type="submit" className="text-center text-white font-bold w-full px-28  py-3 rounded-3xl mt-4 bg-[#EA6D27]">Log in</button>
              </FormC>
              <div className="flex justify-center mt-16 text-blue-400 cursor-point w-full" onClick={() => Navigate(`/forgottonPassword/admin`)}>
                <button className="text-center">Forgotten Password ?</button>
              </div>
              </>
            )}
            
            {Staff == true && (
            <>
            <FormC Submission={logInStaff} DefualtValue={adminInitValue} FormSchema={AdminValidation}>
            
            <FormInput Title='Email' Type='text' FieldName='email' Component='p' ContainerStyle='text-black flex flex-col mb-4' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl' ErrorStyle={'text-red-500'}/>
            <FormInput Title='Password' Type='text' FieldName='password' Component='p' ContainerStyle='text-black flex flex-col mb-4' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl' ErrorStyle={'text-red-500'}/>
            <button type="submit" className="text-center text-white font-bold w-full px-28  py-3 rounded-3xl mt-4 bg-[#EA6D27]">Log in</button>
          </FormC>
          <div className="flex justify-center mt-16 text-blue-400 cursor-point w-full" onClick={() => Navigate(`/forgottonPassword/admin`)}>
            <button className="text-center" >Forgotten Password?</button>
          </div>
          </>
        )}
        </div>

        {
                success && (
                <SuccessError Image='https://i.pinimg.com/originals/35/f3/23/35f323bc5b41dc4269001529e3ff1278.gif' style='bg-gray-50' message={message} click={() => {Navigate(`/Admin/Dashbored`), setSuccess(false)}} />
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

export default Login