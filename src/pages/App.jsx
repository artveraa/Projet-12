import '../styles/App.scss';
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";
import React from "react";
import {Router, Route, Routes, Link} from "react-router-dom";


/**
 * la page d'accueil principale
 * où tous les graphiques sont affichés au coeur du Dashboard.
 * @component
 */

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
