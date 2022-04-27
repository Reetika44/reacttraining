import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Comment from './Comment';
import Clock from './Clock';
import reportWebVitals from './reportWebVitals';
import Handleevents from './Handleevents';
import Loggingbutton from './Loggingbutton';
import Greeting from './Greeting';
import LoginControl from './LoginControl';
import MailBox from './Mailbox';
import Lists from './Lists';
import Keys from './Keys';


const comment = {
  date : new Date(),
  text : 'I hope you enjoy learning react!',
  author : {
      name : 'hello kitty',
      avatarUrl : 'http://placekitten.com/g/64/64'
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
const messages = ['React','Re: React'];
const posts = [
  {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
  {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
// function tick(){
root.render(
  <React.StrictMode>
    <App />
    <Comment date = {comment.date} text = {comment.text} author = {comment.author} />
    <Clock />
    <Handleevents />
    <Loggingbutton />
    <Greeting isLoggedIn = {true}/>
    <LoginControl />
    <MailBox unreadMessages={messages} />
    <Lists />
    <Keys posts={posts} />
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
