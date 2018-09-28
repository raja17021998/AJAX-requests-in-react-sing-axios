import React, { Component } from 'react';
//import axios from 'axios'
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

import axios from '../../axios'
// We comment out the above axios import


class Blog extends Component {

    state={
        posts:[],
        selectedPostId: null
    }

    componentDidMount(){
        // get() used for sending get requests
        axios.get('/posts')

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
                this.setState({error: true});
            });

    }

    postSelectHandler = (id) => {
        this.setState({selectedPostId: id});
    }


    render () {

        //posts should be an array of JSX elements

        let posts= <p>Something went wrong !!</p>

        if(!this.state.error){
            posts= this.state.posts.map(post => {
                return <Post key={post.id} 
                title={post.title} 
                author={post.author} 
                clicked={() => this.postSelectHandler(post.id)}/>;
             }
         );
            
        }
        
     

        
        return (
            <div>
                <section className="Posts">
                   {posts}
                </section>
                <section>
                    <FullPost id ={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;