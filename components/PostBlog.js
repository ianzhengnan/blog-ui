import Link from 'next/link'

const PostBlog = (props) => (
  <div className="blog-post">
    <h2 className="blog-post-title">
      <Link href="/detail" as="/detail">
        <a>第一篇博客</a>
      </Link>
    </h2>
    <p className="blog-post-meta">3月20日</p>
    <p>这是我的第一个篇博客，它是关于如何作一个Fiori app</p>
  </div>
)

export default PostBlog
