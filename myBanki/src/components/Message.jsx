import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserProvider';

function Message({ children, type, onClick }) {
    const [object, setObject] = useState('');
    const [amount, setAmount] = useState('');
    const navigate = useNavigate();
    const { dispatch } = useUser();

    function hanndleCloseMessage() {
        navigate('/dashboard');
    }

    function handleAddSaving(e) {
        e.preventDefault();
        if (!object || !amount) return;

        const newSaving = {
            object,
            amount,
            savedAmount: 0,
        };
        dispatch({ type: 'account/saving', payload: newSaving });
        setObject('');
        setAmount('');
        onClick();
    }

    if (type === 'signup')
        return (
            <div className="w-screen h-screen backdrop-blur-md bg-[#000000a9] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] fixed flex items-center justify-center">
                <div className="py-30 px-60 rounded-normal bg-white text relative ">
                    {children}
                    <span
                        onClick={hanndleCloseMessage}
                        className="px-10 absolute top-[0px] right-[0px] text-h4 cursor-pointer bg text-white"
                    >
                        x
                    </span>
                </div>
            </div>
        );

    if (type === 'error')
        return <p className="mt-5 text-red text-small">{children}</p>;

    if (type === 'saving')
        return (
            <div className="savingForm flex justify-center items-center fixed w-full h-full bg-[#00000085] top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-30">
                <form className="px-15 py-15 w-[320px] bg text-white rounded-large relative">
                    <div className=" h-90 flex flex-col justify-center items-center absolute top-[-25px] right-5">
                        <span
                            className="text-h3 cursor-pointer"
                            onClick={onClick}
                        >
                            <i className="ri-close-fill text-white"></i>
                        </span>
                    </div>
                    <div className="space-y-10 mt-30">
                        <input
                            placeholder="Object..."
                            value={object}
                            onChange={e => setObject(e.target.value)}
                            required
                            className="p-10 w-full bg-transparent border border-blue-50 focus:outline-none"
                        />
                        <input
                            type="number"
                            placeholder="Amount..."
                            value={amount}
                            onChange={e => setAmount(Number(e.target.value))}
                            required
                            className="p-10 w-full bg-transparent border border-blue-50 focus:outline-none"
                        />
                        <input
                            type="submit"
                            value="Add"
                            onClick={handleAddSaving}
                            className="px-15 w-1/2 py-10 bg-blue-50 rounded-normal text-white cursor-pointer font-bold"
                        />
                    </div>
                </form>
            </div>
        );
}

export default Message;
