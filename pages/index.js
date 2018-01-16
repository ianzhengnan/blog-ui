import Layout from '../components/Layout'
import PostBlog from '../components/PostBlog'
import Catalogs from '../components/Catalogs'
import Card from '../components/Card'
import fetch from 'isomorphic-unfetch'

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
  const res = await fetch('http://localhost:8080/blogs')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.content.length}`);
  return {
    blogs: data.content
  }
}

export default Index
