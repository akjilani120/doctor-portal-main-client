import React, { useRef } from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
const ButtonModal = ({ treatment, date, setTreatment }) => {
    const inputAdd = useRef('')
    
    const { name, slots, _id } = treatment;
    const [user] = useAuthState(auth)
   const dateFormating = format(date, 'PP')
    const handleBooking = (event) => {
        event.preventDefault()
         const phone = event.target.phone.value
         const slot =  inputAdd.current.value
         
         const booking = {
            treatmentId : _id,
            treatment: name,
            date: dateFormating,
            slot,
            patient:user.email,
            patientName : user.displayName,
            phone,

         };
         console.log(booking)

         fetch("http://localhost:5000/booking", {
             method:"POST",
             headers:{
                 "content-type" :"application/json"
             },
             body: JSON.stringify(booking)
         })
         .then(res => res.json())
         .then(data =>{
            console.log(data)
            if(data.sucess){
                toast(`Appointment is set ${dateFormating} at ${slot}`)
            }else{
                toast.error(`Already booking ${data.booking?.date} at ${data.booking?.slot}`)
            }
            setTreatment(null)
         } )
         
         
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking For {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input name='date' type="text" disabled value={format(date, 'PP')} className="input input-bordered  w-full max-w-xs" />
                        <select ref={inputAdd} className="select select-info w-full max-w-xs">
                            {
                                slots.map( slot => <option value={slot}>{slot}</option>)
                            }
                           
                        </select>
                        <input name='name' value={user.displayName} type="text" placeholder="name" className="input input-bordered  w-full max-w-xs" readOnly disabled/>
                        <input name='email' value={user.email} type="email" placeholder="email" className="input input-bordered  w-full max-w-xs" readOnly  disabled />
                        <input name='phone' type="text" placeholder="phone number" className="input input-bordered  w-full max-w-xs" />
                        <input type="submit" value="Submit" className=" btn btn-primary max-w-xs " />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ButtonModal;