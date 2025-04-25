import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserProvider';
import { useState } from 'react';
import Message from './Message';

function PayLoan() {
    const { dispatch, loan, balance } = useUser();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    function handlePayLoan() {
        if (balance < loan) {
            setError('Your current balance is too low');
            return;
        }

        dispatch({ type: 'account/payLoan' });
        navigate('/dashboard');
    }

    return (
        <div className="action p-15 space-y-5 border-[1px] border-solid border-blue-10">
            <h2 className="lg:text-h3 text-h4">Pay Loan</h2>
            <div className="space-y-10">
                {error !== '' && <Message type="error">{error}</Message>}
                <input
                    type="button"
                    placeholder = 'Amount...'
                    value={`Pay Loan ${loan > 0 ? `$${loan}` : ''}`}
                    onClick={handlePayLoan}
                    className="px-15 w-auto py-10 bg-blue-50 rounded-normal text-white cursor-pointer font-bold"
                />
            </div>
        </div>
    );
}

export default PayLoan;
