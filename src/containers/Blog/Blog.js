import React, { Component } from 'react';
//import axios from 'axios'

// We use the Link component because if we do not use that, our full page reloads as we switch between the pages, so the application looses its state, which we do not want in our application. Link component allows us to do that. 
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

//we use NavLink has some styles which allow to apply styling to some links

//we use Switch to render selected urls 
import './Blog.css';

//import axios from '../../axios'
// We comment out the above axios import

//This is commented due to webpack configurations
// import NewPost from '../NewPost/NewPost'

import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost= asyncComponent(()=> {
    return import('../NewPost/NewPost');
});

import Posts from '../Posts/Posts'
//import FullPost from '../FullPost/FullPost';
//it is in Post.js

class Blog extends Component {
    state={
        auth: true
    }
    render () {

        //posts should be an array of JSX elements
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to ="/posts/" exact>Posts</NavLink></li>
                            <li><NavLink to ={{
                                pathname: "/new-post",
                                //use this.props.match.url+'/path', for relative paths, whuch will append this path, to the current path on which you are in
                                hash: '#submit',
                                //hash allows to jump to a specific id,
                                search: '?quick-submit=true'
                                //use activeClassName to give your own class name instead of active class by default

                                //use activeStyling for inline styles, and it is a javascript object activeStyle={{Normal CSS}}

                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* excat is a boolean value
                without exact will render all. */}
                {/* <Route path='/' exact render={()=> <h1>Home</h1>}/>
                <Route path='/' exact render={()=> <h1>Home 2</h1>}/> */}

                <Switch >
                  {this.state.auth ?<Route path= '/new-post' component={asyncComponent} /> : null}  
                    <Route path= '/posts/'  component={Posts} />
                    {/* <Route path= '/:id' exact component={FullPost} />  */}
                    {/* take care of the ordering of the routes   */}
                    
                    {/* This is commented to handle 404 case in a different way */}
                    <Route render= {()=> <h1>Error 404 not found !!</h1>} />
                    {/* <Redirect from='/' to='/posts' /> */}
                    {/* <Route path= '/'  component={Posts} /> */}

                </Switch>
                
            </div>
        );
    }
}

export default Blog;