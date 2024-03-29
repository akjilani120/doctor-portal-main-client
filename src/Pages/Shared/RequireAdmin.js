import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import UseAdmin from '../Hooks/UseAdmin';
import Loading from './Loading';
function RequireAdmin({ children }) {
    const [user, loading] = useAuthState(auth)
    const [admin , adminLoading] = UseAdmin(user)
    let location = useLocation();
    if(loading || adminLoading){
        return <Loading></Loading>
    }
    if (!user || !admin) {   
        signOut(auth)  
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  }
  export default RequireAdmin;