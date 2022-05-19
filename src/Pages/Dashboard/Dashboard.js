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

      fetch(`https://secure-temple-10232.herokuapp.com/booking?patient=${user.email}`,{
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
  
  return <div className='overflow-x-auto'>
    
     <table class="table w-full">
            
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


}

export default Dashboard;