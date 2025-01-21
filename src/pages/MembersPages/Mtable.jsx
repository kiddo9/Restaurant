import useTables from "../../components/FetchData/tables"
import Loader from "../../components/Loader"


function Mtable() {
    const {tables, preLoad } = useTables()
    

  return (
    <div>
        {preLoad && (
            <Loader />
        )}
      <div className="text-black">
        <div>
            <p>Total Guest Table: {tables.filter(table => table.tableType == 'vip').length}</p>
            <div className="flex items-center justify-between pr-1">
                <p>Total Table Booked: 150</p>
                <select className="text-white">
                    <option value="">Today</option>
                </select>    
            </div>
            <p>Available: 50</p>
        </div>
        <div className="grid grid-cols-2 gap-10 mx-1 sm:grid sm:grid-cols-2 xl:grid xl:grid-cols-3">
            {tables.map((table) => (
                table.tableType == "vip" && (
                  <div key={table.id} className="px-2 py-3 shadow-lg">
                    <img src={table.tableImage} alt="" />
                    <div className="flex justify-between">
                        <p>{table.tableName}</p> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
   
                    </div>
                    
                </div>  
                )
                
            ))}
        </div>
      </div>
    </div>
  )
}

export default Mtable
