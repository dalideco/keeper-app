import React from 'react';
import './Main.scss';
import Block from './Block';
import Myform from './Myform';

function Main(props) {

    return (
        <div className ="main">
            <Myform addToDatabase={props.addToDatabase}/>
            <div className="mygrid">
                {props.database.map(a=> 
                    <Block
                        key = {a.id}
                        title = {a.title}
                        content= {a.content}
                    />)}

            </div>
            
        </div>
    )
}

export default Main
