import React from 'react';
import './Block.scss';
import CancelIcon from '@material-ui/icons/Cancel';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/core/styles';
import { Zoom } from '@material-ui/core';


const theme = createMuiTheme({
    palette:{
        secondary:{main:'#C34A36'}
    },
    status:{
        danger:'orange'
    }
});

function Block(props) {

    const removeBlock=(e)=>{

        props.removingFromdatabase(props.id);

        e.preventDefault()
    }
    return (
        <Zoom in={true}>
        <div className="block">
            <ThemeProvider theme={theme}>
            <form>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <div className="deleteLine">
                    <CancelIcon onClick={removeBlock} color="secondary"/>
                </div>
            </form>
            </ThemeProvider>
        </div>
        </Zoom>
    )
}

export default Block
