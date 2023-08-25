// import { handlesignup } from "../utilities/utilities"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { loginuser } from "../redux/actionCreators"

export default function Signup() {
    const dispatch = useDispatch()


    function postdata(url, data) {

        // const data = { username: 'example' };
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
                console.log('Success:', data);
                dispatch(loginuser(data))

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    function handlesignup(event) {
        event.preventDefault();
        const e = event.target
        // console.log(event.target.name.value,event.target.username.value, event.target.password.value)
        const data = {
            username: e.username.value,
            password: e.password.value
        }
        postdata('http://localhost:3000/signup', data)


    }


    const auth = useSelector((state) => state.auth)

    return <div className="container p-5 mt-5">
        {auth && (
            <Navigate to="/dashboard" />
        )}
        <div className="row d-flex justify-content-center align-items-center mb-4">
            <div className="col-6  ">
                <form onSubmit={handlesignup} >
                    <div>
                        <label className="form-label" htmlFor="signupName">Name</label>
                        <input className="form-control" type="text" id='signupName' name="name" placeholder="fname lname" />

                    </div>


                    <div>
                        <label className="form-label" htmlFor="loginEmail">Email</label>
                        <input className="form-control" type="email" id='loginEmail' name="username" placeholder="email@example.com" />

                    </div>

                    <div>
                        <label className="form-label" htmlFor="loginPassword" >Password</label>
                        <input className="form-control" type="password" name="password" id="loginPassword" ></input>

                    </div>

                    <div>
                        <button className="btn btn-primary btn-block mb-4 mt-2" type="submit" >Signup</button>
                    </div>


                </form>
            </div>
        </div>
    </div>

}