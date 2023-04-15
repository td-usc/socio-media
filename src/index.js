import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import * as aws from './AWSFunctions';

// AWS FUNCTIONS
// Title of posts is username-postNumber
// When posting, get username's post count via getTableItem and append that to username for post title
// For posts, only call updateTableItem for upvote and downvote

//aws.describeTable("socio-media-users");
//aws.describeTable("socio-media-posts");

/*
// Create User
aws.putTableItem("socio-media-users", {Username: {S: "Tim"}, Friends: {N: "0"}, Posts: {N: "1"}})

// Create Post
aws.putTableItem("socio-media-posts", {Title: {S: "Tim-0"}, Upvotes: {N: "0"}, Downvotes: {N: "0"}, Content: {S: "Lorem ipsum"}})

// Retrieve Posts
aws.scanTable("socio-media-posts");

// Update Item (Upvote/Downvote/Friends/Number of Posts)
aws.updateTableItem("socio-media-posts", {Title: {S: "Tim-0"}}, "Upvotes", "+");
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
