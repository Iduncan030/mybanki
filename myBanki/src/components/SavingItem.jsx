import { useState } from 'react';
import { numberFormat } from '../utils/numberFormat';
import { AnimatePresence, motion } from 'framer-motion';
import { useUser } from '../contexts/UserProvider';

function SavingItem({ saving }) {
    const [savingAmount, setSavingAmount] = useState('');
    const [edit, setEdit] = useState(false);
    const [error, setError] = useState('');
    const { object, amount, savedAmount } = saving;
    const { dispatch, balance } = useUser();

    function handleEditAmounit() {
        if (!savingAmount) return setEdit(false);

        if (balance < savingAmount) {
            setSavingAmount('');
            setError('Your balance is too low.');

            return;
        }

        if (savingAmount + savedAmount > amount) {
            setSavingAmount('');
            setError('Your saved amount is too big.');

            return;
        }

        dispatch({
            type: 'account/savedAmount',
            payload: {
                object,
                amount,
                savedAmount: savingAmount + savedAmount,
            },
        });
        dispatch({ type: 'account/withdraw', payload: savingAmount });
        setEdit(false);
        setSavingAmount('');
    }

    function handleRemoveObject(objectName) {
        dispatch({ type: 'account/removeObject', payload: objectName });
    }

    return (
        <div className="relative border-b flex items-start justify-between gap-10">
            <AnimatePresence>
                {edit && (
                    <motion.div
                        initial={{ x: '-30vw', opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: '-30vw', opacity: 0 }}
                        className="absolute top-[0px] left-[0px] w-full h-full bg text-white flex items-center justify-between px-5"
                    >
                        <div className="flex items-center">
                            <input
                                type="number"
                                placeholder="Amount..."
                                value={savingAmount}
                                onChange={e => {
                                    setSavingAmount(Number(e.target.value));
                                    setError('');
                                }}
                                required
                                className="p-5 w-[80%] bg-transparent border border-blue-50 focus:outline-none"
                            />
                            {error !== '' && (
                                <p className=" text-red text-center text-small">
                                    {error}
                                </p>
                            )}{' '}
                        </div>
                        <div className="flex items-center gap-5">
                            <input
                                type="submit"
                                value="Edit"
                                onClick={handleEditAmounit}
                                className="p-10 bg-blue-50 rounded-normal text-white cursor-pointer text-small font-semibold"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            <div>{object}</div>
            <div className="flex items-start justify-center gap-10">
                <div>
                    <progress
                        className=""
                        value={savedAmount}
                        max={amount}
                    ></progress>
                    <div className="text-small text-end font-semibold">
                        ${numberFormat(amount - savedAmount)}
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <div
                        onClick={() => setEdit(true)}
                        className=" w-[25px] rounded-normal cursor-pointer bg text-white flex justify-center items-center"
                    >
                        <i className="ri-edit-2-fill"></i>
                    </div>
                    <div
                        onClick={() => handleRemoveObject(object)}
                        className=" w-[25px] rounded-normal cursor-pointer bg text-white flex justify-center items-center"
                    >
                        <i class="ri-delete-bin-7-fill"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SavingItem;
