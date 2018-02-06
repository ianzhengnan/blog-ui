import React from 'react'
import Comment from './Comment'
import InputComment from './InputComment'
import fetch from 'isomorphic-unfetch'
import pkg from '../package.json'

class Comments extends React.Component {
  constructor(props){
    super(props)
    this.state = { cmts: [] }
    this.onCommentUpdate = this.onCommentUpdate.bind(this)
    this.onQuotePressed = this.onQuotePressed.bind(this)
  }

  componentDidMount(){
    this.fetchData()
  }

  onCommentUpdate(){
    this.fetchData()
  }

  onQuotePressed(cmt){
    console.log('this.textInput is ' + this.textInput);
    
    this.textInput.focus(cmt)
  }

  fetchData(){
    fetch(`${pkg.backendurl}/comments/${this.props.blogId}`)
      .then(r => r.json())
      .then(data => {
        this.setState({ cmts: data })
      })
  }

  render(){
    const { cmts } = this.state;

    return (
      <div className="comments">
        <h2>留言（{cmts.length}条）</h2>
        <hr />
        {cmts.map((cmt) => (
          <Comment key={cmt.id} cmt={cmt} onQuotePressed={this.onQuotePressed} />
        ))}
        <InputComment onCommentUpdate={this.onCommentUpdate} ref={(input) => {
          this.textInput = input
        }}/>
      </div>
    )
  }
}


export default Comments
