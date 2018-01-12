import Link from 'next/link'

const Catalogs = (props) => (
  <div className="sidebar-module">
    <h4>分类</h4>
    <ol className="list-unstyled catalogs">
      <li>
        <Link href="/catalog">
          <a href="catalog.html">散文（100）</a>
        </Link>
      </li>
      <li><a href="#">感悟与观点（150）</a></li>
      <li><a href="#">前端技术（200）</a></li>
      <li><a href="#">后端技术（230）</a></li>
    </ol>
  </div>
)

export default Catalogs
