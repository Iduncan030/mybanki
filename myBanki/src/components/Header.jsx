import { useState } from 'react';
import Logo from '../components/Logo';
import PagesLinks from '../components/PagesLinks';
import MenuBar from '../components/MenuBar';
import { Link } from 'react-router-dom';

function Header() {
    const [isVisible, SetIsVisible] = useState(false);

    function handleMenuBar() {
        SetIsVisible(pre => !pre);
    }

    function handleCloseMenuBar() {
        SetIsVisible(false);
    }

    return (
        <header className="header min-h-screen bg-[center_right_-300px] sm:bg-center bg-no-repeat bg-cover overflow-hidden relative">
            {isVisible && (
                <MenuBar
                    onClick={handleMenuBar}
                    handleCloseMenuBar={handleCloseMenuBar}
                />
            )}
            <div className="h-full px-10 pt-30 sm:px-30 lg:px-[80px] bg-[#00000080]">
                <nav className="flex justify-between items-center ">
                    <Logo />
                    <PagesLinks />
                    <div
                        className="lg:hidden text-white text-h3"
                        onClick={handleMenuBar}
                    >
                        <i className="ri-menu-4-line"></i>
                    </div>
                    <div className="hidden lg:block">
                        <Link
                            className="bg-blue-50 px-[20px] py-15 inline-block rounded-normal font-bold text-white"
                            to="dashboard"
                        >
                            Dashboard
                        </Link>
                    </div>
                </nav>
                <section className="herro-section flex flex-col justify-center items-start ">
                    <div className="mb-60 space-y-60">
                        <div className="space-y-30">
                            <h1 className=" max-w-[850px] text-h2 sm:text-h1 text-white leading-[85px]">
                                Make your life esier by{' '}
                                <span className="text-blue-50">
                                    online banking
                                </span>
                                .
                            </h1>
                            <h4 className="font-semibold text-white">
                                Manage finance by security and joy.
                            </h4>
                        </div>
                        <div className="space-x-15">
                            <Link
                                className="bg-blue-50 px-[20px] py-15 inline-block rounded-normal font-bold text-white"
                                to="dashboard"
                            >
                                Dashboard
                            </Link>
                            <Link
                                to="signup"
                                className="border bg-transparent px-[20px] py-15 inline-block text-white rounded-normal font-bold "
                            >
                                Sign up
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </header>
    );
}

export default Header;
