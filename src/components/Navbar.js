import axios from 'axios';
import React,{useState,useEffect} from 'react';
import './Navbar.scss';

function Navbar(props) {
    const [weather,setWeather]= useState("not yet gotten");
    return (
        <div className ="navbar">
            <div>
                <div><h1>Keeper</h1></div>
            </div>
        </div>
    )
}

export default Navbar
