import React from 'react';
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Card from "./Components/Card";

const App = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route path='/About' element={<About/>}/>
                    <Route path='/Contact' element={<Contact/>}/>
                    <Route path= '/Card/:user' element={<Card/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default App