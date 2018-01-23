import Link from 'next/link'


const ArchieveYear = (props) => (
  <div className="archieve-year">
    <div className="archieve-year-header">
      <h2>{props.year}年</h2>
    </div>
    <div className="archieve-year-content">
      <ul>
        {
          props.blogs.map((blog) => {
            if (blog.year !== props.year) return
            return (
            <li key={blog.id}>
              <Link href={`/detail?id=${blog.id}`}
                as={`/p/${blog.year}/${blog.month}/${blog.id}.html`}>
                <a href={`/detail?id=${blog.id}`}>{blog.title}</a>
              </Link>
              <span className="cmt-count">（12@2017.12.05）</span>
            </li>

            )
          })
        }
      </ul>
    </div>
  </div>
)

export default ArchieveYear
