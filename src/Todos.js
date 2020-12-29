import React from 'react';

const Todos = ({ todos, deletetodo }) => {
    // console.log(todos);
    const todolist = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => { deletetodo(todo.id) }}>{todo.content}</span>
                </div>
            )
        })
    ) : (
            <p className="center">Nothing to do !</p>
        )


    return (
        <div className="todos collection">
            {todolist}
        </div>
    )

}

export default Todos;