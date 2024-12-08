import Mmenu from "../../components/MemberNav"

function Mtable() {
    const Table = [
        {
            id: 1,
            Image: 'https://media.istockphoto.com/id/2148793391/photo/couple-enjoying-early-evening-dinner-date-outdoors.jpg?s=612x612&w=0&k=20&c=7SjZHbaPp3CMf-hFGslOFugPMSvjCqM3ZO39I_GKWkY=',
            name: 'couples table'
        },
        {
            id: 2,
            Image: 'https://media.istockphoto.com/id/1202209234/photo/bar-chair.jpg?s=612x612&w=0&k=20&c=vET4s7Ut1VSSBEDummBpFbsMJ0NYokz4bz6kZQK5C70=',
            name: 'Bar height'
        },
        {
            id: 3,
            Image: 'https://media.istockphoto.com/id/1476836012/photo/family-sitting-at-the-table-vegan-friends-having-dinner-together-fucus-in-the-foreground.jpg?s=612x612&w=0&k=20&c=VX0SX77_Vk1QPSUIafBy6CpOMY6md6wJQ9QzPfhf8uI=',
            name: 'Family Table'
        },
        {
            id: 4,
            Image: 'https://media.istockphoto.com/id/182679423/photo/diner-table.jpg?s=612x612&w=0&k=20&c=sp6hoAoHwYf7PHSkQE0s13Q_euTyo4ZXvI8IizoNv-0=',
            name: 'Booths'
        },
        {
            id: 5,
            Image: 'https://media.istockphoto.com/id/1577167083/photo/close-up-image-of-glass-topped-square-tables-with-rattan-wickerwork-chairs-on-patterned-patio.jpg?s=612x612&w=0&k=20&c=Zk9SPqMcyuB_F2IIjcSx4V-0LV7zOB_VOj3fNi2w5sU=',
            name: 'Outdoor table'
        },
    ]

  return (
    <div>
      <Mmenu name={'prayer'} />

      <div className="text-black">
        <div>
            <p>Total Guest Table: 200</p>
            <div className="flex items-center justify-between pr-1">
                <p>Total Table Booked: 150</p>
                <select className="text-white">
                    <option value="">Today</option>
                </select>    
            </div>
            <p>Available: 50</p>
        </div>
        <div className="grid grid-cols-2 gap-10 mx-1 sm:grid sm:grid-cols-2 xl:grid xl:grid-cols-3">
            {Table.map((table) => (
                <div key={table.id} className="px-2 py-3 shadow-lg">
                    <img src={table.Image} alt="" />
                    <div className="flex justify-between">
                        <p>{table.name}</p> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
   
                    </div>
                    
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Mtable
