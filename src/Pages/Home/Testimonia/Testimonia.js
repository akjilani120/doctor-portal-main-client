import React, { useEffect, useState } from 'react';
import people1 from '../../asset/images/people1.png'
import people2 from '../../asset/images/people2.png'
import people3 from '../../asset/images/people3.png'
import quote from '../../asset/icons/quote.svg'
const Testimonia = () => {
    const peoples =[
        {
            _id:1,
            title:"This best Dental Hospital.The hospital service so good",
            name:"Atikur Rohmaon",
             img: people1,
            job:"Teeth pain"
        },
        {
            _id:2,
            title:"This best Dental Hospital.The hospital service so good",
            name:"Atikur Rohmaon",
            img: people2,
            job:"Mouth Teeth"
        },
        {
            _id:3,
            title:"This best Dental Hospital.The hospital service so good",
            name:"Atikur Rohmaon",
             img: people3,
            job:"Teeth white"
        }
    ]
    return (
        <section className='px-12 my-12'>
            <div className='flex justify-between'>
                <div className='text-left'>
                    <div className='text-secondary font-bold text-2xl'>Testmonial</div>
                    <div className=' font-bold text-5xl'>What Our Patients Says</div>

                </div>
                <div>
                    <img style={{ width: "192px", height: "152px" }} src={quote} ></img>
                </div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    peoples.map(people => <>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">{people.title}</h2>

                            </div>
                            <div className='flex items-center px-5 pb-3'>
                                <div>
                                    <div className="avatar">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={people.img} />
                                    </div>
                                </div>
                                </div>
                                <div className='ml-5 '>
                                    <p> {people.name}</p>
                                    <p> {people.job}</p>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>

        </section>
    );
};

export default Testimonia;