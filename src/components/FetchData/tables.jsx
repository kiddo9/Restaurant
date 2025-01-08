import  Axios  from "axios"
import { useEffect, useState } from "react"
import Api from "../URL/Api"


const useTables = (refresh) => {
    const [tables, setTables] = useState([])
    const [preLoad, setPreloader] = useState(false)

    useEffect(() => {
        setPreloader(true)

        const getTables = async() => {

            try {
                const getData = await Axios.get(`${Api}/tables`)
                const response = getData.data
                setPreloader(false)
                setTables(response)

            } catch (error) {

                setPreloader(false)
                console.log('error', error.message);
            }
            
        }

        getTables();

    }, [refresh])

  return {tables, preLoad}

}

export default useTables