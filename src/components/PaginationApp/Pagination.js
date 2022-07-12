import { Link } from "react-router-dom";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++){
        pageNumbers.push(i);
    }


    return (
        <nav>
            <ul className="pagination">
                {pageNumbers.map(page => (
                    <li key={page} className="page-item">
                        <Link to="/pagination" onClick={() => paginate(page)} className="page-link">
                            {page}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;