import Link from 'next/link'

const PostBlog = (props) => (
  <div className="blog-post">
    <h2 className="blog-post-title">
      <Link href={`/detail?id=${props.id}`} as={`/p/${props.year}/${props.id}.html`}>
        <a>{props.title}</a>
      </Link>
    </h2>
    <p className="blog-post-meta">{props.creatAt}</p>
    <p>{props.content}</p>
  </div>
)

export default PostBlog
