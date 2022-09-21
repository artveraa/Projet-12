import '../styles/Navbar.scss';

/**
 * Barre de navigation faisant office de header
 * @component
 */

function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ul>
        </div>
    );
}

export default Navbar;