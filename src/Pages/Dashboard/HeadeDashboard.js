import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import UseAdmin from '../Hooks/UseAdmin';
const HeadeDashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = UseAdmin(user)
    return (
        <div>
          
            <div class="drawer drawer-mobile">
                <input id="dashboard-sidenav" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content flex flex-col ">
                    {/* <!-- Page content here --> */}
                    
                    <div>
                    <h1 className='text-5xl text-center text-blue-500'>I am main Dashboard </h1>
                        <Outlet />
                    </div>

                </div>
                <div class="drawer-side">
                    <label for="dashboard-sidenav" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to={'/headDashboard'}>Dashboard Data</Link></li>
                        <li><Link to={'/headDashboard/myAppointment'}>MY Appointment</Link></li>
                        <li><Link to={'/headDashboard/myreviews'}>My Reviews</Link></li>
                        <li><Link to={'/headDashboard/history'}>My History</Link></li>
                        <li>{ admin && <Link to={'/headDashboard/users'}>Users</Link>}</li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default HeadeDashboard;