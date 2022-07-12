import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return(
        <div className="container">
            <h2 className="text-secondary m-3">404 Page Not Found</h2>
            <Link to="/" className="btn btn-outline-primary m-3">Go Back to Home</Link>
        </div>
    );
}
export default NotFoundPage;