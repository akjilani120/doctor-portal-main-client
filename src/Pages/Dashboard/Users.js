import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import User from './User';

const Users = () => {
    // const [users , setUsers] = useState([])
    const { isLoading, error, data, refetch } = useQuery('users', () =>
    fetch('http://localhost:5000/users', {
        method:"GET",
        headers:{
            authorization : `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res =>
      res.json()
    )
  ) 
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
          <h1> This is All users  </h1>
          <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
      
     {
         data?.map((user, index ) => <User index={index} user={user} key={user._id} refetch={refetch}></User>)
     }
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;