import { Link } from 'react-router-dom';
import logo from '../../public/logo.svg';

function Logo() {
    return (
        <div>
            <Link to="/">
                <img src={logo} alt="website's logo" />
            </Link>
        </div>
    );
}

export default Logo;
