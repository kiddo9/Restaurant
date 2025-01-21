import Axios  from "axios";
import { useState } from "react"
import Api from "../../components/URL/Api";
import { useNavigate, useParams } from "react-router-dom";
import SuccessError from "../../components/SuccessError";
import Loader from "../../components/Loader";



const OtpValidation = () => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)
    const [minisuccess, setMiniSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [token, setToken] = useState('')
    const [Input, setInput] = useState(["", "", "", "", "", "" ])
    const params = useParams()

    const handleInput = (e, index) => {
        const newInputs = [...Input];
        newInputs[index] = e.target.value;

        if (index !== "") {
            const next = e.target.nextElementSibling;

                if (next) {
                    next.focus();
                }
        }else{
            return e.target.value = ''
        }
                

        setInput(newInputs)
}

const handleKeyUp = (e) => {
    const target = e.target;
    const key = e.key.toLowerCase();

    if (key == "backspace" || key == "delete") {
      target.value = "";
      const prev = target.previousElementSibling;
      if (prev) {
        prev.focus();
      }
      return;
    }
  };

  const otp =  Input.join("");
  const nav = useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault()
    setLoading(true)
    const {token} = params
    const validate = await Axios.post(`${Api}/admin/otp/verify/${token}`, {otp})

    try {
      
      if(validate.data.success == true){
        setSuccess(true)
        setMessage(validate.data.message)
        setToken(validate.data.Token)
      }else{
        setError(true)
        setMessage(validate.data.message)
      }
    } catch (error) {
      setError(true)
      setMessage(validate.data.message)
    }finally{
      setLoading(false)
      setInput(["", "", "", "", "", "" ])
    }
  }

  const resendOtp = async () => {
    setLoading(true)
    const {token} = params
    
    const resendOtp = await Axios.post(`${Api}/otp/resend/${token}`)

    if(resendOtp.data.success == true){
      setMiniSuccess(true)
      setLoading(false)

      const timer = setTimeout(() => {
        setMiniSuccess(false)
      }, 10000)

      return () => clearTimeout(timer)
    }else{
      setMiniSuccess(false)
      setLoading(false)
      setError(true)
      setMessage('unable to send otp')
    }

  }

 

  return (
    <div >

        <div className="mt-56">
            <h1 className="text-black text-center  font-bold text-xl">OTP VALIDATION</h1>
            <p className="text-black text-center">enter the otp token that was sent to your email for validation</p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center mt-5" action="">

            <div className="gap-2 flex text-center flex-row justify-center py-3 px-3">
                {Input.map((input, index) => (
                    <input 
                    onChange={(e)=> handleInput(e, index)}
                    key={index} 
                    value={input} 
                    maxLength={1}
                    type="text" 
                    onKeyUp={(e) => handleKeyUp(e)}
                    className='w-14 h-11 text-lg rounded-md text-center bg-[#EA6D27] text-white ' />
                ))} 
            </div>
           

            <button type="submit" className="text-center text-white font-bold w-28 flex justify-center items-center px-28  py-3 rounded-xl mt-4 bg-black">verify</button>
        </form>

        <div className="flex justify-center text-black mt-4">
          {minisuccess == true ? (
            <p className="text-green-500">otp sent!!</p>
          ): (
            <button onClick={resendOtp} className="flex gap-3 text-lg items-center">resend<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
            </button>
          )}
            
        </div>

        {
           success && (
           <SuccessError Image='https://i.pinimg.com/originals/35/f3/23/35f323bc5b41dc4269001529e3ff1278.gif' style='bg-gray-50' message={message} click={() => {nav(`/resetpassword/${token}`), setSuccess(false)}} />
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

export default OtpValidation