import Link from 'next/link'

const PostBlog = (props) => (
  <div className="blog-post">
    <h2 className="blog-post-title">
      <Link href={`/detail?id=${props.blog.id}`}
            as={`/p/${props.blog.year}/${props.blog.month}/${props.blog.uri}.html`}>
        <a>{props.blog.title}</a>
      </Link>
    </h2>
    <p className="blog-post-meta">{props.blog.creatAt}</p>
    <p>{props.blog.content}</p>
  </div>
)

export default PostBlog
