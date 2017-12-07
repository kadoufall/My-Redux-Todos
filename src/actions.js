/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHANGE_TODO_TEXT = 'DELETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const ADD_COMMENT = 'ADD_COMMENT';

/*
 * 其它的常量
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const currentPage = {
    SHOW_HOME: 'SHOW_HOME',
    SHOW_MEMO: 'SHOW_MEMO',
    SHOW_TODOS: 'SHOW_TODOS',
    SHOW_CHARTS: 'SHOW_CHARTS',
};

/*
 * action 创建函数
 */

export function addTodo(text) {
    return {type: ADD_TODO, text}
}

export function completeTodo(index) {
    return {type: COMPLETE_TODO, index}
}

export function deleteTodo(id) {
    return {type: DELETE_TODO, id}
}

export function changeTodoText(id, text) {
    return {type: CHANGE_TODO_TEXT, id, text}
}

export function setVisibilityFilter(filter) {
    return {type: SET_VISIBILITY_FILTER, filter}
}

export function addComment(nickname, content) {
    return {type: ADD_COMMENT, nickname, content}
}