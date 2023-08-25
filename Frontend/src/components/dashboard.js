import { useSelector, useDispatch } from "react-redux"
import { loginuser, logoutuser, adduser } from "../redux/actionCreators"
import { Link, Outlet, } from 'react-router-dom';
import { useEffect } from "react";
import { Navigate } from "react-router-dom"; { }

export default function Dashboard() {

    const auth = useSelector((state) => state.auth)
    const user = useSelector((state) => state.user)
    // console.log(users)
    const dispatch = useDispatch()


    return <div className="container-fluid">
        {/* {!auth && (
            <Navigate to="/login" />
            
        )} */}
        {/* {auth?null:<div>not logged in </div>} */}


        <div className="dashboard container-fluid m-2 p-3 py-auto" >
            <h2 className="border-bottom mb-5"> <i className="fa-solid fa-tv"></i> Dashboard</h2>

            <div className="row gx-5">
                <div className="col-12 col-sm-6 col-lg-3">

                    <div className="card h-100 text-center content-align-center ">
                        <img src="/images/exam.png" className="w-100 mx-auto p-5"></img>
                        <div className="card-text p-2"> Click here to view available tests.</div>
                        <Link to="/exams" className="text-decoration-none">
                            <h5 className="card-title mt-3 p-2 ">
                                Take Exam
                            </h5></Link>
                    </div>

                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="card h-100 text-center content-align-center ">
                        <img src="/images/result.png" className="w-100 mx-auto p-5"></img>
                        <div className="card-text p-2"> Click here to view Results.</div>
                        <Link to="/results" className="text-decoration-none p-0">
                            <h5 className="card-title mt-3 p-2 ">
                                View Results
                            </h5></Link>
                    </div>
                </div>
            </div>

        </div>

    </div>
}