import React from 'react'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import {createPost} from './action/postactions'



class Postform extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:'',
            body:''
        };

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();

        const post ={ 
            title : this.state.title,
            body:this.state.body


        }

        this.props.createPost(post)
    }

    render(){
        return(
            <div>
            <h1 style={{color:"Blue"}}>Add Post</h1>
            <form onSubmit = {this.onSubmit}>
                <div style={{fontFamily:"cursive"}}>
                <label> Title: </label>
                <br/>
                <input
                    type="text"
                    name="title"
                    onChange = {this.onChange}
                    value= {this.state.value}
                    style={{width:"50%", height:"40px", borderRadius:"10px"}}
               />
            
                </div>
                <br/>
                <div style={{fontFamily:"cursive"}}>
                <label > Body: </label>
                <br/>
                <textarea 
                name = "body"
                onChange = {this.onChange}
                value= {this.state.body}
                style={{width:"50%", height:"100px", borderRadius:"10px"}}/>
                </div>
                <br/>
                <button type='submit'>Submit</button>
            
            </form>
            </div>

        )
    }
}

Postform.propTypes = {
    createPost:propTypes.func.isRequired
}


export default connect(null,{createPost})(Postform);