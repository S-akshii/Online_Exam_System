import { useNavigate, useParams } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { chooseoption } from "../redux/actionCreators";

export function QuestionDisplay() {
    let { qid } = useParams();
    qid = Number(qid)
    const currexam = useSelector((state) => state.currexam)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleChange(event) {
        console.log('in handlechange', event.target.value)
        const data = {
            qid: qid,
            value: Number(event.target.value)
        }
        dispatch(chooseoption(data))
        // currexam.chosenoptions[qid] = event.value
    }

    function handlesubmit() {
        const data = {
            examid: currexam.id,
            answers: []
        }
        currexam.questions.forEach((question, index) => {
            data.answers.push({
                qid: question._id,
                ans: currexam.chosenoptions[index]
            })
        });
        // console.log(data)
        

        const url = 'http://localhost:3000/api/submit'

        fetch(url, {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(() => {
                navigate("/submit")
            })
            .catch((error) => {
                console.error('Error:', error);
            });



    }

    return <div className="container p-5 m-2 border border-2">
        <div className="border-bottom border-1 fw-bold">
            Question No. {qid + 1}
        </div>
        <div className="p-2">
            {currexam.questions[qid].qun}
        </div>


        <form>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="op1" id="exampleRadios1" value="1"
                    onChange={handleChange} checked={currexam.chosenoptions[qid] == 1} />
                <label className="form-check-label" for="op1">
                    {currexam.questions[qid].op1}
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="op2" id="exampleRadios1" value="2"
                    onChange={handleChange} checked={currexam.chosenoptions[qid] == 2} />
                <label className="form-check-label" for="op2">
                    {currexam.questions[qid].op2}
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="op3" id="exampleRadios1" value="3"
                    onChange={handleChange} checked={currexam.chosenoptions[qid] == 3} />
                <label className="form-check-label" for="op3">
                    {currexam.questions[qid].op3}
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name="op4" id="exampleRadios1" value="4"
                    onChange={handleChange} checked={currexam.chosenoptions[qid] == 4} />
                <label className="form-check-label" for="op4">
                    {currexam.questions[qid].op4}
                </label>
            </div>
        </form>

        <div className="p-3 m-2">

            <Link to={"/startexam/" + String(qid - 1)} className={(qid == 0) ? "btn btn-primary disabled m-2" : "btn btn-primary m-2"} >Prev</Link>
            <Link to={"/startexam/" + String(qid + 1)} className={(qid == currexam.num_of_ques - 1) ? "btn btn-primary disabled" : "btn btn-primary"} >Next</Link>
        </div>
        <div className="d-flex justify-content-md-end">
            <button className="btn btn-success btn-large" onClick={handlesubmit}>Submit</button>
        </div>
    </div>
}