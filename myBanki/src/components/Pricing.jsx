import icon from '../../public/icon.svg';

function Pricing() {
    return (
        <section
            id="pricing"
            className="min-h-screen px-10 py-30 sm:px-30 relative overflow-x-hidden"
        >
            <h1 className="titles text-[65px] sm:text-[170px] lg:text-[200px] text-gray-30 opacity-50 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] absolute z-[-1] ">
                PRICING
            </h1>
            <div className="lg:min-h-[100vh] flex flex-wrap gap-15 justify-center items-center">
                <div className="relative w-[250px] p-5 h-[400px] bg-[#ffffff65] rounded-normal border-[1px] shadow-2xl border-blue-10 flex flex-col justify-center items-center">
                    <div>
                        <img className="w-60" src={icon} alt="Icon" />
                    </div>
                    <h3 className="text-center text-h4 mt-30 mb-15">Basic</h3>
                    <div className=" text-gray-10">
                        <ul className="list-disc list-inside">
                            <li>Free Online Banking</li>
                            <li>Debit Card</li>
                            <li>Transaction Alerts</li>
                        </ul>
                    </div>
                    <p className="text-small font-bold bg-blue-50 rounded-normal px-15 py-5 absolute top-[-12px] left-[-10px] rotate-[-30deg]">
                        FREE
                    </p>
                </div>
                <div className="relative w-[250px] p-5 h-[400px] bg-[#ffffff65] rounded-normal border-[1px] shadow-2xl border-blue-10  flex flex-col justify-center items-center">
                    <div>
                        <img className="w-60" src={icon} alt="Icon" />
                    </div>
                    <h3 className=" text-center text-h4 mt-30 mb-15">
                        Premium
                    </h3>
                    <div className="text-gray-10">
                        <ul className="list-disc list-inside">
                            <li>Free Online Banking</li>
                            <li>Debit Card</li>
                            <li>Transaction Alerts</li>
                            <li>Bill Pay</li>
                            <li>Personal Finance Adviso</li>
                        </ul>
                    </div>
                    <p className="text-small font-bold bg-blue-50 rounded-normal px-15 py-5 absolute top-[-12px] left-[-10px] rotate-[-30deg]">
                        $19.99
                    </p>
                </div>
                <div className="relative w-[250px] p-5 h-[400px] bg-[#ffffff65] rounded-normal border-[1px] shadow-2xl border-blue-10  flex flex-col justify-center items-center">
                    <div>
                        <img className="w-60" src={icon} alt="Icon" />
                    </div>
                    <h3 className=" text-center text-h4 mt-30 mb-15">
                        Standard
                    </h3>
                    <div className="text-gray-10">
                        <ul className="list-disc list-inside">
                            <li>Free Online Banking</li>
                            <li>Debit Card</li>
                            {/* <li>Transaction Alerts</li>
                            <li>Bill Pay</li>
                        <li>Personal Finance Adviso</li> */}
                            <li>Transaction Alerts Bill Pay</li>
                        </ul>
                    </div>
                    <p className="text-small font-bold bg-blue-50 rounded-normal px-15 py-5 absolute top-[-12px] left-[-10px] rotate-[-30deg]">
                        $99.99
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Pricing;
