import React, { Component } from 'react';
//import axios from 'axios'

// We use the Link component because if we do not use that, our full page reloads as we switch between the pages, so the application looses its state, which we do not want in our application. Link component allows us to do that. 
import {Route, Link} from 'react-router-dom';
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
                            <li><Link to ="/">Home</Link></li>
                            <li><Link to ={{
                                pathname: "/new-post",
                                hash: '#submit',
                                //hash allows to jump to a specific id,
                                search: '?quick-submit=true'

                            }}>New Post</Link></li>
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