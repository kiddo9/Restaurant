import Landing from './pages/landing'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './pages/Menu'
import Login from './pages/Login'
import Option from './pages/Option'
//import Nav from './components/Nav'
//import Footer from './components/Footer'
import AuthOption from './pages/AuthOption'
import Signup from './pages/Signup'
import TokenVerify from './pages/TokenVerify'
import Dashbored from './pages/Dashbored'
import Gtable from './pages/Guestpages/Gtable'
import Gbooking from './pages/Guestpages/Gbooking'
import Mtable from './pages/MembersPages/Mtable'
import Mbooking from './pages/MembersPages/Mbooking'

import AdminLogin from './pages/Admin/Login'
import AdminDashbored from './pages/Admin/Dashbored'
import AdminNav from './components/Admin/AdminNav'
import Charts from './pages/Admin/Charts'
import History from './pages/Admin/History'
import Users from './pages/Admin/Users'
import Settings from './pages/Admin/Settings'
import {Check, GuestLoggedIn, MemberLoggedIn} from './components/URL/context'
import AdminMenu  from './pages/Admin/Menu'
import NotFound from './components/NotFound'
import Forgotton from './pages/Admin/Forgotton'
import SetPassword from './pages/Admin/setPassword'
import OtpValidation from './pages/Admin/otpValidation'
import ResetPassword from './pages/Admin/resetPassword'
import GuestNav from './components/GuestNav'
import Gmenu from './pages/Guestpages/Gmenu'
import MemberNav from './components/MemberNav'
import Mmenu from './pages/MembersPages/Mmenu'


function App() {
  
  //const AdminPath = location.pathname.startsWith('/Admin')
 
  return (
    <>
     <BrowserRouter>
        <div>
          {/* Render AdminNav conditionally based on AdminPath */}

          {/* Main Navigation Routes */}
          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/member' element={<Option />} />
            <Route path='/Auth' element={<AuthOption />} />
            <Route path='/Auth/Signup' element={<Option />} />
            <Route path='/Auth/Login' element={<Option />} />
            <Route path='/Auth/Signup/:id' element={<Signup />} />
            <Route path='/Auth/Login/:id' element={<Login />} />
            <Route path='/Auth/EmailVerify/:id' element={<TokenVerify />} />
            <Route path='/dashbored/:id' element={<Dashbored />} />
            
            <Route path='/Auth/Admin' element={<AdminLogin />} />
            <Route path='/forgottonPassword/admin' element={<Forgotton />} />
            <Route path='/api/v3/setpassword/:email' element={<SetPassword />} />
            <Route path='/otp/validate/:token' element={<OtpValidation />} />
            <Route path='/resetpassword/:token' element={<ResetPassword />} />

            
            <Route path='/Guest/*' element={
              <GuestLoggedIn>
                <GuestNav />
                  <Routes>
                    <Route path='guesttable' element={<Gtable />} />
                    <Route path='guestBooking' element={<Gbooking />} />
                    <Route path='GuestAccount' element={<Gmenu />} />
                  </Routes>
              </GuestLoggedIn>
              
            } />

            <Route path='/Admin/*' element={
              
              <Check>
                <AdminNav />
                <Routes>
                    <Route path='Dashbored' element={<AdminDashbored />} />
                    <Route path='Charts' element={<Charts />} />
                    <Route path='History' element={<History />} />
                    <Route path='Users' element={<Users />} />
                    <Route path='Settings' element={<Settings />} />
                    <Route path='Menu' element={<AdminMenu />} />
                </Routes>
              </Check>

            } />

            <Route path='/Member/*' element={
              <MemberLoggedIn>
                 <MemberNav />
                <Routes>
                  <Route path='MembershipAccount' element={<Mmenu/>} />
                  <Route path='table' element={<Mtable />} />
                  <Route path='booking' element={<Mbooking />} />
                </Routes>
              </MemberLoggedIn> 
            } />
              

           

            {/* Catch-all Route */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
    </BrowserRouter>
    </>
  )
}

export default App
