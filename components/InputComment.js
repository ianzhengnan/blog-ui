import React from 'react'
import fetch from 'isomorphic-unfetch'
import pkg from '../package.json'

class InputComment extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      content: "",
      username: "",
      email: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    console.log('The button is clicked.')
    console.log(`The state is ${this.state}`);
  }

  handleChange(e){
    this.setState({
      content: e.target.value,
      username: e.target.value,
      email: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h2>请留言：</h2>
        <hr/>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1">您的留言：</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
              placeholder="Enter content" value={this.state.content} onChange={this.handleChange}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">您的姓名：</label>
            <input type="text" value={this.state.username} onChange={this.handleChange} className="form-control" placeholder="Enter name" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">邮箱地址：</label>
            <input type="email" value={this.state.email} onChange={this.handleChange} className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
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
