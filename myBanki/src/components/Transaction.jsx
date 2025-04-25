import { numberFormat } from "../utils/numberFormat";

function Transaction({ trans }) {
    const { amount, date, action, time } = trans;
    const color =
        action.toLowerCase() === 'deposit' ||
        action.toLowerCase() === 'request loan'
            ? 'text-green'
            : 'text-red';

    return (
        <div className="space-y-5 border-b">
            <div className="w-full flex items-center justify-between">
                <p className={`text-small font-semibold ${color}`}>${numberFormat(amount)}</p>
                <p>{action}</p>
            </div>
            <div className="text-small flex items-center gap-10 font-semibold">
                <p>{time}</p>
                <p>{date}</p>
            </div>
        </div>
    );
}

export default Transaction;
