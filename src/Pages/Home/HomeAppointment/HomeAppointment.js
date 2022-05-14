import React from 'react';
import  doctor from '../../asset/images/doctor-small.png'
import bg from '../../asset/images/appointment.png'
import './HomeAppointment.css'
const HomeAppointment = () => {
    return (
        <section className='bg-appointment'  style={{backgroundImage:`url(${bg})` , }}  >
            <div className="hero min-h-screen  text-left"  >
                <div className="hero-content flex-col lg:flex-row items-center mb-24" >
                    <img className=' hidden lg:block doctor' style={{marginTop:"-150px", height:"500px"}} src={doctor} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='   text-white mb-20'>
                        <h1 className="text-2xl font-bold text-secondary ">Appoinment</h1>
                        <h1 className="text-5xl font-bold ">Make an appointment Today</h1>
                        <p className="py-6">The point were making is that in todays modern dental era, you need to differentiate yourself from your competition. Nothing makes you stand out more than goodno, actually, knock your socks-offcustomer service</p>
                        <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAppointment;