import { useEffect, useState } from "react"
import GuestNav from "../components/GuestNav"
import Gmenu from "./Guestpages/Gmenu";
import MemberNav from "../components/MemberNav";
import Mmenu from "../pages/MembersPages/Mmenu"
import Urls from "../components/URL/Url"

function Dashbored() {

  const [URL, setURL] = useState();

  useEffect(() => {
    const currentUrl = window.location.href
    setURL(currentUrl)
  }, [])

 const url = URL
  return (
    <div className="text-black">
      {url == `${Urls}/dashbored/GuestAccount` ? (
        <div>
            <GuestNav name={'Alexender'} />
            <Gmenu />
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
