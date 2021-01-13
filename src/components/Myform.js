import React,{useState} from 'react'
import './Myform.scss'
import AddIcon from '@material-ui/icons/Add';

function Myform(props) {
    const [input, setInput]=useState({
        title: "",
        content:""
    });

    const handleChange= (e)=>{
        setInput((prev)=>{
            return {
                ...prev, 
                [e.target.name]:e.target.value
            }
        }
        )
    }
    const addToDatabase=(e)=>{
        e.preventDefault();
        props.addToDatabase(input);

    }

    return (
        <div className ="myform">
            <form>
                <input name="title" placeholder="title" value={input.title} onChange={handleChange}>
                </input>
                <textarea name="content" placeholder="content" value={input.content} onChange={handleChange}>
                </textarea>
                <button onClick={addToDatabase}>
                    <AddIcon />
                </button>
            </form>
        </div>
    )
}

export default Myform
