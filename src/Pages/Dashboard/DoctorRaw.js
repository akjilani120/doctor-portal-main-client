import React from 'react';
import { toast } from 'react-toastify';

const DoctorRaw = ({ doctor, index , refetch }) => {
    const { name, speciality, img, email } = doctor;
    const hanleDelete =() =>{
        fetch(`http://localhost:5000/doctor/${email}`, {
            method:"DELETE",
            headers:{
                authorization : `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
        .then(res => res.json())
        .then(data  =>{
            if(data){
                toast.success(`Now ${name} doctor delete`)
                refetch()
            }
        })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-16 rounded">
                        <img src={img} alt="Tailwind-CSS-Avatar-component"  />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td><button onClick={hanleDelete} class="btn btn-xs btn-error">Delete</button></td>
        </tr>


    );
};

export default DoctorRaw;