import React from 'react'
import Comment from './Comment'
import InputComment from './InputComment'
import fetch from 'isomorphic-unfetch'
import pkg from '../package.json'

class Comments extends React.Component {
  constructor(props){
    super(props)
    this.state = { cmts: [] }

  }

  componentDidMount(){
    fetch(`${pkg.backendurl}/comments/${this.props.blogId}`)
      .then(r => r.json())
      .then(data => {
        this.setState({ cmts: data })
      })
  }

  onUpdate(data){
    this.setState({ data })
  }

  render(){
    const { cmts } = this.state;

    return (
      <div className="comments">
        <h2>留言（{cmts.length}条）</h2>
        <hr />
        {cmts.map((cmt) => (
          <Comment key={cmt.id} cmt={cmt} />
        ))}
        <InputComment />
      </div>
    )
  }
}


export default Comments
