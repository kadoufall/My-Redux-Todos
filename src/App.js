import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from 'react-router-dom'

import ReactLogo from './images/ReactLogo.svg';
import ReduxLogo from './images/redux.svg';
import ReactRouterLogo from './images/react-router-logo.svg';
import './App.css';

import Home from './components/Home';
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import VisibleCommentList from './containers/VisibleCommentList';
import AddCommentContainer from './containers/AddCommentContainer';

const Comment = (state) => (
    <div>
        <VisibleCommentList />
        <AddCommentContainer />
    </div>
);

const Todos = () => (
    <div className="App">
        <div>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </div>
    </div>
);


const App = () => (
    <Router basename="/webhw">
        <div className="App">
            <div className="App-header">
                <img src={ReactLogo} className="App-logo" alt="logo"/>
                <img src={ReactRouterLogo} className="App-logo" alt="logo"/>
                <img src={ReduxLogo} className="App-logo" alt="logo"/>
                <h2>Web Homework 1 -- Todo & Comment</h2>
            </div>

            <div>
                <ul className="list-inline navUl">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/todos">Todos</Link></li>
                    <li><Link to="/comment">Comment</Link></li>
                </ul>
            </div>

            <hr/>

            <Route exact path="/" component={Home} onlyActiveOnIndex={true}/>
            <Route path="/comment" component={Comment}/>
            <Route path="/todos" component={Todos}/>
        </div>
    </Router>
);


export default App;
