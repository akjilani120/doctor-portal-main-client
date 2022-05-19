import React from 'react';
import { useForm } from 'react-hook-form';
const AddDoctor = () => {
    const { register, handleSubmit ,  formState: { errors } } = useForm();
    const onSubmit =  async(data) => {      
      console.log(data)
       
        
    };
    return (
        <div>
            <h1>I am doctor page</h1>
            <div className='ml-20'>
            <form className='text-left' onSubmit={handleSubmit(onSubmit)}>
                        <label class="label ">
                                <span class="label-text">Name </span>
                               
                            </label>
                            <input type="text" {...register("text", { required: true })}  class="input input-bordered w-full max-w-xs"  placeholder='name'/>
                            <label class="label">
                            <span class="label-text-alt text-red-500">{errors.name?.type === 'required' && "Name is required"}</span>
                               
                            </label>
                            <label class="label">
                                <span class="label-text">Email</span>
                               
                            </label>
                            <input type="email"  {...register("email", { required: true })} class="input input-bordered w-full max-w-xs" placeholder='email' />
                            <label class="label">
                                <span class="label-text-alt text-red-500">{errors.email?.type === 'required' && "Email is required"}</span>                               
                               
                            </label>
                            <label class="label">
                                <span class="label-text">speciality</span>                               
                            </label>
                            <input type="text"  {...register("speciality", { required: true })} class="input input-bordered w-full max-w-xs" placeholder='speciality' />
                            <label class="label">
                            <span class="label-text-alt text-red-500">{errors.speciality?.type === 'required' && "speciality is required"}</span>
                               
                            </label>
                           
                          
                            <input type="submit" value="Add Doctor" class="btn btn-secondary mt-5  btn-outline" />
                           
                        </form>
            </div>
        </div>
    );
};

export default AddDoctor;