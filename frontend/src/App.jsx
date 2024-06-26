import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import './App.css'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Postbook from './pages/Postbook'
import Mainpage from './pages/Mainpage'
import Subscribers from './pages/Subscribers'
import Navbar from './components/Navbar'
import OtheruserProfile from "./pages/Otheruserprofile";
function App() {

  const getToken = () => {
    return localStorage.getItem('authToken')
  }

  const LoggedIn = () => {
    return getToken() ? <Outlet /> : <Navigate to='/login' />
  }

  const NotLoggedIn = () => {
    return !getToken() ? <Outlet /> : <Navigate to='/' />
  }


  return (
    <div>

      <Navbar className="Navbar1" />
      <Routes>
       
     

  <Route element={ <NotLoggedIn /> } >

    <Route path='/login' element={ <Login /> } />
    <Route path='/signup' element={ <Signup /> } />

  </Route>

  <Route element={<LoggedIn />}>
    <Route path='/mainpage' element={ <Mainpage /> } />
    <Route path='/profile' element={ <Profile /> } />
    <Route path='/postbook' element={ <Postbook /> } />
    <Route path='/subscribers' element={ <Subscribers /> } />
    <Route path="/otheruserprofile/:id" element={ <OtheruserProfile /> }/>

  </Route>
</Routes>
    </div>
  );
}

export default App
