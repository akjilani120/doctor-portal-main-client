import React from 'react';
import ExceptionCare from './ExceptionCare/ExceptionCare';
import HomeAppointment from './HomeAppointment/HomeAppointment';
import HomeContact from './HomeContact/HomeContact';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeService from './HomeService/HomeService';

const Home = () => {
    return (
        <div className=''>
           <HomeHeader></HomeHeader>
           <HomeContact></HomeContact>
           <HomeService></HomeService>
           <ExceptionCare></ExceptionCare>
           <HomeAppointment></HomeAppointment>
        </div>
    );
};

export default Home;