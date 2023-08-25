import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addresults } from "../redux/actionCreators";


function Renderresultcard(props) {
    const dispatch = useDispatch()

    // function handletaketest(event){
    //     // console.log("i am clicked")
    //     const e = event.target
    //     console.log(e.id)

    //     const payload = {
    //         id:e.id,
    //         title:e.title
    //     }
    //     dispatch(taketest(payload))

    // }

    return <tr >
        <td>1</td>
        <td>{props.examid}</td>
        <td> {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(props.time)}  </td>
        <td> {props.score}  </td>
    </tr>

}

export default function Results() {

    const results = useSelector((state) => state.results)
    const dispatch = useDispatch()





    useEffect(() => {
        // console.log('in useeffect')

        const url = 'http://localhost:3000/api/results'
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
                console.log('results retrival Success:', data);
                dispatch(addresults(data))
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
                    <th>Exam</th>
                    <th>Submission Time</th>
                    <th>Score</th>
                </tr>
            </thead>

            <tbody>
                {results.slice().reverse().map((oneresult) => {
                    {/* console.log(oneexam.id) */ }
                    return <Renderresultcard examid={oneresult.examid} time={oneresult.time} score={oneresult.score} />
                })}
            </tbody>
        </table>

    </div>
}