import  Axios  from "axios"
import { useEffect, useState } from "react"
import Api from "../URL/Api"

const useStaffs = (resfresh) => {

    const [staffs, setStaffs] = useState([])
    const [preLoad, setPreloader] = useState(false)

    useEffect(() => {
        setPreloader(true)
        const getStaffs = async() => {
        try {
            const staffs = await Axios.get(`${Api}/staffs`) 
            setStaffs(staffs.data)
            
        } catch (error) {
            console.log(error);
            
        }finally{
            setPreloader(false)
        }

        }

        getStaffs()
        
    }, [resfresh])
  return {staffs, preLoad}
}

export default useStaffs