import { useEffect, useState } from "react"
import GuestNav from "../components/GuestNav"
import Gmenu from "./Guestpages/Gmenu";
import MemberNav from "../components/MemberNav";
import Mmenu from "../pages/MembersPages/Mmenu"
import Urls from "../components/URL/Url"
import { useNavigate } from "react-router-dom";

function Dashbored() {

  const [URL, setURL] = useState();

  useEffect(() => {
    const currentUrl = window.location.href
    setURL(currentUrl)
  }, [])

 const url = URL

 const GuestAuthorization = sessionStorage.getItem('Auth');

 const navigate = useNavigate();

  return (
    <div className="text-black">
      {url == `${Urls}/dashbored/GuestAccount` ? (
        
        <div>
          {GuestAuthorization ? (
            <div>
              <GuestNav name={'Alexender'} />
              <Gmenu />
            </div>
          ) : navigate('/Auth/Login/guest')}
            
        </div>
  ) 

     : url == `${Urls}/dashbored/MembershipAccount` ? (
      <div className="bg-gray-400">
        <MemberNav />
        <Mmenu />
      </div>
     ) : '' }
    </div>
  )
}

export default Dashbored
