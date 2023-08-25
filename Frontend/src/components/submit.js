import { Link } from "react-router-dom";

export default function Submit() {
    return <div className="container mx-5 my-5 p-5">
        <h1 className="text-success p-5">Success</h1>
        <p className="p-2 "> Exam was successfully submitted. Click below to get results </p>
        <Link to='/results'> Results</Link>

    </div>
}