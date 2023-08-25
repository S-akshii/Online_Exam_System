import { useEffect } from "react"
import { useSelector } from "react-redux"
import { addques,starttimer } from "../redux/actionCreators"
import { useDispatch } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"


export default function Takeexam(){
    const currexam = useSelector((state) => state.currexam)
    const dispatch = useDispatch()

    useEffect(() => {
        // console.log('in useeffect')

        const url = 'http://localhost:3000/api/takeexam'
        const data = {
            id:currexam.id
        }
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
                console.log('questions retrival Success:', data);
                dispatch(addques(data))
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }, [])

    const navigate = useNavigate()
    function handlestarttest(){
        dispatch(starttimer())
        navigate("/startexam/0")
    }

    const timestamp = Date.now();
    var diff = Math.abs(new Date('2022/08/13 1:40') - timestamp)
    var min = Math.floor(diff/1000/60)

    return <div className="container p-5 m-5 border border-4">
    <h1> {currexam.title} </h1>
    <hr/>
    <div className="">
        <h3>Exam instructions</h3>
        <p>
            instructions will be displayed here

        </p>
        <button className="btn btn-success" onClick={handlestarttest}>Start Exam</button>
    </div>

    </div>
    
    // <div className="container">
    //     
    //     <p> exam instructions here</p>
    //     <h6>remaining time: {min}</h6>
    //     
    // </div>

}