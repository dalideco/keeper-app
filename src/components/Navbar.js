import React from 'react';
import './Navbar.scss';

function Navbar(props) {

    function submit(e){
        e.preventDefault();
        props.itsfunction();
    }

    return (
        <div className ="navbar">
            <div>
                <div><h1>Keeper</h1></div>
                <div 
                    className="add"
                    onClick={submit}
                    >
                        <h1>+</h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar
