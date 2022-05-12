import React from 'react';
import ExceptionCare from './ExceptionCare/ExceptionCare';
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
        </div>
    );
};

export default Home;