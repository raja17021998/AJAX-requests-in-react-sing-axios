import axios from 'axios';



// creates copy of object
const instance= axios.create({
    baseURL :'http://jsonplaceholder.typicode.com'
});



// to override all requests that are sent through these instances 
instance.defaults.headers.common['Authorization']= 'AUTH TOKEN FRPM INSTANCE';


export default instance;