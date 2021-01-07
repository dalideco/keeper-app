import React,{useState} from 'react'
import './Myform.scss'

function Myform() {
    const [title, setTitle]=useState("");
    const [content , setContent]= useState("");

    const changeTitle= (e)=>{
        setTitle(e.target.value);
    }

    const changeContent= (e)=>{
        setContent(e.target.value);
    }

    return (
        <div className ="myform">
            <form>
                <input name="title" placeholder="title" value={title} onChange={changeTitle}>
                </input>
                <textarea name="content" placeholder="content" value={content} onChange={changeContent}>
                </textarea>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Myform
