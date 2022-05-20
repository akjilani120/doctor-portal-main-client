import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
const AddDoctor = () => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { isLoading,  data} = useQuery('users', () =>
        fetch('http://localhost:5000/service').then(res =>res.json())           
        
    )

    const imgStorageKey ='a20408031904de293b263e5a8f8e5393';
   
    const onSubmit = async (data) => {
        const formData = new FormData();
        const image = data.img[0]
        formData.append('image', image);           
            const url =`https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
        fetch(url ,{
            method:"POST",
            body:formData
        })
        .then(res => res.json())
        .then(result => {
            if(result.success){
                const img = result.data.url
               const doctor ={
                 name :data.text,
                 email:data.email,
                 speciality : data.speciality,
                 img: img
               }
               fetch("http://localhost:5000/doctor", {
                   method:"POST",
                   headers:{
                       "content-type": "application/json",
                       authorization : `Bearer ${localStorage.getItem("accessToken")}`
                   },
                   body:JSON.stringify(doctor)
               })
               .then(res => res.json())
               .then( data => {
                  if(data.insertedId){
                      toast("succes fully Doctor data added")
                      reset()
                  }else{
                      toast.error("Faild the doctor data added")
                  }
               })
            }
        })
    };
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1>I am doctor page</h1>
            <div className='ml-20'>
                <form className='text-left' onSubmit={handleSubmit(onSubmit)}>
                    <label class="label ">
                        <span class="label-text">Name </span>

                    </label>
                    <input type="text" {...register("text", { required: true })} class="input input-bordered w-full max-w-xs" placeholder='name' />
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
                    <select {...register("speciality", { required: true })} class="select select-bordered w-full max-w-xs">
                        {
                            data.map(d => <option key={d._id} value={d.name} >{d.name}</option>)
                        }

                    </select>

                    <label class="label ">
                        <span class="label-text">Image </span>

                    </label>
                    <input type="file" {...register("img", { required: true })} class="input input-bordered w-full max-w-xs"  />
                    <label class="label">
                        <span class="label-text-alt text-red-500">{errors.img?.type === 'required' && "image is required"}</span>

                    </label>
                        <br></br>

                    <input type="submit" value="Add Doctor" class="btn btn-success mt-5  btn-outline" />

                </form>
            </div>
        </div>
    );
};

export default AddDoctor;