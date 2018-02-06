import React from 'react'
import Router from 'next/router'
import fetch from 'isomorphic-unfetch'
import pkg from '../package.json'

class InputComment extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      content: "",
      username: "",
      email: "",
      placeholder: "Enter content",
      replyComment: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onCommentUpdate = this.onCommentUpdate.bind(this)
    this.handleReply = this.handleReply.bind(this)
    this.focus = this.focus.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    console.log('The button is clicked.')
    // send post request to create comment
    const result = fetch(`${pkg.backendurl}/comments/add`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        blogId: `${Router.query.id}`,
        username: this.state.username,
        email: this.state.email,
        content: this.state.content,
        replyComment: this.state.replyComment
        })
      }).then( r => {
        return r.json()
      }).then( data => {
        this.onCommentUpdate()
        this.setState({
          content: "",
          email: "",
          username: "",
          placeholder: "",
          replyComment: {}
        })
      })
  }

  onCommentUpdate (){
    this.props.onCommentUpdate()
  }

  handleChange(e){
    switch (e.target.name) {
      case 'content':
        this.setState({content: e.target.value})
        break;
      case 'username':
        this.setState({username: e.target.value})
        break;
      case 'email':
        this.setState({email: e.target.value})
        break;
      default:
    }
  }

  focus(cmt) {
    this.textInput.focus()
    this.setState({placeholder: '回复：' + cmt.username})
    this.setState({replyComment: cmt})
  }

  handleReply(){

  }

  render() {
    return (
      <div>
        <h2>请留言：</h2>
        <hr/>
        <form id="comment-form" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">您的留言：</label>
            <textarea name="content" className="form-control"
              id="exampleFormControlTextarea1" rows="5"
              placeholder={this.state.placeholder} value={this.state.content}
              onChange={this.handleChange} onFocus={this.handleReply} ref={(input) => {this.textInput = input}}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">您的姓名：</label>
            <input type="text" name="username" value={this.state.username}
              onChange={this.handleChange} className="form-control"
              placeholder="Enter name" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">邮箱地址：</label>
            <input type="email" name="email" value={this.state.email}
              onChange={this.handleChange} className="form-control"
              aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">不公开</small>
          </div>
          <div className="form-check">
            <input type="checkbox" value="" id="defaultCheck1" />
            <label className="htmlForm-check-label" htmlFor="defaultCheck1">
              记住我
            </label>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">发布</button>
          </div>
        </form>
      </div>
    )
  }
}


export default InputComment
