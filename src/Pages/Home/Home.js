import React from 'react';
import HomeContact from './HomeContact/HomeContact';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeService from './HomeService/HomeService';

const Home = () => {
    return (
        <div className=''>
           <HomeHeader></HomeHeader>
           <HomeContact></HomeContact>
           <HomeService></HomeService>
        </div>
    );
};

export default Home;