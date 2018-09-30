import React, {Component} from 'react';

import axios from '../../axios'

import Post from '../../components/Post/Post'

import '../Posts/Posts.css'

class Posts extends Component{


    state={
        posts:[],
        
    }

    postSelectHandler = (id) => {
        this.setState({selectedPostId: id});
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
                //this.setState({error: true});
            });

    }


    render(){
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
        return(
            <section className="Posts">
                {posts}
            </section>

        );

    }
}

export default Posts;