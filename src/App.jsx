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
import {Context} from './components/URL/context'
import AdminMenu  from './pages/Admin/Menu'
import NotFound from './components/NotFound'


function App() {
  
  const AdminPath = location.pathname.startsWith('/Admin')
  const GuestPath = location.pathname.startsWith('/Guest')

  return (
    <>
     <BrowserRouter>
      <Context> {/* Wrapping entire app with Context */}
        <div>
          {/* Render AdminNav conditionally based on AdminPath */}
          {AdminPath && <AdminNav />}

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
            <Route path='/Member/table' element={<Mtable />} />
            <Route path='/Member/booking' element={<Mbooking />} />
            <Route path='/Auth/Admin' element={<AdminLogin />} />
            

            {/* Guest Routes */}
            {GuestPath && (
              <>
                <Route path='/Guest/guesttable' element={<Gtable />} />
                <Route path='/Guest/guestBooking' element={<Gbooking />} />
              </>
            )}

            {/* Admin Routes */}
               <Route path='/Admin/Dashbored' element={<AdminDashbored />} />
                <Route path='/Admin/Charts' element={<Charts />} />
                <Route path='/Admin/History' element={<History />} />
                <Route path='/Admin/Users' element={<Users />} />
                <Route path='/Admin/Settings' element={<Settings />} />
                <Route path='/Admin/Menu' element={<AdminMenu />} />
            

            {/* Catch-all Route */}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Context>
    </BrowserRouter>
    </>
  )
}

export default App
