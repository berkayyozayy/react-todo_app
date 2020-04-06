import React from 'react';


const NewTodoForm = (props) => {
    return (
        <div className = "container">
        <form onSubmit={props.formSubmitted}>
            <label htmlFor="newTodo">New Todo</label>
            <input onChange={props.newTodoChanged}id="newTodo" name="newTodo" value={props.newTodo}/><hr></hr>
            <button type="submit">Add Todo</button>
            <hr></hr>
        </form>
        </div>
    )
}


export default NewTodoForm;