import React from 'react';
import { connect } from 'react-redux'

//global variable to increment id of todos
let currentId = 0;

let AddTodo = ({ dispatch }) => {
    let input = null;
    return (
        <div>
            <input type="text" ref={node => {
                input = node
            }}/>
            <button onClick={() => {
                dispatch({type: "ADD_TODO", id: currentId++, text: input.value});
                input.value = "";
            }}>
                Add task
            </button>
        </div>
    )
};

AddTodo = connect()(AddTodo);

export default AddTodo;