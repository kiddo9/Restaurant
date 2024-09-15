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

function App() {
  

  return (
    <>
    <div>
      <BrowserRouter>
      {/* <Nav /> */}
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
          <Route path='/Guest/guest table' element={<Gtable />} />
          <Route path='/Guest/guestBooking' element={<Gbooking />} />
          <Route path='/Member/table' element={<Mtable />} />
          <Route path='/Member/booking' element={<Mbooking />} />
        </Routes>
      {/* <Footer /> */}
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
