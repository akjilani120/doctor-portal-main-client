import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
const Payment = () => {
    const {payId}= useParams();
    const url =`http://localhost:5000/booking/${payId}`
    const {data, isLoading}=useQuery(["booking", payId], ()=> fetch(url,  {
        method:"GET",
        headers:{           
            authorization : `Bearer ${localStorage.getItem("accessToken")}`,
        },
        
    }).then(res =>res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-5xl text-red-500'> I  am payment page {payId}</h1>           

        </div>
    );
};

export default Payment;