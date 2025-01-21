import useDishes from "../../components/FetchData/Dishes"
import Loader from "../../components/Loader"


function Menu() {
    const {dishes, preloader} = useDishes()

     return (
    <>
    {
        preloader && (
            <Loader />
        )
    }
    <div className="sticky top-0 w-full px-1 py-3 my-5 overflow-x-scroll bg-gray-500 xl:overflow-x-hidden">
        <ul className="flex justify-between w-full gap-20 py-3 pr-3">
            <li className="px-3 py-1 font-bold text-white bg-[#101A24] rounded-lg ">All</li>
            <li>Breakfast</li>
            <li>Snacks</li>
            <li>Lunch</li>
            <li>Dinner</li>
            <li>Deserret</li>
        </ul>
    </div>
    <div className="flex flex-col gap-5 px-2 mt-2 sm:grid sm:grid-cols-2 xl:grid xl:grid-cols-3">
      {dishes.map((food) => (
        <div key={food.id} className="px-2 py-3 shadow-xl shadow-gray-500">
            <div>
                <img src={food.dishImage} alt="" className="mb-2" />
            </div>
            <p className="text-xl font-bold text-black"> {food.dishName}</p>
            
                <p className="text-xl font-bold text-black">${food.dishPrice}</p>
            
            <button className="w-full text-center mt-5 font-medium text-gray-200 bg-[#101A24] py-2 rounded-md">Add Dish</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default Menu
