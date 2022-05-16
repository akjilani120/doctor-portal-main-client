import React from 'react';
import { SpinnerCircular, SpinnerDiamond, SpinnerDotted } from 'spinners-react';
const Loading = () => {
    return (
        
            <div className='flex justify-center items-center h-screen'>
            <SpinnerDiamond size={50} thickness={100} speed={100} color="rgba(151, 57, 172, 1)" secondaryColor="rgba(0, 0, 0, 0.44)" />
           
            </div>
          
    );
};

export default Loading;