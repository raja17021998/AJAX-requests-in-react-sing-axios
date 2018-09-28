import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';
axios.defaults.baseURL= 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization']= 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type']= 'application/json';

//use a new interceptor
axios.interceptors.request.use(request => {
    console.log(request);

    // actually it should be request config rather than request. At this stage if we save our files and check the browser, error occurs because we block the request. So we always need to return the request in this function. You can always edit the request in the interceptor, that is the main idea

    return request;

},error => {
    console.log(error);
    return Promise.reject(error);
    // normally you wouldn't get the error, becuase error when the requests fail to go to server i.e. when your internet connectivity goes off. 

});

axios.interceptors.response.use(response =>{
    console.log(response);
    return response;

}, error => {
    console.log(error);
    return Promise.reject(error);

});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
