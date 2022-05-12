import React from 'react';
import bg from '../../asset/images/appointment.png'
const ContactForm = () => {
    return (
        <section className='flex justify-center items-center py-12' style={{ backgroundImage: `url(${bg})` }}>
            <div>

               
                <input type="text" placeholder="Email address" className="input input-bordered   mb-3 w-96 " />
                <br></br>
                <input type="text" placeholder="Subject" className="input input-bordered   mb-3 w-96 " />
               <br></br>
                <input type="text" placeholder="message" className="input input-bordered  w-96  h-20" />
                <br></br>
                <button class=" btn btn-primary text-white bg-gradient-to-r from-primary to-secondary mt-5 text-left">Submit</button>
               
            </div>
        </section>
    );
};

export default ContactForm;