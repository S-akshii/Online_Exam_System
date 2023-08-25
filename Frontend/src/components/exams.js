import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addexams ,taketest} from "../redux/actionCreators"
import { Link } from "react-router-dom"


function Renderexamcard(props) {
    const dispatch = useDispatch()

    function handletaketest(event){
        // console.log("i am clicked")
        const e = event.target
        console.log(e.id)
        
        const payload = {
            id:e.id,
            title:e.title
        }
        dispatch(taketest(payload))

    }

    return <tr >
        <td>1</td>
        <td>{props.title}</td>
        <td>
            <Link to="/takeexam" className="btn btn-outline-secondary" title={props.title} id={props.id} onClick={handletaketest}>
                Take exam
            </Link>
        </td>
    </tr>

}

export default function Exams() {
    const examstate = useSelector((state) => state.exams)
    const dispatch = useDispatch()

    useEffect(() => {
        // console.log('in useeffect')

        const url = 'http://localhost:3000/api/getexams'
        fetch(url, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log('exam retrival Success:', data);
                dispatch(addexams(data))
            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }, [])

    return <div className="container mt-5">
        <table className="table table-striped table-hover">
            <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {examstate.map((oneexam) => {
                    console.log(oneexam.id)
                    return <Renderexamcard title={oneexam.title} id={oneexam._id} key={oneexam._id}/>
                })}
            </tbody>
        </table>

    </div>
}