import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/home.js';

import Results from './components/results.js';
import Exams from './components/exams.js';
import Dashboard from './components/dashboard.js';
import Login from './components/login.js';
import Signup from './components/signup.js';
import Takeexam from './components/takeexam.js';
import Startexam from './components/startexam.js';
import { QuestionDisplay } from './components/questiondisplay.js';
import Submit from './components/submit.js';


function App() {
    return <div>
        <Header />
        {/* <Link to = 'login'>Login  </Link>
            <Link to = 'dashboard'>Dashboard  </Link> */}


        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='login' element={<Login />}></Route>
            <Route path='signup' element={<Signup />}></Route>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='exams' element={<Exams />} />
            <Route path='takeexam' element={<Takeexam />}/>
            <Route path='startexam' element={<Startexam/>}>
                <Route path=":qid" element={<QuestionDisplay/>}/>
            </Route>
            <Route path="submit" element={<Submit/>} />
            <Route path='results' element={<Results />} />

        </Routes>
    </div>

}

export default App;