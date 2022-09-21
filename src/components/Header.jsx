import '../styles/Header.scss';
import logo from '../img/logo.svg';
import Navbar from "./Navbar";

/**
 * Header de la page d'accueil
 * @component
 */

function Header()  {
    return (
        <div className="header">
            <div className="header__logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="header__navbar">
                <Navbar />
            </div>
        </div>
    );

}

export default Header;