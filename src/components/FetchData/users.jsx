import  Axios  from "axios"
import { useEffect, useState } from "react"
import Api from "../URL/Api"

const useUsers = (resfresh) => {

    const [users, setUsers] = useState([])
    const [preLoader, setPreloader] = useState(false)

    useEffect(() => {
        setPreloader(true)
        const getGuests = async() => {
        try {
            const guests = await Axios.get(`${Api}/guests`) 
            setUsers(guests.data)
            
        } catch (error) {
            console.log(error);
            
        }finally{
            setPreloader(false)
        }

        }

        getGuests()
        
    }, [resfresh])
  return {users, preLoader}
}

export default useUsers

