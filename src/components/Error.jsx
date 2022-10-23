import {Link} from "react-router-dom";
import "../styles/Error.scss";

function Error() {
    return (
        <div className="error">
            <h1>404</h1>
            <h2>Page not found</h2>
        </div>
    );
}

export default Error;