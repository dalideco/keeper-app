import React, { useState } from 'react';
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

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}


function Block(props) {
    const [formSizes,setFormSizes] = useState({
        width: '100%',
        minHeight: '150px',
        maxWidth:'300px',
        height: 'default',
        display:'inline-block',
    });
    const [show,setShow]= useState(true);
    


    const  removeBlock=async(e)=>{
        setShow(false);

        await sleep(300);

        props.removingFromdatabase(props.id);

        e.preventDefault()
    }
    return (
        <Zoom in={show} timeout={300}>
            <div className={`block`} style={formSizes}>
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
