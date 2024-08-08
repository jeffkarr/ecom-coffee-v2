import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="text-center">
        <h1 className="my-5">404 Page not found</h1>
        <Link to="/home">Home</Link>
    </div>
  )
}

export default NotFoundPage