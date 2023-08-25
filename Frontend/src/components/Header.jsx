import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "./login";
import { useDispatch, useSelector } from "react-redux";
import { logoutuser } from "../redux/actionCreators";

function Loginbuttons() {
    return <div>
        <Link to="/login" className="btn btn-outline btn-dark"> Login </Link>
        <Link to="/signup" className="btn btn-outline btn-dark" >Signup</Link>
    </div>
}

function Logoutbuttons() { //----------->Component(return html block)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleLogout() { //------------------->normal js function

        console.log("in handlelogout")

        const url = 'http://localhost:3000/logout'
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            // .then(response => response.json())
            .then(data => {
                // console.log('Success:', data);
                dispatch(logoutuser())
                navigate("/")
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }

    return <div>
        <button className="btn  btn-danger" onClick={handleLogout} > Logout </button>
    </div>
}


function Header() {

    const auth = useSelector((state) => state.auth)

    return <div className="navbar navbar-expand-sm navbar-dark">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand ms-md-3" >Online Examination System</Link>
            <button className="navbar-toggler collapsed" type="button" data-bs-toggle='collapse' data-bs-target='#navbar01'>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse" id="navbar01">
                <ul className="navbar-nav me-auto mb-2 mb-sm-0">
                    <li className="nav-item">
                        {/* <a className="nav-link active" href="./">Home</a> */}
                        {/* if you provide normal links the page will reload and state will be lost */}
                        <Link to='/' className="nav-link active"> Home</Link>
                    </li>
                    <li className="nav-item">
                        {/* <a className="nav-link" href="./dashboard">Dashboard</a> */}
                        <Link to="/dashboard" className="nav-link">Dashboard</Link>
                    </li>
                </ul>

                {auth ?
                    <Logoutbuttons /> :
                    <Loginbuttons />
                }


            </div>
        </div>
    </div>
}

export default Header

