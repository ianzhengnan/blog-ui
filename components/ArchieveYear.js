import Link from 'next/link'
import Format from '../utils/format'

const fmt = new Format()

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
              <span className="cmt-count">（12@{fmt.formatDate(blog.createAt)}）</span>
            </li>

            )
          })
        }
      </ul>
    </div>
  </div>
)

export default ArchieveYear
