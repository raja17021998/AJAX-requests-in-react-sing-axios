import React, {Component} from 'react';

import axios from '../../axios'

import Post from '../../components/Post/Post'

import '../Posts/Posts.css'

import {Route} from 'react-router-dom';

import FullPost from '../FullPost/FullPost'

//import {Link} from 'react-router-dom';

class Posts extends Component{


    state={
        posts:[],
        
    }

    postSelectHandler = (id) => {
        // this.setState({selectedPostId: id});

        // we want tp navigate programatically
        // push() in history is used to push a new page onto the stack of pages, because basically navigation is nothing, but to move forward and backward in stack of pages, and that's why we have forward and backward buttons in our browser

        // this.props.history.push({pathname: '/'+id});
        this.props.history.push('/posts/'+id);
    }

    componentWillMount(){

        console.log(this.props);
        // get() used for sending get requests
        axios.get('/posts/')

            .then(response => {

                const posts= response.data.slice(0,4);
                const updatedPosts= posts.map(post => {
                    return{
                        ...post,
                        author: 'Shashwat'
                    }
                });
                this.setState({posts: updatedPosts});
                //console.log(response);
            })
            .catch(error => {
                console.log(error);
                //this.setState({error: true});
            });

    }


    render(){
        let posts= <p>Something went wrong !!</p>

        if(!this.state.error){
            posts= this.state.posts.map(post => {
                return<Post 
                    key={post.id}
                    title={post.title} 
                    author={post.author} 
                    clicked={() => this.postSelectHandler(post.id)}/>;

                    // <Post> can also be wrapped in a <Link >
                // <Link to ={'/'+post.id} key={post.id} >
                    
                // </Link>
                
                
             });
         
        }
       
        return(
            <div>
            <section className="Posts">
                {posts}
            </section>
            {/* <Route path= '/posts/:id' exact component={FullPost} />  */}
            {/* this is really cumbersome to do. And we dont get a fully dynamic route. */}

            <Route path= {this.props.match.url+'/:id'} exact component={FullPost} />
            </div>
            
        );

    }
}

export default Posts;
