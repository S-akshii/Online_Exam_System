import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginuser } from "../redux/actionCreators";

export default function Login() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function postdata(url, data) {
        // console.log(JSON.stringify(data))
        fetch(url, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(data => {
                // console.log('login Success:', data);
                dispatch(loginuser(data))
                navigate("/dashboard")
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    function handlelogin(event) {
        event.preventDefault();
        // console.log(event.target.username.value, event.target.password.value)
        const e = event.target
        const data = {
            username: e.username.value,
            password: e.password.value
        }
        postdata("http://localhost:3000/login", data)
    }

    return <div className="container p-5 mt-5">
        {/* {auth && (
            <Navigate to="/dashboard" />
        )} */}
        <div className="row d-flex justify-content-center align-items-center mb-4">
            <div className="col-6  ">

                <form onSubmit={handlelogin} >
                    <div>
                        <label className="form-label" htmlFor="loginEmail">Email</label>
                        <input className="form-control" type="email" id='loginEmail' name="username" placeholder="email@example.com" />

                    </div>

                    <div>
                        <label className="form-label" htmlFor="loginPassword" >Password</label>
                        <input className="form-control" type="password" name="password" id="loginPassword" ></input>

                    </div>

                    <div>
                        <button className="btn btn-primary btn-block mb-4 mt-2" type="submit" >Login</button>
                    </div>


                </form>
            </div>
        </div>
    </div>

}

