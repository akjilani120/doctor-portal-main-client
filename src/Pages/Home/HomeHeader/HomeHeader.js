import React from 'react';
import chair from '../../asset/images/chair.png'
import bg from '../../asset/images/bg.png'
import './HomeHeader.css'
const HomeHeader = () => {
    return (
        <section className='header-sec' style={{backgroundImage:`url(${bg})`}}>
            <div className="hero min-h-screen  text-left px-12">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='pb-10' >
                        <h1 className="text-5xl font-bold">Your New Smile start here</h1>
                        <p className="py-6 pr-10">In China as well as France, the first people to perform dentistry were barbers. They have been categorized into 2 distinct groups: guild of barbers and lay barbers. The first group, the Guild of Barbers, was created to distinguish more educated and qualified dental surgeons from lay barbers</p>
                        <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary ">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeHeader;