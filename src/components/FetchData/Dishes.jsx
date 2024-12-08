import Axios  from "axios"
import { useEffect, useState } from "react"
import Api from "../URL/Api"


const useDishes = () => {
    const [dish, setDish] = useState([])

  useEffect(() => {
    const Request = () =>{
        const Fetch = Axios.get(`${Api}/getDishes`)
        const response = Fetch.data
        setDish(response)
    }

    Request();
  }, [])

  return {dish}
}

export default useDishes
