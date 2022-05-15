import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import './login.css'
import { Link } from 'react-router-dom';
const Login = () => {
    const { register, handleSubmit ,  formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const [signInWithGoogle, user, loading, gerror] = useSignInWithGoogle(auth);
    const handleGoogle = () => {
        signInWithGoogle()
    }
    let errorHandle ;
    if(gerror){
        errorHandle=(gerror.message)
    }
    if (user) {
        console.log(user)
    }
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