import React from 'react';
import Footer from '../Shared/Footer/Footer';
import ContactForm from './ContactForm/ContactForm';
import ExceptionCare from './ExceptionCare/ExceptionCare';
import HomeAppointment from './HomeAppointment/HomeAppointment';
import HomeContact from './HomeContact/HomeContact';
import HomeHeader from './HomeHeader/HomeHeader';
import HomeService from './HomeService/HomeService';
import Testimonia from './Testimonia/Testimonia';

const Home = () => {
    return (
        <div className=''>
           <HomeHeader></HomeHeader>
           <HomeContact></HomeContact>
           <HomeService></HomeService>
           <ExceptionCare></ExceptionCare>
           <HomeAppointment></HomeAppointment>
           <Testimonia></Testimonia>
           <ContactForm></ContactForm>
           <Footer></Footer>
        </div>
    );
};

export default Home;