import React from 'react';
import './Block.scss';

function Block(props) {
    return (
        <div className="block">
            <form>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
            </form>
        </div>
    )
}

export default Block
