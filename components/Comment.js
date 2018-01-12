
const Comment = (props) => (
  <div className="comment">
      <p className="comment-header">{props.user}说：</p>
      <div className="comment-content">
        {props.content}
      </div>
      <div className="comment-footer text-right">
        {props.datetime}
        |
        <a href="#">引用</a>
        |
        <a className="anchorjs-link " href="#text-transform" aria-label="Anchor" data-anchorjs-icon="#">#</a>
      </div>
      <hr className="comment-line" />
  </div>
)

export default Comment
