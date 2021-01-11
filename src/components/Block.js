import React from 'react';
import './Block.scss';
import Button from '@material-ui/core/Button';


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
                <Button variant="outlined" color ="secondary" onClick ={removeBlock}>
                    x
                </Button>

            </form>
        </div>
    )
}

export default Block
