import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([])
  const [user] = useAuthState(auth)
   const navigate =useNavigate()
  useEffect(() => {
    if (user) {     

      fetch(`http://localhost:5000/booking?patient=${user.email}`,{
        method:"GET",
        headers:{
          "authorization" : `Bearer ${localStorage.getItem("accessToken")}`
        }
      })
        .then(res => {
         if(res.status === 401 || res.status === 403){
          signOut(auth)
          localStorage.removeItem("accessToken")
          navigate('/')
         }
         return res.json()})
        .then(data => {
         
          setAppointments(data)
        })
    }
  }, [user])
  
  return <div>

    <div class="drawer drawer-mobile">
      <input id=" dashboard-sidenav" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col ">
        {/* <!-- Page content here --> */}

        <h1 className='text-5xl text-red-500'>This is dashboard </h1>
        <Outlet />
        <div class="overflow-x-auto">
          <table class="table w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Date </th>
                <th>Time</th>
                <th>Treatment</th>
              </tr>
            </thead>
            <tbody>
             {
               appointments?.map((a, index) =>  <tr>
                <th>{index + 1}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
              </tr> )
             }
             
             
            </tbody>
          </table>
        </div>
      </div>
      <div class="drawer-side">
        <label for=" dashboard-sidenav" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li><Link to={'/dashboard'}>MY Appointment</Link></li>
          <li><Link to={'/dashboard/myreviews'}>My Reviews</Link></li>
        </ul>

      </div>
    </div>
  </div>


}

export default Dashboard;