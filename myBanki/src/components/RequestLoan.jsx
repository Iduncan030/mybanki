import { useState } from 'react';
import { useUser } from '../contexts/UserProvider';
import Message from './Message';

function RequestLoan() {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const { dispatch, loan } = useUser();

    function handleRequestLoan() {
        if (!amount) {
            setError('Please enter an amount');
            return;
        }
        if (amount < 0) {
            setError('Please enter a positive amount');
            setAmount('');
            return;
        }
        if (loan > 0) {
            setError('You already have a loan');
            setAmount('');
            return;
        }
        dispatch({ type: 'account/requestLoan', payload: amount });
        setAmount('');
    }

    return (
        <div className="action p-15 space-y-5 border-[1px] border-solid border-blue-10">
            <h2 className="lg:text-h3 text-h4">Request Loan</h2>
            <div className="space-y-10">
                <input
                    type="number"
                    placeholder = 'Amount...'
                    value={amount}
                    onChange={e => {
                        setAmount(Number(e.target.value));
                        setError('');
                    }}
                    className="p-5 w-full bg-transparent border border-blue-50 focus:outline-none"
                />
                {error !== '' && (
                    <Message type="error">{error}</Message>
                )}

                <input
                    type="button"
                    value="Request Loan"
                    onClick={handleRequestLoan}
                    className="px-15 w-auto py-10 bg-blue-50 rounded-normal text-white cursor-pointer font-bold"
                />
            </div>
        </div>
    );
}

export default RequestLoan;
