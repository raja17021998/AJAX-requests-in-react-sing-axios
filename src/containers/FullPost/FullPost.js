import React, { Component } from 'react';
import axios from 'axios'
import './FullPost.css';

class FullPost extends Component {

    state={
        loadedPost: null,
        error: false
    }


    componentDidUpdate(){
        //url has to target 1 single post

        if(this.props.id){

            if(!this.state.loadedPost ||(this.state.loadedPost && this.state.loadedPost.id !== this.props.id)){

                axios.get('/posts/'+this.props.id)
            .then(response => {
                //console.log(response);

                this.setState({loadedPost: response.data});

                //this creates an infinite loop(in tems of requests to server), because as soon as the setState() is called, componentDidUpadate() is called. So this creates an infinite requests to the server.
            })
            .catch(error => {
                console.log(error);
                this.setState({error:true});
            }); 

            }
            

        }
        
    }

    deletePostHandler = () => {
        axios.delete('/posts/'+this.props.id)
        .then(response => {
            console.log(response);
        })
        .catch(error =>{
            console.log(error);
        });
    }



    render () {
        let post = <p style={{textAlign: "center"}}>Please select a post</p>;

        

        if(this.props.id){
             post = <p style={{textAlign: "center"}}>Loading...</p>;
        }
        if(this.state.loadedPost){

            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler}className="Delete">Delete</button>
                    </div>
                </div>
    
            );

        }
       
        return post;
    }
}

export default FullPost;