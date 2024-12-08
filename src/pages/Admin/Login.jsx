import { useState } from "react"
import FormC from "../../components/FormC"
import FormInput from "../../components/FormInput"

function Login(){

    const [Admin, SetAdmin] = useState(false)
    const [Staff, SetStaff] = useState(false)

    const CloseOptions = () => {
        SetAdmin(false)   
        SetStaff(false)
    }

    return (
        <>
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
        
        


        <div className={`text-black mx-auto ${Admin == true || Staff == true ? 'w-[23rem] h-[31rem] px-3 my-36' : 'w-80'}  h-60 shadow-xl md:w-[34rem] md:h-[40rem] xl:h-[30rem] shadow-gray-600 mt-10 border border-gray-500 rounded-xl`}>
            {Admin == false && Staff == false ? (
                <div className="justify-center flex flex-col mt-10 md:mt-52 xl:mt-40 mx-10">
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
                <FormC>
                <FormInput Title='Master Keyword' Type='text' FieldName='guestid' Component='p' ContainerStyle='text-black flex flex-col mb-4' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
                <FormInput Title='Admin Email' Type='text' FieldName='guestid' Component='p' ContainerStyle='text-black flex flex-col mb-4' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
                <FormInput Title='Password' Type='text' FieldName='guestid' Component='p' ContainerStyle='text-black flex flex-col mb-4' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
                <button type="submit" className="text-center text-white font-bold w-full px-28  py-3 rounded-3xl mt-4 bg-[#EA6D27]">Log in</button>
              </FormC>
              <div className="flex justify-center mt-16 text-blue-400 cursor-point w-full">
                <button className="text-center">Forgotten Password and Master Keyword?</button>
              </div>
              </>
            )}
            
            {Staff == true && (
            <>
            <FormC>
            <select name="" id="" className="w-full mt-4 py-3 rounded-xl bg-transparent border border-black">
                <option value="Witer">Witter</option>
                <option value="Witeress">Witeress</option>
                <option value="Master chef">Master chef</option>
                <option value="Assistance Checf">Assistance Checf</option>
                <option value="Others">others</option>
            </select>
            <FormInput Title='Email' Type='text' FieldName='guestid' Component='p' ContainerStyle='text-black flex flex-col mb-4' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
            <FormInput Title='Password' Type='text' FieldName='guestid' Component='p' ContainerStyle='text-black flex flex-col mb-4' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
            <button type="submit" className="text-center text-white font-bold w-full px-28  py-3 rounded-3xl mt-4 bg-[#EA6D27]">Log in</button>
          </FormC>
          <div className="flex justify-center mt-16 text-blue-400 cursor-point w-full">
            <button className="text-center">Forgotten Password?</button>
          </div>
          </>
        )}
        </div>
        </>
    )
}

export default Login