import '../styles/App.scss';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import React from "react";
import {Router, Route, Routes, Link} from "react-router-dom";


function App(props) {
    return (
        <div className="App">

              <Header/>
            <div className='content'>
                <Sidebar/>
                <Routes>
                    <Route path="/user/:id" element={<Dashboard/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
