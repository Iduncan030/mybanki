import icon1 from '../../public/icon-6.svg';
import icon2 from '../../public/icon.svg';
import icon3 from '../../public/icon-1.svg';
import icon4 from '../../public/icon-2.svg';
import icon5 from '../../public/icon-3.svg';
import icon6 from '../../public/icon-4.svg';

function Features() {
    return (
        <section id='features' className="min-h-screen px-10 py-30 sm:px-30 lg:px-[80px] relative overflow-x-hidden">
            <h1 className="titles text-[65px] sm:text-[170px] lg:text-[200px] text-gray-30 opacity-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute z-[-1] ">
                FEATURES
            </h1>
            <div className="lg:min-h-[100vh] flex flex-wrap gap-15 justify-center items-center">
                <div className="max-w-[275px] p-5 h-[450px] bg-[#ffffff65] rounded-normal border-[1px] shadow-2xl border-blue-10  flex flex-col justify-center items-center">
                    <div>
                        <img className="w-60" src={icon2} alt="Icon" />
                    </div>
                    <h3 className=" text-center text-h3 mt-30 mb-15">
                        Deposite
                    </h3>
                    <p className=" text-gray-10 text-center">
                        Clicking on the card opens a form/modal where users can
                        input the deposit amount and choose the account to
                        deposit into.
                    </p>
                </div>
                <div className="max-w-[275px] p-5 h-[450px] bg-[#ffffff65] rounded-normal border-[1px] shadow-2xl border-blue-10  flex flex-col justify-center items-center">
                    <div>
                        <img className="w-60" src={icon5} alt="Icon" />
                    </div>
                    <h3 className=" text-center text-h3 mt-30 mb-15">
                        Withdraw
                    </h3>
                    <p className="text-gray-10 text-center">
                        When users click on the card, it opens a modal or a form
                        where they can specify the withdrawal amount and
                        complete the transaction.
                    </p>
                </div>
                <div className="max-w-[275px] p-5 h-[450px] bg-[#ffffff65] rounded-normal border-[1px] shadow-2xl border-blue-10  flex flex-col justify-center items-center">
                    <div>
                        <img className="w-60" src={icon1} alt="Icon" />
                    </div>
                    <h3 className=" text-center text-h3 mt-30 mb-15">
                        Request Loan
                    </h3>
                    <p className="text-gray-10 text-center">
                        Clicking on the card opens a form for users to request a
                        loan. Include fields for the loan amount, duration, and
                        any other relevant information.
                    </p>
                </div>
                <div className="max-w-[275px] p-5 h-[450px] bg-[#ffffff65] rounded-normal border-[1px] shadow-2xl border-blue-10  flex flex-col justify-center items-center">
                    <div>
                        <img className="w-60" src={icon6} alt="Icon" />
                    </div>
                    <h3 className=" text-center text-h3 mt-30 mb-15">
                        Pay Loan
                    </h3>
                    <p className=" text-gray-10 text-center">
                        Clicking on the card opens a form where users can input
                        the amount they want to repay and choose the loan
                        account.
                    </p>
                </div>
                <div className="max-w-[275px] p-5 h-[450px] bg-[#ffffff65] rounded-normal border-[1px] shadow-2xl border-blue-10  flex flex-col justify-center items-center">
                    <div>
                        <img className="w-60" src={icon3} alt="Icon" />
                    </div>
                    <h3 className=" text-center text-h3 mt-30 mb-15">
                        Transfert Money
                    </h3>
                    <p className=" text-gray-10 text-center">
                        Clicking on the card opens a form/modal allowing users
                        to transfer money between their accounts or to another
                        user. Include fields for the recipient account and
                        transfer amount.
                    </p>
                </div>
                <div className="max-w-[275px] p-5 h-[450px] bg-[#ffffff65] rounded-normal border-[1px] shadow-2xl border-blue-10  flex flex-col justify-center items-center">
                    <div>
                        <img className="w-60" src={icon4} alt="Icon" />
                    </div>
                    <h3 className=" text-center text-h3 mt-30 mb-15">
                        Save Money
                    </h3>
                    <p className=" text-gray-10 text-center">
                        Clicking on the card can take users to a page where they
                        can view their savings account details, set savings
                        goals, or initiate transfers to the savings account.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Features;
