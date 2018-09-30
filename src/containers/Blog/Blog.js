import React, { Component } from 'react';
//import axios from 'axios'


import {Route} from 'react-router-dom';
import './Blog.css';

import axios from '../../axios'
// We comment out the above axios import

import NewPost from '../NewPost/NewPost'

import Posts from '../Posts/Posts'

class Blog extends Component {

    

    

    


    render () {

        //posts should be an array of JSX elements

        
        
     

        
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/new-post'>New Post</a></li>
                        </ul>
                    </nav>
                </header>
                {/* excat is a boolean value
                without exact will render all. */}
                {/* <Route path='/' exact render={()=> <h1>Home</h1>}/>
                <Route path='/' exact render={()=> <h1>Home 2</h1>}/> */}
                <Route path= '/' exact component={Posts} />
                <Route path= '/new-post' component={NewPost} />

                
            </div>
        );
    }
}

export default Blog;