import { useSelector } from "react-redux"
import { Link, Outlet } from "react-router-dom"

function QuestionPallete() {
    const currexam = useSelector((state) => state.currexam)

    return <div className="FixedHeightContainer card vh-50 card-light border border-2 m-2">
        <div className=" Content card-body">
            <div className="card-title fw-bold border-bottom border-1 mb-2 pb-1">Questions </div>
            <div className="d-flex ">
                {currexam.questions.map((question, index) => {
                    {/* const sr_num = findIndex(isLargeNumber) */ }
                    let url = "./" + String(index)
                    return <div className="p-2">
                        {/* {question._id} */}
                        <Link to={url} className=" question-button btn rounded-circle" >{index + 1}</Link>
                    </div>
                })}
                {/* <div>
                    blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah... ..blah blah blah...
                </div> */}
            </div>
        </div>

    </div>
}


export default function Startexam() {
    const currexam = useSelector((state) => state.currexam)

    return <div className="container p-5 mt-1 mb-4">
        <div className="border-bottom border-1 p-2 d-flex flex-row position-relative" >
            <h5 className="text-capitalize"> {currexam.title}</h5>
            <div className="position-absolute end-0"> Single Choice Questions</div>
        </div>

        <div className="row">
            <div className="col-8 p-1">
                <div className="container">
                    <Outlet />
                </div>
            </div>
            <div className="col-4 p-1 ">
                <QuestionPallete />


            </div>

        </div>
    </div>
}