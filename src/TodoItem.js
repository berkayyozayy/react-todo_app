import React from 'react';




const TodoItem = (props) => {
  const { todo, index } = props;
  return (
    <div className = "container">
    <li>
      <input onChange={(event) => props.toggleTodoDone(event, index)} type="checkbox" checked={todo.done} />
      <span className={todo.done ? 'done' : ''}>{todo.title}</span>
      <button onClick={() => props.removeTodo(index)}>Remove</button>
    </li>
    </div>
  );
  
};


export default TodoItem;