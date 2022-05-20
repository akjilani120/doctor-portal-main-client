import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DoctorRaw from './DoctorRaw'
const ManageDoctor = () => {
    const {data: doctors , isLoading , refetch } = useQuery("doctor" , ()=>       
        fetch("http://localhost:5000/doctor", {
            method:"GET",
            headers:{
                authorization : `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res => res.json())
   )
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
        
        <h1>I am Manage Doctor{doctors.length} {console.log(doctors)}</h1>
        <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Avatar</th>
        <th>Name</th>
        <th>speciality</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>     
    
    {
        doctors.map( (doctor , index) => <DoctorRaw doctor={doctor} key={doctor._id} index={index} refetch={refetch}></DoctorRaw>)
    }
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageDoctor;