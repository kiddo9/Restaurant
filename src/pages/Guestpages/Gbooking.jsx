import { useState } from "react"
import FormC from "../../components/FormC"
import Forminput from "../../components/FormInput"
import useTables from "../../components/FetchData/tables"
import Loader from "../../components/Loader"

function Gbooking() {
    const [book, setBook] = useState(false)
    const [history, sethistory] = useState(false)
    const {tables, preLoad} = useTables()

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
      {preLoad && (
        <Loader />
      )}

      <div className={`flex gap-10 px-2 ${book || history ? 'hidden' : ''}`}>
        <button className="w-full mt-5 bg-[#101A24] px-6 py-2 rounded-tl-2xl rounded-br-2xl text-white shadow-zinc-800 shadow-lg sm:px-10 sm:py-4" onClick={openbook}>BOOK TABLE</button>
        <button className="w-full mt-5 bg-[#EA6D27] px-6 py-2 rounded-tl-2xl rounded-br-2xl text-white shadow-zinc-800 shadow-lg sm:px-10 sm:py-4" onClick={openhistory}>History</button> 
      </div>

      {book ? (
        <div className="px-2">
          <button onClick={CloseTab} className="fixed px-2 py-2 mt-2 text-white bg-red-500 rounded-full right-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
</button>
         <>

    <div className="pt-14 md:mx-32 lg:mx-44 xl:mx-72">
      <FormC Style={'mt-3 pb-20'}>
        <select className="w-full px-2 py-3 rounded-xl bg-transparent border border-black">
        <option value="Selete Table" disabled>select table</option>
        {tables.map((table) => (
            table.tableType == "guest" && (
              <option key={table.id} value={table.tableName}>{table.tableName}</option>
            )
          ))}

        </select>
        <Forminput Title='first Name' Type='text' FieldName='firstname' Component='p' ContainerStyle='text-black mt-4 flex flex-col' InputStyle='bg-white outline-none border rounded-xl border-black py-3 px-3' />
        <Forminput Title='last Name' Type='text' FieldName='lastname' Component='p' ContainerStyle='text-black flex mt-4 flex-col' InputStyle='bg-white outline-none border border-black rounded-xl py-3 px-3' />
        <Forminput Title='number of Adult' Type='number' FieldName='firstname' Component='p' ContainerStyle='text-black mt-4 flex flex-col' InputStyle='bg-white outline-none border border-black rounded-xl px-3 py-3' />
        <Forminput Title='number of children' Type='number' FieldName='firstname' Component='p' ContainerStyle='text-black mt-4 flex flex-col' InputStyle='bg-white outline-none border border-black rounded-xl px-3 py-3' />
        <Forminput Title='date' Type='date' FieldName='firstname' Component='p' ContainerStyle='text-black flex mt-4 flex-col' InputStyle='bg-white outline-none border border-black rounded-xl px-3 py-3' />
        <input type="time" className="w-full px-2 rounded-xl py-3 mt-3 bg-transparent border border-black" />
       

        <button type="submit" className="text-center text-white font-bold w-full px-36 py-3 rounded-xl mt-4 bg-[#EA6D27]">Book ($20)</button>
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
          <h1>BOOKING DAYS AND TIME</h1>
          <p>Weekends (Saturdays and sundays)<br/>
          Booking Time: 9am - 10:30am, 4:00pm - 6:30pm
          </p>
          <p> (Mondays and Fridays)<br/>
          Booking Time: 7am - 10:30am, 5:00pm - 6:30pm
          </p>
          <p> (Tuesdays and Thurdays)<br/>
          Booking Time: 8am - 10:30am, 3:00pm - 4:30pm
          </p>
          <p> (Wednesday)<br/>
          Booking Time: 7am - 6:30pm
          </p>

          <p className="mt-10">Note: After Making reservation and you are 30mins later your table will given out. Also if you miss your reservation date you won&apos;t get a refund if you have a reason to miss the date of reservation contact us 2 days before time</p>
        </div>
      )}

      
    </div>
  )
}

export default Gbooking
