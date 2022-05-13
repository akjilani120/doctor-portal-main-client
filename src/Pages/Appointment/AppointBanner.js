import React from 'react';
import chair from "../asset/images/chair.png"
import bg from '../asset/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppointBanner = ({date, setDate}) => {
   
    return (
       <section className='header-sec px-12' style={{backgroundImage:`url(${bg})`}}>
            <div class="hero min-h-screen ">
            <div class=" ml-12 hero-content flex-col lg:flex-row-reverse">
                <img src={chair} class="max-w-sm rounded-lg shadow-2xl" />
                <div>
                <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
                />
                
                </div>
            </div>
        </div>
       </section>
    );
};

export default AppointBanner;