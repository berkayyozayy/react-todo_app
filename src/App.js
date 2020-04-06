import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Hi, What you want today?',
      newTodo: '',
      error : false,
      todos: [{
        title: 'Learn React',
        done: false
      }, {
        title: 'Learn JSX',
        done: false
      }]
    };
  }
  validateForm() {
    const todo = this.state.newTodo;
    if ( todo === "") {
      return false;
    }
    return true;
  }

  newTodoChanged(event) {
    this.setState({
      newTodo: event.target.value
    });
  }

  formSubmitted(event) {
    event.preventDefault();

    if(!this.validateForm()) {
      this.setState({
          error : true
      })
      return;
  }

    this.setState({
      newTodo: '',
      todos: [...this.state.todos, {
        title: this.state.newTodo,
        done: false
      }]
    });
  }

  toggleTodoDone(event, index) {
    const todos = [...this.state.todos]; // copy the array
    todos[index] = {
      ...todos[index],
      done: event.target.checked // update done property on copied todo
    }; // copy the todo can also use Object.assign
    this.setState({
      todos
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos]; // copy the array
    todos.splice(index, 1);

    this.setState({
      todos
    });
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        title: todo.title, // can also do ...todo
        done: true
      };
    });

    this.setState({
      todos
    });
  }

  render() {
    return (
      <div className = "col md-8 mb-4">
      <div className="App">
        <h3>{this.state.message}</h3>
        <div className="className card-body">
          {
            this.state.error ?
            <div className="alert alert-danger">
            Please Add a Todo
            </div>
            :null
          }
        </div>
        <NewTodoForm
            newTodo={this.state.newTodo}
            formSubmitted={this.formSubmitted.bind(this)}
            newTodoChanged={this.newTodoChanged.bind(this)} />
        <button onClick={() => this.allDone()}>All Done</button>
        <hr></hr>
        <TodoList
          todos={this.state.todos}
          toggleTodoDone={this.toggleTodoDone.bind(this)}
          removeTodo={this.removeTodo.bind(this)}/>
      </div>
      </div>
    );
    
  }
}

export default App;