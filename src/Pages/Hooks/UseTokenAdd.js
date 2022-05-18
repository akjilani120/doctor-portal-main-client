import { useEffect, useState } from "react";

const UseTokenAdd = user => {
    const [token , setToken] = useState('');
    
    useEffect( () =>{        
        const email = user?.user?.email;
        if(email){
            const currentUser = {email:email}
            fetch(`http://localhost:5000/user/${email}`, {
            method:"PUT",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data => {           
            const accessToken = data.token
           
            if(accessToken){
                localStorage.setItem("accessToken" , accessToken)
                setToken(accessToken)
               
            }       
            
           
        })
        }
    }, [user])
    return [token]
};

export default UseTokenAdd;