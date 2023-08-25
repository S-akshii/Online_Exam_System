import { bindActionCreators, createReducer } from "@reduxjs/toolkit";
import { loginuser, logoutuser, addexams, taketest, addques ,starttimer, chooseoption, addresults} from "./actionCreators";

const initialstate = {
    auth: false,
    user: {
        name: "Noname",
        email: "Noemail",
        id: "Noid"
    },
    exams: ["i am examstate", " array"],
    currexam : {
        id: "noid",
        title: "notitle",
        questions:[],
        starttime: null,
        num_of_ques: 0,
        chosenoptions:[]

    },
    results:["this is ","results arrya"],
    questions: {},
    results: {}
}


export const Reducer = createReducer(
    initialstate,
    (builder) => {
        builder
            .addCase(loginuser, (state, action) => {
                state.auth = true
                state.user.name = action.payload.name
                state.user.email = action.payload.email
                state.user.id = action.payload.id
            })
            .addCase(logoutuser, (state, action) => {
                state.auth = false
                state.user.name = "Noname"
                state.user.id = "Noid"
                state.user.email = "Noemail"

            })
            .addCase(addexams, (state, action) => {
                // console.log(action.payload[0])
                state.exams = action.payload
                // state.exams = ["reducer changed this"]
            })
            .addCase(taketest,(state,action) =>{
                // console.log(action.payload)
                state.currexam.id = action.payload.id
                state.currexam.title = action.payload.title
            })
            .addCase(addques,(state,action)=>{
                // console.log("in reducer")
                // console.log(action.payload)
                state.currexam.questions = action.payload
                state.currexam.num_of_ques = action.payload.length
                state.currexam.chosenoptions = new Array(action.payload.length).fill(0)
                // console.log(state.currexam.chosenoptions)
            })
            .addCase(chooseoption,(state,action)=>{
                // console.log(action.payload)
                // console.log("before",state.currexam.chosenoptions[1])
                state.currexam.chosenoptions[action.payload.qid] = action.payload.value
                // console.log("after",state.currexam.chosenoptions[1])
            })
            .addCase(starttimer,(state,action)=>{
                state.currexam.starttime = Date.now()
            })
            .addCase(addresults,(state,action)=>{
                state.results = action.payload
            })

    }

)