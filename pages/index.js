import Layout from '../components/Layout'
import PostBlog from '../components/PostBlog'
import Catalogs from '../components/Catalogs'
import Card from '../components/Card'
import fetch from 'isomorphic-unfetch'
import pkg from '../package.json'

const Index = (props) => (
  <Layout title="首页">
    <main className="container" role="main">
      <div className="row">
        <div className="col-sm-8 blog-main">
          {props.blogs.map((blog) => (
            <PostBlog key={blog.id} blog={blog} />
          ))}
        </div>
        <aside className="col-sm-3 ml-sm-auto blog-sidebar">
          <Card />
          <Catalogs />
        </aside>
      </div>
    </main>
  </Layout>
)

Index.getInitialProps = async function () {
  // fetch blogs
  const res = await fetch(`${pkg.backendurl}/blogs`)
  const data = await res.json()
  // fetch catalogs
  const response = await fetch(`${pkg.backendurl}/catalogs`)
  const cats = await response.json()

  console.log(`Show data fetched. Count: ${data.content.length}`);

  return {
    blogs: data.content
  }
}

export default Index
