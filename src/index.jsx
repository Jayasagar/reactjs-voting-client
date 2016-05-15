import ReactDOM from 'react-dom';
import React from 'react';
import VotingApp from './components/VotingApp';

const pair = ['Sarkar', 'Happy Days'];

console.info("on load");

ReactDOM.render(
    <VotingApp pair={pair} />,
    document.getElementById("app")
);
