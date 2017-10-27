import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => {
    return (
        <ul>
            {
                todos.map(todo => {
                    return <Todo key={todo.id}
                                 text={todo.text}
                                 onClick={(id) => {
                                     onTodoClick(todo.id);
                                 }}
                                 completed={todo.completed}
                    />
                })
            }
        </ul>
    )
};

export default TodoList;