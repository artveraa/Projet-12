import '../styles/Sidebar.scss';
import yoga from "../svg/yoga.svg"
import natation from "../svg/natation.svg"
import velo from "../svg/velo.svg"
import muscu from "../svg/muscu.svg"

/**
 * Navigation sous forme de sidebar.
 * Composée de 4 liens.
 * @component
 */

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <a href="#">
                        <img src={yoga} alt="yoga"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={natation} alt="natation"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={velo} alt="velo"/>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src={muscu} alt="muscu"/>
                    </a>
                </li>
            </ul>

            <p>Copiryght, SportSee 2020</p>
        </div>
    );
}

export default Sidebar;