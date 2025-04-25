import { Link, Outlet } from 'react-router-dom';
import { useUser } from '../contexts/UserProvider';
import { useEffect, useState } from 'react';
import Transaction from '../components/Transaction';
import { numberFormat } from '../utils/numberFormat';
import DashboardMobile from './DashboardMobile';
import Actions from '../components/Actions';
import { AnimatePresence, motion } from 'framer-motion';
import Message from '../components/Message';
import SavingItem from '../components/SavingItem';

function Dashboard() {
    const [doAction, setDoAction] = useState(false);
    const [addSaving, setAddSaving] = useState(false);
    const [currentTime, setCurrentTime] = useState(new Date());
    const user = useUser();
    const { userName, balance, transactions, loan, savings } = user;
    const posAmount = transactions.reduce(
        (acc, tran) =>
            tran.action === 'Deposit' || tran.action === 'Request loan'
                ? acc + tran.amount
                : acc,
        0
    );
    const negAmount = transactions.reduce(
        (acc, tran) =>
            tran.action === 'Withdraw' || tran.action === 'Pay loan'
                ? acc + tran.amount
                : acc,
        0
    );
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    const time = hours < 12 ? 'AM' : 'PM';

    function handleCloseAction() {
        setDoAction(false);
    }

    // displaying the current time
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <section className=" px-10 py-30 min-h-screen text hidden md:flex items-start gap-30 relative ">
                {addSaving && (
                    <Message
                        type="saving"
                        onClick={() => setAddSaving(false)}
                    />
                )}
                <div className="space-y-15 w-[350px]">
                    <div className="rounded-normal shadow-md hover:shadow-lg p-15 space-y-5 border-[1px] border-solid border-blue-10 relative">
                        <h4 className="text-h4">{userName.toUpperCase()}</h4>
                        <p>
                            <b>${numberFormat(balance)}</b>
                        </p>
                        {loan > 0 && (
                            <p className="loan text-small text-red">
                                You have a loan of <b>${numberFormat(loan)}</b>
                            </p>
                        )}
                        <p className="text-small">
                            {transactions.length === 0
                                ? 'No transactions have been made yet!'
                                : `Last action: ${
                                      transactions[transactions.length - 1]
                                          .action
                                  } / $${numberFormat(
                                      transactions[transactions.length - 1]
                                          .amount
                                  )}`}
                        </p>
                        <p>
                            <span
                                className="underline cursor-pointer"
                                onClick={() => setDoAction(pre => !pre)}
                            >
                                Do an action
                            </span>{' '}
                            <span>&rarr;</span>
                        </p>
                        <AnimatePresence>
                            {doAction && (
                                <Actions
                                    loan={loan}
                                    handleCloseAction={handleCloseAction}
                                />
                            )}
                        </AnimatePresence>
                    </div>
                    <div className="rounded-normal shadow-md hover:shadow-lg p-15 space-y-5 border-[1px] border-solid border-blue-10">
                        <h2 className="lg:text-h3 text-h4 ">Our News</h2>
                        <div className="news overflow-y-scroll">
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Facilis, earum. Nisi
                                reiciendis doloribus itaque nihil id officiis
                                dolores nostrum et voluptate hic pariatur
                                aperiam illo iure, voluptas minus tenetur ipsam.
                                Voluptas animi veritatis aliquam dolorum harum
                                blanditiis eos officia asperiores labore nobis
                                officiis repellendus, a quibusdam commodi
                                doloribus accusantium porro neque similique
                                unde. Quo iusto voluptatum autem quis
                                exercitationem dolore. Voluptatibus fuga velit
                                expedita, impedit nesciunt, corrupti temporibus
                                ratione voluptatum debitis quo dolor suscipit
                                cumque atque corporis explicabo neque cum a
                                reiciendis mollitia in vel dolorum nemo non.
                                Laboriosam, libero? Repellendus, eligendi esse!
                                Quas, consequuntur obcaecati! Minima mollitia
                                laboriosam dignissimos consequuntur, aliquam
                                libero veritatis distinctio asperiores explicabo
                                laudantium molestias temporibus porro numquam
                                eveniet architecto quos nobis reiciendis quas
                                itaque aliquid! Voluptatibus optio error omnis
                                cupiditate architecto labore aspernatur libero,
                                sit ducimus iste sequi officia accusamus
                                inventore quia tempora repudiandae molestiae
                                commodi dolores beatae obcaecati ad perspiciatis
                                veritatis odit deleniti. Hic.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="space-y-15 w-[400px] ">
                    <Outlet />

                    <div className="savings rounded-normal shadow-md hover:shadow-lg p-15 space-y-5 border-[1px] border-solid border-blue-10 relative">
                        <h2 className="lg:text-h3 text-h4 ">Savings</h2>
                        <div className="space-y-5">
                            {savings.length === 0 && (
                                <p className="text-small">
                                    Your saving card is empty
                                </p>
                            )}
                            {savings.length > 0 && (
                                    <div
                                        
                                        className="space-y-10 overflow-hidden overflow-y-scroll h-[170px] "
                                    >
                                        {savings.map((saving, i) => (
                                            <SavingItem
                                                saving={saving}
                                                key={i}
                                            />
                                        ))}
                                    </div>
                            )}
                            <div
                                onClick={() => setAddSaving(pre => !pre)}
                                className={`w-[25px] rounded-normal cursor-pointer bg text-white flex justify-center items-center`}
                            >
                                <i className="ri-add-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-15 w-1/2 ">
                    <div className="transactions rounded-normal shadow-md hover:shadow-lg p-15 pb-60 overflow-hidden">
                        <h2 className="lg:text-h3 text-h4">My Transactions</h2>
                        <div className="h-[100%] space-y-5  overflow-y-scroll px-10 bg text-white">
                            {transactions.length === 0 ? (
                                <p className="text-small">No Transactions</p>
                            ) : (
                                transactions.map((trans, i) => (
                                    <Transaction key={i} trans={trans} />
                                ))
                            )}
                        </div>
                    </div>
                </div>
                <div className="px-15 py-15 w-full bg text-white flex items-center justify-between fixed bottom-[0px] left-[0px] text-small font-semibold ">
                    <div className="flex items-center gap-60">
                        <p>In: ${posAmount}</p>
                        <p>Out: ${negAmount}</p>
                        <Link
                            className="bg-blue-50 px-[20px] py-15 inline-block rounded-normal font-bold text-white"
                            to="/"
                        >
                            Back Home
                        </Link>
                    </div>
                    <div>
                        <p className="space-x-5">
                            <span>{hours < 10 ? '0' + hours : hours}</span>
                            <span>:</span>
                            <span>
                                {minutes < 10 ? '0' + minutes : minutes}
                            </span>
                            <span>:</span>
                            <span>
                                {seconds < 10 ? '0' + seconds : seconds}
                            </span>
                            <span>{time}</span>
                        </p>
                    </div>
                </div>
            </section>
            <DashboardMobile />
        </>
    );
}

export default Dashboard;
