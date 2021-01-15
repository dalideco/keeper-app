import React from 'react';
import './Block.scss';
import CancelIcon from '@material-ui/icons/Cancel';
import {createMuiTheme} from '@material-ui/core/styles';
import {green} from '@material-ui/core/colors';
import {blue} from '@material-ui/core/colors';
import {ThemeProvider} from '@material-ui/core/styles'

const theme = createMuiTheme({
    palette:{
        primary:green,
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
        <div className="block">
            <ThemeProvider theme={theme}>
            <form>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <CancelIcon onClick={removeBlock} color="secondary"/>
            </form>
            </ThemeProvider>
        </div>
    )
}

export default Block
