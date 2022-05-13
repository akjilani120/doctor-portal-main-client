import React, { useRef } from 'react';
import { format } from 'date-fns';
const ButtonModal = ({ treatment, date, setTreatment }) => {
    const inputAdd = useRef('')
    const { name, slots } = treatment
    const handleBooking = (event) => {
        event.preventDefault()
        const slot = event.target.slot.value
        const slot1 =inputAdd.current.value
        console.log(slot1)
        setTreatment(null)

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary">Booking For {name}</h3>
                    <form onClick={handleBooking} className='grid grid-cols-1 gap-3'>
                        <input name='date' type="text" disabled value={format(date, 'PP')} class="input input-bordered  w-full max-w-xs" />
                        <select ref={inputAdd} class="select select-info w-full max-w-xs">
                            {
                                slots.map( slot => <option value={slot}>{slot}</option>)
                            }
                           
                        </select>
                        <input name='name' type="text" placeholder="name" class="input input-bordered  w-full max-w-xs" />
                        <input name='email' type="email" placeholder="email" class="input input-bordered  w-full max-w-xs" />
                        <input name='' type="text" placeholder="Type here" class="input input-bordered  w-full max-w-xs" />
                        <input type="submit" value="Submit" class=" btn btn-primary max-w-xs " />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default ButtonModal;