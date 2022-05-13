import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import ButtonModal from './ButtonModal';
import Service from './Service';

const AvailabeAppointment = ({date}) => {
    const[services , setServices] =useState([])
    const [treatment , setTreatment] = useState(null)
    useEffect(() =>{
        fetch("service.json")
        .then(res => res.json())
        .then(data => setServices(data))
    } ,[])
    return (
        <div className='my-5 px-12'>
            <p className='text-3xl my-5 font-bold text-secondary'>You are selected : {format(date, 'PP')}</p>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
            {
                services.map( service => <Service service={service} key={service._id} setTreatment={setTreatment}></Service>)
            }
            </div>
            {
                treatment && <ButtonModal treatment={treatment} date ={date} setTreatment={setTreatment}></ButtonModal>
            }
        </div>
    );
};

export default AvailabeAppointment;