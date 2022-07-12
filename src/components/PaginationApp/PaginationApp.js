import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Posts from "./Posts";
import Pagination from "./Pagination";

const URL = "http://jsonplaceholder.typicode.com/posts";

function PaginationApp() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(10);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await axios.get(URL);
      setPosts(res.data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  //Get Current Posts
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //Pagination function
  const paginate = (page) => {
    setCurrentPage(page);
  }


  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">My Blog Site</h1>
      <Posts posts={currentPosts} isLoading={isLoading} />
      <Pagination totalPosts={posts.length} postPerPage={postPerPage} paginate={paginate} />
      <Link to="/" className="my-5 btn btn-outline-primary">Go To Home Page</Link>
    </div>
  );
}

export default PaginationApp;
