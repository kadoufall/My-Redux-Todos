import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'

import './AddTodo.css';

let AddTodo = ({dispatch}) => {
    return (
        <div className="addTodo form-group">
            <input autoFocus={true} className="form-control" type="text" placeholder="请输入新任务的内容，按回车键确认"
                   onKeyDown={e => {
                       if (e.keyCode === 13) {      // enter按下
                           let input = e.target.value;
                           if (!input) {             // 为空跳出
                               return false;
                           }

                           dispatch(addTodo(input));
                           e.target.value = '';
                       }
                   }}
            />
        </div>
    )
};

AddTodo = connect()(AddTodo);

export default AddTodo