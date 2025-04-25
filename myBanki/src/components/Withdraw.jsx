import { useState } from 'react';
import { useUser } from '../contexts/UserProvider';
import Message from './Message';

function Withdraw() {
    const [amount, setAmount] = useState('');
    const [error, setError] = useState('');
    const { dispatch, balance } = useUser();

    function handleWithdraw() {
        if (!amount) {
            setError('Please enter an amount');
            return;
        }
        if (amount < 0) {
            setError('Please enter a positive amount');
            setAmount('');
            return;
        }
        if (amount > balance) {
            setError(
                'The amount you want to withdraw is greater than your balance'
            );
            setAmount('');
            return;
        }
        dispatch({ type: 'account/withdraw', payload: amount });
        setAmount('');
    }

    return (
        <div>
            <div className="action p-15 space-y-5 border-[1px] border-solid border-blue-10">
                <h2 className="lg:text-h3 text-h4 ">Withdraw</h2>
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
                    {error !== '' && <Message type="error">{error}</Message>}

                    <input
                        type="button"
                        value="Withdraw"
                        onClick={handleWithdraw}
                        className="px-15 w-auto py-10 bg-blue-50 rounded-normal text-white cursor-pointer font-bold"
                    />
                </div>
            </div>
        </div>
    );
}

export default Withdraw;
