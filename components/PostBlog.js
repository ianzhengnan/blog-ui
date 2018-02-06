import Link from 'next/link'

const PostBlog = (props) => (
  <div className="blog-post">
    <h2 className="blog-post-title">
      <Link href={`/detail?id=${props.blog.id}`}
            as={`/p/${props.blog.year}/${props.blog.month}/${props.blog.id}.html`}>
        <a>{props.blog.title}</a>
      </Link>
    </h2>
    <p className="blog-post-meta">{(new Date(props.blog.createAt)).toLocaleString()}</p>
    <p>{props.blog.summary}</p>
  </div>
)

export default PostBlog
