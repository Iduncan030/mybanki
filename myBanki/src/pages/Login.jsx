import { useEffect, useState } from 'react';
import bg1 from '../../public/login.png';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserProvider';
import { useAuth } from '../contexts/AuthenticationProvider';
import Message from '../components/Message';

function Login() {
    // this function will be called in the first render, (lazy evaluation)
    const [users] = useState(
        () => JSON.parse(localStorage?.getItem('users')) ?? []
    );
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    // based on hasAccount state we will dispaly an error
    const [hasAccount, setHasAccount] = useState(null);
    // if the user exist and the password was wrong this state comes to play
    const [passwordErr, setPasswordErr] = useState('');
    const navigate = useNavigate();
    const { dispatch } = useUser();
    const { isAuthenticated } = useAuth();

    // setting the states back to their original state ,
    function handleStates() {
        setUserName('');
        setPassword('');
    }

    function checkPassword(prevPassword, currPassword) {
        return prevPassword === currPassword;
    }

    function handleLogin(e) {
        e.preventDefault();

        if (!userName || !password) return;

        // check if there is no users in the local storage
        if (!users.length) {
            setHasAccount(false);
            handleStates();
            return;
        }

        // check if the user exists based on the userName
        const isExisted =
            users?.find(user => user.userName === userName.trim()) ?? false;

        if (isExisted !== false) {
            // the user is Existed, so checking the password
            if (checkPassword(isExisted.password, password)) {
                handleStates();
                setHasAccount(true);
                dispatch({ type: 'user/login', payload: isExisted });
                navigate('/dashboard');
                return;
            } else {
                setPasswordErr('Incorrect password!');
                setPassword('');
                return;
            }
        } else {
            // the user doesn't exist
            setHasAccount(false);
            return;
        }
    }

    useEffect(() => {
        // when this component first mounts, we'll check if the user is authenticated, if so we'll navigate to the dashboard page and
        // the user will not be able to go back to login page ==> {replace: true}
        if (isAuthenticated) navigate('/dashboard', { replace: true });
    }, [isAuthenticated, navigate]);

    return (
        <div className="min-h-screen sm:h-screen flex flex-col sm:flex-row">
            <div className="h-1/2 p-30 flex flex-col justify-center items-center sm:w-1/2 sm:h-full">
                <h2 className="mb-30 text-center text-h2 font-bold">Log in</h2>
                <form className="mb-30 space-y-15 w-[300px] ">
                    <div>
                        <input
                            value={userName}
                            onChange={e => {
                                setUserName(e.target.value);
                                setHasAccount(null);
                                setPasswordErr('');
                            }}
                            placeholder="Username..."
                            required
                            className="p-10 w-full bg-transparent border border-blue-50 focus:outline-none"
                        />
                        {hasAccount === false && (
                            <p className="mt-5 text-red text-small">
                                {userName !== ''
                                    ? `${userName} doesn't exist!`
                                    : "You don't have an account!"}
                            </p>
                        )}
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={e => {
                                setPassword(e.target.value.trim());
                                setHasAccount(null);
                                setPasswordErr('');
                            }}
                            placeholder="Password..."
                            required
                            className="p-10 w-full bg-transparent border border-blue-50 focus:outline-none"
                        />
                        {passwordErr !== '' && (
                            <Message type="error">{passwordErr}</Message>
                        )}
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Log in"
                            onClick={handleLogin}
                            className="px-15 w-1/2 py-10 bg-blue-50 rounded-normal text-white cursor-pointer font-bold"
                        />
                    </div>
                </form>
                <p className="w-full text-center ">
                    Don't have an account?{' '}
                    <span
                        className="text-blue-50 underline font-medium cursor-pointer"
                        onClick={() => navigate('/signup')}
                    >
                        Sign up
                    </span>
                </p>
            </div>
            <div className="h-1/2 bg flex justify-center items-center sm:w-1/2 sm:h-full">
                <div className="flex w-[600px] justify-center items-center">
                    <img src={bg1} alt="Log in" className="w-auto h-[400px]" />
                </div>
            </div>
        </div>
    );
}

export default Login;
