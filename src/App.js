import {useState,useEffect} from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import Arena from './components/Arena';
import './App.css';
import Goodbye from './components/Goodbye';
import AddCombatant from './components/AddCombatant';

function App() {

    let url = `http://localhost:3500`
    let [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
        
        async function fetchStudents() {
            let students = await fetch(`${url}/students`);
            students = await students.json();
            setStudents(students);
        }

    },[]);

    /*
        fetch options object example:
        {
            method: 'GET',
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(data)
        }
    */

    return (
        <div className="App">
            <h2>Welcome to the end! 🔥</h2>
            <Routes>
                <Route path='/' element={<Arena combatants={students}/>} />
                <Route path='/goodbye' element={<Goodbye/>} />
                <Route path='/addCombatant' element={<AddCombatant/>} />
            </Routes>
            <Link to="/addCombatant">
                <Button variant="danger">Add Student</Button>
            </Link>
            
        </div>
    );
}

export default App;
