import { NavLink } from "react-router-dom"
import useDishes from "../../components/FetchData/Dishes"
import Loader from "../../components/Loader"


function Gmenu() {
    const {dishes, preloader} = useDishes()

  return (
    <>
    {preloader && (
        <Loader />
    )}
    <div className="sticky top-0 w-full px-1 py-3 my-5 text-black bg-gray-100 flex gap-3 justify-between items-center xl:px-12">

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>

    <div className="text-center cursor-pointer">
      <p>No reservation yet</p>
    </div>

    <select name="currency" className="text-black bg-white border-2 border-black" id="">
      <option value="usd">usd</option>
      <option value="pounds">pound</option>
      <option value="ngn">NGN</option>
    </select>
        
    </div>
    <div className="flex flex-col gap-5 px-2 mt-2 sm:grid sm:grid-cols-2 xl:grid xl:grid-cols-3">
      {dishes.map((food) => (
        <div key={food.id} className="px-2 py-3 shadow-xl shadow-gray-500">
            <div className="cursor-pointer">
                <img src={food.dishImage} alt="" className="mb-2" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xl font-bold text-black"> {food.dishName}</p>
                <p className="text-xl font-bold text-black">${food.dishPrice}</p>
              </div>
               
                <button className="px-5 text-center font-medium text-gray-200 bg-[#EA6D27] py-2 rounded-md" onClick={() => {
                const orders = JSON.parse(localStorage.getItem("dish")) || [];

                orders.push({
                  id: food.id,
                  name: food.dishName,
                  image: food.dishImage,
                  price: food.dishPrice
                })

                localStorage.setItem("dish", JSON.stringify(orders))
                  
                  }}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                </button>
            
            </div>
           
        </div>
      ))}
    </div>
    </>
  )
}

export default Gmenu
