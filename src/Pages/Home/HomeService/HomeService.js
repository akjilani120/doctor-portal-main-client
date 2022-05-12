import React from 'react';
import floride from '../../asset/images/fluoride.png'
import cavity from '../../asset/images/cavity.png'
import Whitening from '../../asset/images/whitening.png'

const HomeService = () => {
    const services = [
        {
            _id: 1,
            img: floride,
            name: "Floride Treatment",
            title: "Fluoride is a mineral that helps prevent tooth decay (dental caries) by fighting acid-producing bacteria that turn into plaque."
        },
        {
            _id: 2,
            img: cavity,
            name: "Cavity Filling",
            title: "Here’s everything you need to know about what to expect while getting a cavity filled. Learning about the process can help soothe your concerns. ."
        },
        {
            _id: 3,
            img: Whitening,
            name: "Teeth Whitening",
            title: "Here are some useful suggestions which you might like to take on board to increase the number of your tooth whitening patients. "
        },
    ]
    return (
        <section>
            <div className='service-title text-center'>
                <p className='text-secondary font-bold '>Our Service</p>
                <p className=' mt-4 text-4xl'>Service We Provide</p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 px-12 my-10'>
                {
                    services.map(service => <>
                        <div class="card text-center bg-base-100 shadow-xl p-3">
                            <figure><img src={service.img} alt="Shoes" /></figure>
                            <div class="card-body text-center">
                                <h2 class="card-title ">{service.name}</h2>
                                <p>{service.title}</p>
                                
                            </div>
                        </div>
                    </>)
                }
            </div>
        </section>
    );
};

export default HomeService;