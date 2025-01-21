import { useState } from "react"
import FormC from "../../components/FormC"
import Forminput from "../../components/FormInput"
//import useTables from "../../components/FetchData/tables"


function Mbooking() {
    const [book, setBook] = useState(false)
    const [history, sethistory] = useState(false)
    // const {tables, preLoad} = useTables()

    function openbook(){
      setBook(true)
    }

    function openhistory(){
      sethistory(true)
    }

    function CloseTab(){
      setBook(false)
      sethistory(false)
    }

  return (
    <div className="text-black">

      <div className={`flex gap-10 px-2 ${book || history ? 'hidden' : ''}`}>
        <button className="w-full mt-5  bg-[#EA6D27] px-6 py-2 rounded-tl-2xl rounded-br-2xl text-white shadow-zinc-800 shadow-lg sm:px-10 sm:py-4" onClick={openbook}>BOOK TABLE</button>
        <button className="w-full mt-5 bg-[#101A24] px-6 py-2 rounded-tl-2xl rounded-br-2xl text-white shadow-zinc-800 shadow-lg sm:px-10 sm:py-4" onClick={openhistory}>History</button> 
      </div>

      {book ? (
        <div className="px-2">
          <button onClick={CloseTab} className="fixed px-2 py-2 mt-2 text-white bg-red-500 rounded-full right-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</button>
         <>

    <div className="pt-14 md:mx-32 lg:mx-44 xl:mx-72">
      <FormC>
        <select className="w-full px-2 py-3 bg-transparent border border-black">
        <option value="Selete Table" disabled>select table</option>
          <option value="Couples">Couple&apos;s Table</option>
          <option value="Bar height">Bar height</option>
          <option value="Booths">Booths</option>
          <option value="Family Table">Family Table</option>
          <option value="outdoor Table">Outdoor Table</option>
        </select>
        <Forminput Title='first Name' Type='text' FieldName='firstname' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3' />
        <Forminput Title='first Name' Type='text' FieldName='firstname' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3' />
        <Forminput Title='first Name' Type='text' FieldName='firstname' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3' />
        <Forminput Title='first Name' Type='date' FieldName='firstname' Component='p' ContainerStyle='text-black flex flex-col' InputStyle='bg-white outline-none border border-black py-3' />
        <select className="w-full px-2 py-3 mt-3 bg-transparent border border-black">
        <option value="Select guest number" disabled>Select guest number</option>
          <option value="Couples">2</option>
          <option value="Bar height">4</option>
          <option value="Booths">8</option>
          <option value="Family Table">12</option>
          <option value="outdoor Table">16</option>
        </select>
        <select className="w-full px-2 py-3 mt-3 bg-transparent border border-black">
        <option value="Special Request" disabled>Special Request</option>
          <option value="Couples">Couple&apos;s Table</option>
          <option value="Bar height">Bar height</option>
          <option value="Booths">Booths</option>
          <option value="Family Table">Family Table</option>
          <option value="outdoor Table">Outdoor Table</option>
        </select>

        <button type="submit" className="text-center text-white font-bold w-full px-36 py-2 rounded-3xl mt-4 bg-[#EA6D27]">Book ($20)</button>
      </FormC>
    </div>
    </>
        </div>
      ) : history ? (
        <div>
          <button onClick={CloseTab} className="fixed px-2 py-2 mt-2 text-white bg-red-500 rounded-full right-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</button>
           <p>history</p>
        </div>
       
      ) : (
        <div className="flex flex-col items-center justify-center mt-6">
          <h1 className="text-3xl font-bold">Membership Booking</h1>
          <p>Table booking is always available for you. No time limit </p>

          <p className="px-3 mt-10">Note: After Making reservation and you are 30mins later your table will given out. Also if you miss your reservation date you won&apos;t get a refund if you have a reason to miss the date of reservation contact us 2 days before time</p>
        </div>
      )}

      
    </div>
  )
}

export default Mbooking

