function PagesLinks() {
    return (
        <div className={`hidden lg:block  text-white`}>
            <ul className="flex items-center gap-30">
                <li>
                    <a href="#features">Features</a>
                </li>
                <li>
                    <a href="#pricing">Pricing</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
}

export default PagesLinks;
