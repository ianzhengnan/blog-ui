import $ from 'jquery'

const Comment = (props) => (
  <div className="comment" id={`comment-${props.cmt.id}`}>
      <p className="comment-header">{props.cmt.username}说：</p>
      <div className="comment-content">
        {props.cmt.content}
      </div>
      <div className="comment-footer text-right">
        {props.cmt.createAt}
        |
        <a href="#">引用</a>
        |
        <a className="anchorjs-link " href={`#comment-${props.cmt.id}`} aria-label="Anchor" data-anchorjs-icon="#">#</a>
      </div>
      <hr className="comment-line" />
  </div>
)

export default Comment
