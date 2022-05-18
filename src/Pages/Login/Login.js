import React, { useEffect, useRef } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useUpdatePassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import './login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import UseTokenAdd from '../Hooks/UseTokenAdd';
import Loading from '../Shared/Loading'
const Login = () => {
    const emailField = useRef()
    const [updatePassword] = useUpdatePassword(auth);
    const handleReset = async() =>{
       const email = emailField.current.value
      
        await updatePassword();
        alert('Updated password');
    }
    const { register, handleSubmit ,  formState: { errors } } = useForm();
   const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [token] = UseTokenAdd(user || guser)
    const handleGoogle = () => {
        signInWithGoogle()
    }
    
   const location = useLocation();    
  
     const from = location.state?.from?.pathname || "/";
     useEffect(() =>{
        if (token) {
            navigate(from, { replace: true });
        }
     } , [token])
    let errorHandle ;
    if(gerror || error){
        errorHandle=(gerror?.message || error?.message)
    }
    if( gloading ||  loading){
        return <Loading></Loading>
    }
    
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email , data.password)
    };
    return (
        <div className='flex justify-center items-center h-4/5 h-screen '>
            <div className="card  bg-base-100 shadow-xl  login ">
                <div className="card-body">
                    <h2 className="text-center text-2xl">Login</h2>
                    <div className='text-left'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label class="label">
                                <span class="label-text">Email</span>
                               
                            </label>
                            <input type="email" ref={emailField}  {...register("email", { required: true } ,  {pattern: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/})} class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                <span class="label-text-alt text-red-500">{errors.email?.type === 'required' && "Email is required"}</span>
                                <span class="label-text-alt text-red-500">{errors.email?.type === 'pattern' && "Patten is required"}</span>
                               
                            </label>
                            <label class="label">
                                <span class="label-text">Password</span>
                               
                            </label>
                            <input type="password"  {...register("password", { required: true })} class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                            <span class="label-text-alt text-red-500">{errors.password?.type === 'required' && "Password is required"}</span>                                
                                
                            </label>
                           
                           <p className='text-red-500'>{errorHandle}</p>
                           <button className='mb-10' >Forget Password ? <span className='text-secondary font-bold' onClick={handleReset}>Reset Now</span> </button>
                           <p> If have not account?  <Link to="/signup"><span className='text-secondary font-bold'>Create Account</span></Link> </p>
                           
                            <input type="submit" value="Login" class="btn btn-block mt-5  btn-outline" />
                           
                        </form>
                    </div>
                    <div class="divider">OR</div>
                    <button class="btn btn-block  btn-outline" onClick={handleGoogle}>Contiue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;