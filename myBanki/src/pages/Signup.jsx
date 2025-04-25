import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserProvider';

import bg1 from '../../public/login.png';
import Message from '../components/Message';

function Signup() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // based on hasAccount state we will dispaly an error or success message
    const [hasAccount, setHasAccount] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { dispatch } = useUser();

    // setting the states back to their original state ,
    function handleStates() {
        setEmail('');
        setUserName('');
        setPassword('');
    }

    function handleSingup(e) {
        e.preventDefault();

        if (!userName || !email || !password) return;

        const newUser = {
            userName: userName.trim(),
            email: email.trim(),
            password: password.trim(),
            balance: 0,
            loan: 0,
            transactions: [],
            savings: [],
        };
        // If there are no users in the local storage so an empty array is returned,
        const users = JSON.parse(localStorage?.getItem('users')) ?? [];

        if (users.length > 0) {
            // If the users local storage exists so check if the user already has an account(checking email)
            const isExistedEmail = users.some(
                item => item.email === newUser.email
            );
            const isExistedUserName = users.some(
                item => item.userName === newUser.userName
            );

            // If the user doesn't exist, add user info to the local storage, else return the previous users
            if (!isExistedEmail && !isExistedUserName) {
                localStorage.setItem(
                    'users',
                    JSON.stringify([...users, newUser])
                );
                // updating the state
                dispatch({ type: 'user/singup', payload: newUser });
                setHasAccount(isExistedEmail);
                handleStates();
            } else if (!isExistedEmail && isExistedUserName) {
                setError(
                    'The username has already been taken, please try another one'
                );
                localStorage.setItem('users', JSON.stringify([...users]));
                setUserName('');
            } else {
                localStorage.setItem('users', JSON.stringify([...users]));
                setHasAccount(isExistedEmail);
                handleStates();
            }

            return;
        } else {
            // If there are no users in the local storage so a new local storage is created 'users',
            localStorage.setItem('users', JSON.stringify([newUser]));
            setHasAccount(false);
            dispatch({ type: 'user/singup', payload: newUser });
            handleStates();
            return;
        }
    }

    return (
        <div className="min-h-screen sm:h-screen bg flex flex-col sm:flex-row relative">
            {hasAccount === false && (
                <Message type="signup" dispatch={dispatch}>
                    You've signed up successfully!
                </Message>
            )}
            <div className="h-1/2 bg-white flex justify-center items-center sm:w-1/2 sm:h-full">
                <div className="flex w-[600px] justify-center items-center">
                    <img src={bg1} alt="Log in" className="w-auto h-[400px]" />
                </div>
            </div>
            <div className="h-1/2 p-30 text-white flex flex-col justify-center items-center sm:w-1/2 sm:h-full">
                <h2 className="mb-30 text-center text-h2 font-bold">Sign up</h2>
                <form className="mb-30 space-y-15 min-w-[300px] max-w-[320px] ">
                    <div>
                        <input
                            value={userName}
                            onChange={e => {
                                setUserName(e.target.value);
                                setHasAccount(null);
                                setError('');
                            }}
                            placeholder="Username..."
                            required
                            className="p-10 w-full bg-transparent border border-blue-50 focus:outline-none"
                        />
                        {error !== '' && (
                            <Message type="error">{error}</Message>
                        )}
                    </div>
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={e => {
                                setEmail(e.target.value);
                                setHasAccount(null);
                                setError('');
                            }}
                            placeholder="Email..."
                            required
                            className="p-10 w-full bg-transparent border border-blue-50 focus:outline-none"
                        />
                        {hasAccount && (
                            <Message type="error">
                                the email has been used before!
                            </Message>
                        )}
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={e => {
                                setPassword(e.target.value.trim());
                                setHasAccount(null);
                                setError('');
                            }}
                            placeholder="Password..."
                            required
                            className="p-10 w-full bg-transparent border border-blue-50 focus:outline-none"
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value="Sign up"
                            onClick={handleSingup}
                            className="px-15 w-1/2 py-10 bg-blue-50 rounded-normal text-white cursor-pointer font-bold"
                        />
                    </div>
                </form>
                <p className="w-full text-center ">
                    Already have an account?{' '}
                    <span
                        className="text-blue-50 underline font-medium cursor-pointer"
                        onClick={() => navigate('/login')}
                    >
                        Log in
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Signup;
