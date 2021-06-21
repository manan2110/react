import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo';
function TodoList() {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        // console.log(todo, ...todos);
    };
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removeArr)
    };
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos);
    };
    return (
        <div>
            <h1>What's the plan for today</h1>
            <TodoForm onSubmit={addTodo}></TodoForm>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}
            />
        </div>
    );
}

export default TodoList
