/**
 * Created by kadoufall on 2017/4/20.
 */
import React from 'react';
import ReactMarkdown from 'react-markdown';
import {content} from './README';

const Home = () => {
    return (
        <div>
            <h2>Homework 说明</h2>
            <h3>
                <ReactMarkdown source='基于`React`+`react-router`+`Redux`的Todo+留言demo'></ReactMarkdown>
            </h3>
            <div id="content"><ReactMarkdown source={content}/></div>
        </div>
    );
}

export default Home;