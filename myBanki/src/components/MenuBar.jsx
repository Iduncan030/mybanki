/* eslint-disable jsx-a11y/anchor-is-valid */

function MenuBar({ onClick, handleCloseMenuBar }) {
    return (
        <div className="h-screen w-screen bg fixed z-30">
            <div className=" h-90 flex flex-col justify-center items-center relative">
                <span className="text-h3 cursor-pointer" onClick={onClick}>
                    <i className="ri-close-fill text-white"></i>
                </span>
            </div>
            <div className="menu-bar-links  flex flex-col justify-center items-center">
                <ul className="space-y-60">
                    <li className=" text-center">
                        <a
                            onClick={handleCloseMenuBar}
                            href="#"
                            className="text-h4 text-white"
                        >
                            Home
                        </a>
                    </li>
                    <li className=" text-center">
                        <a
                            onClick={handleCloseMenuBar}
                            href="#features"
                            className="text-h4 text-white"
                        >
                            Features
                        </a>
                    </li>
                    <li className=" text-center">
                        <a
                            onClick={handleCloseMenuBar}
                            href="#pricing"
                            className="text-h4 text-white"
                        >
                            Pricing
                        </a>
                    </li>
                    <li className=" text-center">
                        <a
                            onClick={handleCloseMenuBar}
                            href="#contact"
                            className="text-h4 text-white"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MenuBar;
