import React from 'react';
import './Block.scss';
import Button from '@material-ui/core/Button';
import CancelIcon from '@material-ui/icons/Cancel';

function Block(props) {

    const removeBlock=(e)=>{

        props.removingFromdatabase(props.id);

        e.preventDefault()
    }
    return (
        <div className="block">
            <form>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <CancelIcon onClick={removeBlock} color="secondary"/>
            </form>
        </div>
    )
}

export default Block
