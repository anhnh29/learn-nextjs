import React from 'react'
import { useStore, action } from '../store';

const Todo = () => {
    const [state, dispatch] = useStore();
    const { todo, todoInput } = state;
    const handleChangeValueInput = (e) => {
        dispatch(action.setTodoInput(e.target.value));
    }
    const handleAddTodo = () => {
        dispatch(action.addTodo(todoInput));
    }
    return (
        <div>
            <input value={todoInput} placeholder='Input value...' onChange={handleChangeValueInput}>
            </input>
            <button onClick={handleAddTodo}>Add Todo</button>
            <div>Todo list:</div>
            {
                todo.map(item => {
                    return (
                        <>
                        <li> {item} </li>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Todo
