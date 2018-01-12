
const Comment = (props) => (
  <div class="comment">
      <p class="comment-header">{props.user}说：</p>
      <div class="comment-content">
        {props.content}
      </div>
      <div class="comment-footer text-right">
        {props.datetime}
        |
        <a href="#">引用</a>
        |
        <a class="anchorjs-link " href="#text-transform" aria-label="Anchor" data-anchorjs-icon="#">#</a>
      </div>
      <hr class="comment-line" />
  </div>
)

export default Comment
