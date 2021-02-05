import React from 'react'
import {connect} from 'react-redux'
import {fetchPosts} from './action/postactions'
import PropTypes from 'prop-types'


class Posts extends React.Component{

    componentWillMount(){
        this.props.fetchPosts();

    }

    componentWillReceiveProps(nextProps){

        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost)
        }

    }

    render(){
        const postItems = this.props.posts.map(post=>(
            <div key = {post.id} style ={{border: " 2px solid black", width : "70%", alignItems:"center", justifyContent:"center",marginLeft:"15%", marginBottom:"2%"}} >
            <h3>{post.title}</h3>
            <p  > {post.body}</p>
            
            </div>
        ));
        return(

            <div>
            <h1 style={{color:"Blue"}}>Posts</h1>
            {postItems}
            </div>
        )

       
    }
}


Posts.propTypes = {
    fetchPosts:PropTypes.func.isRequired,
    posts:PropTypes.func.isRequired,
    newPost:PropTypes.object
    
   
    
}






const mapstateToProps = state =>({
    posts:state.posts.items,

    newPost:state.posts.item
})



export default connect(mapstateToProps, {fetchPosts})(Posts)