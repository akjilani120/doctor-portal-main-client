import React from 'react';
import HomeContact from './HomeContact/HomeContact';
import HomeHeader from './HomeHeader/HomeHeader';

const Home = () => {
    return (
        <div className=''>
           <HomeHeader></HomeHeader>
           <HomeContact></HomeContact>
        </div>
    );
};

export default Home;