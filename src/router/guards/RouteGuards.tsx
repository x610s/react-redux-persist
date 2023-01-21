import { Navigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


export const ProtectedRoute = ({ children }:{children:JSX.Element}) => {
    const User = useAuth();
    if (User == null ) {
      return <Navigate to="/login" replace />; 
    }  
    return children;
};

export const ProtectedLogin = ({ children }:{children:JSX.Element}) => {
    const User = useAuth();
    if (User != null) {
      return <Navigate to="/" replace />;
    }
    return children;
  };
