import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as aws from './AWSFunctions';

// Title of posts is username-postNumber
// When posting, get username's post count via getTableItem and append that to username for post title

//aws.describeTable("socio-media-users");
//aws.describeTable("socio-media-posts");

/*
aws.putTableItem("socio-media-users", {Username: {S: "Tim"}, Friends: {N: "0"}, Posts: {N: "1"}})
aws.putTableItem("socio-media-posts", {Title: {S: "Tim-0"}, Upvotes: {N: "0"}, Downvotes: {N: "0"}, Content: {S: "Lorem \
ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. \
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}})
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
