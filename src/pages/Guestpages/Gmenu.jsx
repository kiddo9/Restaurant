import { NavLink } from "react-router-dom"


function Gmenu() {

    const Menu = [
        {
            id : 1,
            image: 'https://plus.unsplash.com/premium_photo-1675707499423-c09ed0d084c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWVhbHN8ZW58MHx8MHx8fDA%3D',
            name: 'spagetti white',
            price: '20',
            rating: '5',
            description: ''
        },
        {
            id : 2,
            image: 'https://images.unsplash.com/photo-1512034400317-de97d7d6c3ed?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVhbHN8ZW58MHx8MHx8fDA%3D',
            name: 'Double cup and sandwitch',
            price: '50',
            rating: '5',
            description: ''
        },
        {
            id : 3,
            image: 'https://images.unsplash.com/photo-1647093953000-9065ed6f85ef?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVhbHN8ZW58MHx8MHx8fDA%3D',
            name: 'Sahara main dash',
            price: '30',
            rating: '4',
            description: ''
        },
        {
            id : 4,
            image: 'https://images.unsplash.com/photo-1703553591265-91e21fca98ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bWVhbHN8ZW58MHx8MHx8fDA%3D',
            name: 'New york meat ball carserol',
            price: '60',
            rating: '5',
            description: ''
        },
    ]

    const submenu = ['All', 'Bearkfast', 'Snacks', 'Lunch', 'Dinner', 'Deserret'] 

  return (
    <>
    <div className="sticky top-0 w-full px-1 py-3 my-5 overflow-x-scroll bg-gray-100 xl:overflow-x-hidden">
        <ul className="flex justify-between w-full gap-20 py-3 pr-3">
         {submenu.map((menu, index) => (
            <li className="cursor-pointer" key={index}>
                <NavLink to={''}>{menu}</NavLink>
            </li>
         ))}
        </ul>
    </div>
    <div className="flex flex-col gap-5 px-2 mt-2 sm:grid sm:grid-cols-2 xl:grid xl:grid-cols-3">
      {Menu.map((food) => (
        <div key={food.id} className="px-2 py-3 shadow-xl shadow-gray-500">
            <div>
                <img src={food.image} alt="" className="mb-2" />
            </div>
            <p className="text-xl font-bold"> {food.name}</p>
            
                <p className="text-xl font-bold">${food.price}</p>
            
            <button className="w-full text-center mt-5 font-medium text-gray-200 bg-[#EA6D27] py-2 rounded-md">Add Dish</button>
        </div>
      ))}
    </div>
    </>
  )
}

export default Gmenu
