import React, { Component } from "react";
import axios from "axios";
const  url = "https://jsonplaceholder.typicode.com/posts"

class Posts extends Component {
    state = {
        posts: []
    }

   

    async componentDidMount() {
        try{
            const {data:posts} = await axios.get(url);
            this.setState({ posts })
        // console.log(result);
        }
        catch(error) {
            console.log(error);
        }
    }

    handleClick = async ()=> {
        const singleData = { title: 'ASCII',body: 'ASCII is a software firm' };
        const { data:result} = await axios.post(url,singleData);
        const posts = [ result,...this.state.posts ];
        this.setState({posts});
        console.log(posts);
    }

    handleUpdate = async (postId)=> {
        const singleData = { title: 'updated data' }
        const { data } = await axios.put(`${url}/${postId}`,singleData);
        const posts = [...this.state.posts];
        posts.forEach( post=> {
            if( post.id == postId ) post.title = data.title
        })
        this.setState({ posts })
    }

    handleDelete = async (postId)=> {
        // const { data } = await axios.delete(`${url}/${postId}`)
        // console.log(data)
        const results = [...this.state.posts];
        const posts = results.filter(result => {
            if(result.id != postId) return true;
        })

        this.setState({posts})
    }

  render() {
    //   
      
    return (
     <div className = "container">
         <button className="btn btn-primary" onClick={ this.handleClick }> Add </button><br/>
          <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Title</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
            {this.state.posts.map(post => {
               return <tr>
                <td>{ post.id }</td>
                <td>{ post.title }</td>
                <td> <button className="btn btn-primary" onClick= {()=> { this.handleUpdate( post.id ) }} > Update </button> </td>
                <td><button className="btn btn-danger" onClick={()=> {this.handleDelete( post.id )}}> Delete </button></td>
              </tr>
            })}
          
         
        </tbody>
      </table>
     </div>
    );
  }
}

export default Posts;
