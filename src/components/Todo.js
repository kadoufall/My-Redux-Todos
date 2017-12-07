import React from 'react'
import {PropTypes} from 'prop-types'

const Todo = ({onTodoClick, deleteTodo, completed, text}) => (
    <div>
        <li>
            <div className="input-group">
                    <span className="input-group-addon">
                        <input type="checkbox" checked={completed}
                               onChange={onTodoClick}/>
                    </span>
                <p style={{cursor: "pointer", textDecoration: completed ? 'line-through' : ''}}
                   className="form-control-static">{text}</p>
                <span className="input-group-addon">
                        <button type="button" className="close"
                                onClick={deleteTodo}><span>&times;</span></button>
                    </span>
            </div>
        </li>
    </div>

);

Todo.prototypes = {
    onTodoClick: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;