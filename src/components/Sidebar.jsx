import '../styles/Sidebar.scss';

/**
 * Navigation sous forme de sidebar.
 * Composée de 4 liens.
 * @component
 */

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li><a href="#">yoga</a></li>
                <li><a href="#">natation</a></li>
                <li><a href="#">vélo</a></li>
                <li><a href="#">muscu</a></li>
            </ul>

            <p>Copiryght, SportSee 2020</p>
        </div>
    );
}

export default Sidebar;