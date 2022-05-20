
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/Contact/ContactUs';
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login';
import SignUP from './Pages/Login/SignUP';
import Navbar from './Pages/Navbar/Navbar';
import Reviews from './Pages/Reviews/Reviews';
import RequireAuth from './Pages/Shared/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import Myreviews from './Pages/Dashboard/Myreviews';
import History from './Pages/Dashboard/History';
import Users from './Pages/Dashboard/Users';
import HeadeDashboard from './Pages/Dashboard/HeadeDashboard';
import RequireAdmin from './Pages/Shared/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctor from './Pages/Dashboard/ManageDoctor';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='/headDashboard' element={
          <RequireAuth>
            <HeadeDashboard></HeadeDashboard>
          </RequireAuth>
        }>
          <Route index element={<Dashboard></Dashboard>}></Route>
          <Route path='myAppointment' element={<MyAppointment></MyAppointment>}></Route>
          <Route path='myreviews' element={<Myreviews></Myreviews>}></Route>
          <Route path='history' element={<History></History>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='addDoctor' element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>
          <Route path='manageDoctor' element={<RequireAdmin><ManageDoctor></ManageDoctor></RequireAdmin>}></Route>
        </Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/contactUs' element={<ContactUs></ContactUs>}></Route>
        <Route path='/signup' element={<SignUP></SignUP>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
