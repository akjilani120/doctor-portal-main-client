import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppointBanner from './AppointBanner';
import AvailabeAppointment from './AvailabeAppointment';

const Appointment = () => {
    const [date , setDate]= useState(new Date ())
    return (
        <div>
            <AppointBanner date={date} setDate={setDate}></AppointBanner>
            <AvailabeAppointment date={date}></AvailabeAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;