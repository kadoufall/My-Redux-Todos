import {combineReducers} from 'redux'
import * as actions from './actions'
const {SHOW_ALL} = actions.VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case actions.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

const initalTodosState = [
        {
            text: "first",
            completed: false,
            id : 1,
        },
        {
            text: "second",
            completed: true,
            id: 2,
        }
    ]
;

function todos(state = localStorage.todos?JSON.parse(localStorage.todos):initalTodosState, action) {
    if(!localStorage.todos) localStorage.todos = JSON.stringify(initalTodosState);
    switch (action.type) {
        case actions.ADD_TODO:
            // delete
            let len = state.length===0?0:state[state.length-1].id;
            let reState = [
                ...state,
                {
                    text: action.text,
                    completed: false,
                    id: ++len,
                }
            ];

            localStorage.todos = JSON.stringify(reState);
            return reState;

        case actions.COMPLETE_TODO:
            let index = state.findIndex(todo => todo.id===action.index);
            let current = state[index].completed;
            reState = [
                ...state.slice(0, index),
                Object.assign({}, state[index], {
                    completed: !current
                }),
                ...state.slice(index + 1)
            ];

            localStorage.todos = JSON.stringify(reState);
            return reState;

        case actions.DELETE_TODO:
            index = state.findIndex(todo => todo.id===action.id);
            reState = [
                ...state.slice(0,index),
                ...state.slice(index+1)
            ];

            localStorage.todos = JSON.stringify(reState);
            return reState;

        default:
            return state
    }
}

const initialComment = [
    {
        nickname: 'doudou',
        content: 'Test',
        time: '2017-4-22 17:57:31',
        id: 1
    }
];

function comments(state=localStorage.comments?JSON.parse(localStorage.comments):initialComment, action) {
    if(!localStorage.comments) localStorage.comments = JSON.stringify(initialComment);
    switch (action.type){
        case actions.ADD_COMMENT:
            let len = state.length===0?0:state[state.length-1].id;
            let now = new Date();
            let reState = [
                ...state,
                {
                    nickname: action.nickname,
                    content: action.content,
                    time: now.toLocaleString(),
                    id: ++len,
                }
            ];

            localStorage.comments = JSON.stringify(reState);
            return reState;
        default:
            return state;
    }
}


const todoApp = combineReducers({
    visibilityFilter,
    todos,
    comments
});

export default todoApp