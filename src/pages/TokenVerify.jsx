import FormC from "../components/FormC";
import FormInput from "../components/FormInput";

function TokenVerify() {
  return (
    <div className="flex justify-center mt-44">
     <FormC>
          <FormInput Title='Verification Token' Type='text' FieldName='token' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3 rounded-2xl'/>
          <button type="submit" className="text-center text-white font-bold w-full px-36 py-2 rounded-3xl mt-4 bg-[#EA6D27]">Verify</button>
        </FormC>
    </div>
  )
}

export default TokenVerify
