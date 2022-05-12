import React from 'react';
import clock from '../../asset/icons/clock.svg'
import marker from '../../asset/icons/marker.svg'
import phone from '../../asset/icons/phone.svg'
const HomeContact = () => {
    return (
        <section className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-12 my-10'>
            <div className='flex bg-gradient-to-r from-primary to-secondary text-white rounded-lg  items-center justify-center p-8'>
                <img src={clock}></img>
                <div className='pl-5'>
                    <p className='text-2xl' >Visits out Location</p>
                    <p>Dhaka Munshiganj Mirkadim 520</p>
                </div>
            </div>
            <div className='flex bg-neutral text-white rounded-lg  items-center justify-center p-8'>
                <img src={marker}></img>
                <div className='pl-5'>
                    <p className='text-2xl' >Opening Hours</p>
                    <p>Sun - Fri (10 am - 20pm)</p>
                </div>
            </div>
            <div className='flex bg-gradient-to-r from-primary to-secondary text-white rounded-lg  items-center justify-center p-8'>
                <img src={phone}></img>
                <div className='pl-5'>
                    <p className='text-2xl' >Contact Us now</p>
                    <p>#017586847218</p>
                </div>
            </div>
        </section>
    );
};

export default HomeContact;