import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ButtonModal from './ButtonModal';
import Service from './Service';

const AvailabeAppointment = ({date}) => {
    // const[services , setServices] =useState([])
    const [treatment , setTreatment] = useState("")
    const formatingDate = format(date , "PP")
    
    const { data:services,  isLoading } = useQuery('repoData', () =>
    fetch(`http://localhost:5000/available?date=${formatingDate}`)       
    .then(res => res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    
    // useEffect(() =>{
    //    if(date){
    //     // fetch(`http://localhost:5000/available?date=${formatingDate}`)       
    //     // .then(res => res.json())
    //     // .then(data => setServices(data))
       
     
    //     // const { isLoading, error, data } =useQuery('repoData', () =>
    //     // fetch(`http://localhost:5000/available?date=${formatingDate}`)       
    //     // .then(res => res.json())
    // //  )
    //    }
    // } ,[formatingDate])
    return (
        <div className='my-5 px-12'>
            <p className='text-3xl my-5 font-bold text-secondary'>You are selected : {format(date, 'PP')}</p>
            <div className=' grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
            {
                services?.map( service => <Service service={service} key={service._id} setTreatment={setTreatment}></Service>)
            }
            </div>
            {
                treatment && <ButtonModal treatment={treatment} date ={date} setTreatment={setTreatment}></ButtonModal>
            }
        </div>
    );
};

export default AvailabeAppointment;