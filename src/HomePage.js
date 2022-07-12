import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container d-flex flex-column align-items-center px-5 py-3 gap-3">
      <div className="text-center">
        <h1 className="text-dark">Home Page</h1>
        <h3 className="text-secondary mt-2">Visit Different Pages</h3>
      </div>
      <div>
        <div className="container d-flex justify-content-center gap-5">
          <Link to="/pagination" className="btn btn-outline-primary">Pagination App</Link>
          <Link to="/textGenerator" className="btn btn-outline-primary">Text Generator App</Link>
        </div>
      </div>
    </div>
  )
}

export default HomePage;