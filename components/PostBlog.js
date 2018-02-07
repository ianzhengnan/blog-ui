import Link from 'next/link'
import Format from '../utils/format'

const fmt = new Format()

const PostBlog = (props) => (
  <div className="blog-post">
    <h2 className="blog-post-title">
      <Link href={`/detail?id=${props.blog.id}`}
            as={`/p/${props.blog.year}/${props.blog.month}/${props.blog.id}.html`}>
        <a>{props.blog.title}</a>
      </Link>
    </h2>
    <p className="blog-post-meta">{fmt.formatTime(props.blog.createAt)}</p>
    <p>{props.blog.summary}</p>
  </div>
)

export default PostBlog
