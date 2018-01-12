import Link from 'next/link'

const Header = () => (
  <div className="blog-masthead">
    <nav className="navbar navbar-light bg-light justify-content-between">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">郑楠的网络日志</a>
        </Link>
        <form className="form-inline">
          <input type="search" name="search" className="form-control mr-sm-2" placeholder="Search"
          aria-label="Search" />
          <button type="submit" name="button" className="btn btn-outline-success my-2 my-sm-0">Search</button>
        </form>
      </div>
    </nav>
  </div>
)

export default Header
