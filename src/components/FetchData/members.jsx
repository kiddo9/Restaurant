import Axios from "axios"
import { useEffect, useState } from "react"
import Api from "../URL/Api"


const useMembers = (refresh) => {
    const [member, setMember] = useState([])

    useEffect(() => {
        const member = async() =>{
            
            try {
                const member = await Axios.get(`${Api}/members`)
                const response = member.data

                setMember(response.members)
            } catch (error) {
                console.log(error);
            }
        }

        member();
    }, [refresh])

  return {member}
}

export default useMembers