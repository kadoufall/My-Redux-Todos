/**
 * Created by kadoufall on 2017/4/19.
 */
import React from 'react'
import {PropTypes} from 'prop-types'
import Todo from './Todo';
import './TodoList.css';


const TodoList = ({todos, visibility, onTodoClick, deleteTodo}) => {
    if (todos.length) {
        return (
            <ul className="list-unstyled todoList">
                {todos.map(todo =>
                    <Todo key={todo.id} {...todo}
                          onTodoClick={() => onTodoClick(todo.id)}
                          deleteTodo={() => deleteTodo(todo.id)}
                    >
                    </Todo>
                )}
            </ul>
        );
    }else{
        return <h3 className="text-muted">There is no Todo!</h3>
    }
};


TodoList.prototypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired,
    }).isRequired).isRequired,
};

export default  TodoList;

