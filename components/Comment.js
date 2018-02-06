import React from 'react'
import $ from 'jquery'

class Comment extends React.Component {
  constructor(props){
    super(props)
    this.handleQuote = this.handleQuote.bind(this)
  }

  handleQuote(e){
    e.preventDefault()
    console.log('quote is clicked.');
    console.log(`the name of comment is ${this.props.cmt.username}`);
    this.props.onQuotePressed(this.props.cmt)
  }

  render(){
    let replyComment = this.props.cmt.replyComment ? this.props.cmt.replyComment : { username: "", content: "" }
    
    return (
      <div className="comment" id={`comment-${this.props.cmt.id}`}>
        <p className="comment-header">{this.props.cmt.username}说：</p>
        <div className="comment-content" style={{display: this.props.cmt.replyComment && this.props.cmt.replyComment.id ?'block':'none'}}>
          <div className="bd-callout bd-callout-primary">
            <pre>引用{replyComment.username}的发言：</pre>
            {replyComment.content}
          </div>
        </div>
        <div className="comment-content"
          dangerouslySetInnerHTML={{__html: this.props.cmt.content}}
        />
        <div className="comment-footer text-right">
          {this.props.cmt.createAt}
          |
          <a href="" onClick={this.handleQuote}>引用</a>
          |
          <a className="anchorjs-link " href={`#comment-${this.props.cmt.id}`} aria-label="Anchor" data-anchorjs-icon="#">#</a>
        </div>
        <hr className="comment-line" />
      </div>
    )
  }
}

export default Comment
