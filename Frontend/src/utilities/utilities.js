///////--------following utilities are for signup component---------
import { useDispatch } from "react-redux";
import { loginuser } from "../redux/actionCreators";



function postdata(url,data){
    // const dispatch = useDispatch()

    // const data = { username: 'example' };
    console.log(JSON.stringify(data))

    fetch(url, {
    method: 'POST',
    mode : 'cors',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
    // console.log('Success:', data);
        // dispatch(loginuser(data))
        
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
        username : e.username.value,
        password : e.password.value
    }
    postdata('http://localhost:3000/signup',data)
    

}


export {handlesignup,postdata}

