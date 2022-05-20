import React from 'react';

const Service = ({ service, setTreatment}) => {
    const {name ,  available,  price} = service
    return (
        <div className="card  bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="text-3xl text-center">{name}</h2>
          <h2 className="text-2xl text-center">Visited Price: ${price}</h2>
          <p>{
              available.length > 0 
              ? <span>{available[0]}</span> :
              <span className='text-red-500'>Not avaiable</span>
              }</p>
          <p>{available.length} {available.length > 1 ? "spaces" :"space"} avaiable</p>
          <div className="card-actions justify-center ">
           
            <label onClick={() => setTreatment(service)} disabled={available.length === 0} for="booking-modal" className="btn btn btn-secondary px-10 text-white modal-button">Book Appointment</label>
          </div>
        </div>
      </div>
    );
};

export default Service;