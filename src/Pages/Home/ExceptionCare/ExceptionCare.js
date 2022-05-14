import React from 'react';
import treatment from '../../asset/images/treatment.png'
const ExceptionCare = () => {
    return (
        <section className='px-12'>
            <div className="hero min-h-screen  text-left">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='pl-12'>
                        <h1 className="text-5xl font-bold ">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">The point were making is that in todays modern dental era, you need to differentiate yourself from your competition. Nothing makes you stand out more than good—no, actually, knock-your-socks-off—customer service</p>
                        <button className="btn btn-primary text-white bg-gradient-to-r from-primary to-secondary">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExceptionCare;