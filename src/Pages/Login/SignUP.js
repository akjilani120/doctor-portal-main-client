import React, { useRef } from 'react';
import { useSignInWithGoogle, useUpdatePassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const SignUP = () => {
  
    const navigate =useNavigate()
    const { register, handleSubmit ,  formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword, 
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth , {sendEmailVerification:true});
      const [updateProfile, updating, UpError] = useUpdateProfile(auth);
      if(updating){
          console.log(updating)
      }
      if(UpError){
          console.log(UpError.message)
      }
    const onSubmit =  async(data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        const displayName= data.text
        await updateProfile({displayName});
        console.log(updateProfile)
        
    };
    
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const handleGoogle = () => {
        signInWithGoogle()
    }
    let errorHandle ;
    if(gerror || error || UpError){
        errorHandle=(gerror?.message ||  error?.message || UpError.message)
       
    }
    if(loading || gloading){
        return <Loading></Loading>
    }
    if (user )  {
       navigate('/login')
    }
    if(guser){
        navigate('/appointment') 
    }
    return (
        <div className='flex justify-center items-center h-4/5 h-screen '>
            <div className="card  bg-base-100 shadow-xl  login ">
                <div className="card-body">
                    <h2 className="text-center text-2xl">Sign Up</h2>
                    <div className='text-left'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <label class="label">
                                <span class="label-text">Name </span>
                               
                            </label>
                            <input type="text" {...register("text", { required: true })}  class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                            <span class="label-text-alt text-red-500">{errors.name?.type === 'required' && "Name is required"}</span>
                               
                                
                            </label>
                            <label class="label">
                                <span class="label-text">Email</span>
                               
                            </label>
                            <input type="email"  {...register("email", { required: true } ,  {pattern: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/})} class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                <span class="label-text-alt text-red-500">{errors.email?.type === 'required' && "Email is required"}</span>
                                <span class="label-text-alt text-red-500">{errors.email?.type === 'pattern' && "Patten is required"}</span>
                               
                            </label>
                            <label class="label">
                                <span class="label-text">Password</span>
                               
                            </label>
                            <input type="password"  {...register("password", { required: true })} class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                            <span class="label-text-alt text-red-500">{errors.password?.type === 'required' && "Email is required"}</span>
                               
                            </label>
                           
                           <p className='text-red-500'>{errorHandle}</p>
                           
                           <p> If have a account?  <Link to="/login"><span className='text-secondary font-bold'>Login </span></Link> </p>
                            <input type="submit" value="Sign Up" class="btn btn-block mt-5  btn-outline" />
                           
                        </form>
                    </div>
                    <div class="divider">OR</div>
                    <button class="btn btn-block  btn-outline" onClick={handleGoogle}>Contiue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUP;