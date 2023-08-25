import { useSelector } from "react-redux"

export default function Home() {

    const auth = useSelector((state) => state.auth)
    const user = useSelector((state) => state.user)
    const examstate = useSelector((state)=>state.exams)
    const currexam = useSelector((state)=>state.currexam)

    return <div className="container-fluid">
        <div> This is homepage</div>
        <div>printing states</div>
        <div>
            Auth = {auth?'true':'false'}...
            user = {user.name}
            <hr></hr>
            examstate = {examstate[0].title}
            no of ques = {currexam.num_of_ques}
            
        </div>
    </div>
} //react router , react redux