import React from 'react';
import './Main.scss';
import Block from './Block';
import Myform from './Myform';

function Main(props) {

    return (
        <div className ="main">
            <Myform/>
            <div className="mygrid">
                {props.database.map(a=> 
                    <Block
                        key = {a.id}
                        header = {a.header}
                        description= {a.description}
                    />)}

            </div>
            
        </div>
    )
}

export default Main
