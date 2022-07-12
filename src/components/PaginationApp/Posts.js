
const Posts = ({ posts, isLoading }) => {
    if(isLoading){
        return <h2>Loading</h2>
    }
    return (
        <ul className="list-group mb-4">
            {
                posts.map((post, index) => (
                    <li key={index} className="list-group-item">
                        {post.substring(0, 200)}
                    </li>
                ))
            }
        </ul>
    )
}

export default Posts