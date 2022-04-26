import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Comment from './Comment';
import Clock from './Clock';
import reportWebVitals from './reportWebVitals';


const comment = {
  date : new Date(),
  text : 'I hope you enjoy learning react!',
  author : {
      name : 'hello kitty',
      avatarUrl : 'http://placekitten.com/g/64/64'
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
// function tick(){
root.render(
  <React.StrictMode>
    <App />
    <Comment date = {comment.date} text = {comment.text} author = {comment.author} />
    <Clock />
  </React.StrictMode>
);
// }
// setInterval(tick,1000);


// const element = <Welcome name="Sara" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
