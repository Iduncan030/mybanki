import Logo from './Logo';

function Contact() {
    return (
        <footer className="px-15 lg:px-90 pt-60 pb-5 lg:pt-90 bg text-white" id='contact'>
            <div className="flex flex-col lg:flex-row items-satrt lg:items-center lg:justify-between space-y-30 lg:space-y-[0px]">
                <div>
                    <Logo />
                </div>
                <div className="space-y-15 max-w-[300px]">
                    <p>Be the first to know about our banking news</p>
                    <input
                        type="email"
                        placeholder="Email..."
                        className="p-10 w-full bg-transparent border border-blue-50 focus:outline-none"
                    />
                </div>
                <div>
                    <ul className="space-y-15 max-w-[300px]">
                        <li>Mobile APP</li>
                        <li>Services</li>
                        <li>Reviews</li>
                    </ul>
                </div>
                <div>
                    <ul className="space-y-15 max-w-[300px]">
                        <li>Mobile APP</li>
                        <li>Services</li>
                        <li>Reviews</li>
                    </ul>
                </div>
                <div>
                    <ul className="space-y-15 max-w-[300px]">
                        <li>Mobile APP</li>
                        <li>Services</li>
                        <li>Reviews</li>
                    </ul>
                </div>
            </div>
            <div className="mt-30 text-small font-semibold text-center">
                <p>&copy; 2024 myBanki. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Contact;
