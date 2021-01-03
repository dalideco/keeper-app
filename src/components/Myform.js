import React from 'react'
import './Myform.scss'

function Myform() {
    return (
        <div className ="myform">
            <form>
                <input name="title" placeholder="title">
                </input>
                <textarea name="content" placeholder="content">
                </textarea>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Myform
