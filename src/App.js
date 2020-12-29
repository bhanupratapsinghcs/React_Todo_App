import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';

class App extends Component {
    state = {
        todos: [
            { id: 1, content: 'have fun' },
            { id: 2, content: 'play game' }
        ]
    }
    deleteTodo = (id) => {
        console.log(id);
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({
            todos: todos
        })
    }
    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo]
        this.setState({
            todos: todos
        })
    }
    render() {
        return (
            <div className="todo-app container">

                <h1 className="center red-text">Todos</h1>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} deletetodo={this.deleteTodo} />

            </div>
        );
    }
}

export default App;
