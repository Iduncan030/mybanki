import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthenticationProvider';

function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        // when this component first mounts, we check if the user is authenticated, if so we return the children,
        // otherwise we navigate directly to the login page
        if (!isAuthenticated) navigate('/login', { replace: true });
    }, [isAuthenticated, navigate]);

    return isAuthenticated ? children : null;
}

export default ProtectedRoute;
