import React from 'react';


const Todos = ({todos}) => {
    const todoList = todos.length ? (
        todos.map(todo =>{
            return(
                <div className="collection-item" key="id">
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p>You're done for today. You've done great</p>
    )

    return(
        <div className="collection todos">
            {todoList}
        </div>
    )
}

export default Todos;