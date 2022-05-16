import React from 'react';

const Service = ({ service, setTreatment}) => {
    const {name ,  slots} = service
    return (
        <div className="card  bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title text-center">{name}</h2>
          <p>{
              slots.length > 0 
              ? <span>{slots[0]}</span> :
              <span className='text-red-500'>Not avaiable</span>
              }</p>
          <p>{slots.length} {slots.length > 1 ? "spaces" :"space"} avaiable</p>
          <div className="card-actions justify-center ">
           
            <label onClick={() => setTreatment(service)} disabled={slots.length === 0} for="booking-modal" className="btn btn btn-secondary px-10 text-white modal-button">Book Appointment</label>
          </div>
        </div>
      </div>
    );
};

export default Service;