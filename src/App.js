import React, { Component } from 'react';
import Todos from './todos';

class App extends Component{
  state = {
    todos: [
        {id: 1, content: 'Remember to code daily'},
        {id: 2, content: 'Read at last two chapters a day'}
    ]
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos: todos
    })
  }
  render(){
    return(
      <div className="todo-app container">
        <h1 className="center blue-text">My Todo's</h1>
        <div class="card-panel">
          <Todos todos={this.state.todos}/>
        </div>
      </div>
    )
  }
}

export default App;
