import Layout from '../components/Layout'
import PostBlog from '../components/PostBlog'
import Catalogs from '../components/Catalogs'
import Card from '../components/Card'

const Index = (props) => (
  <Layout title="首页">
    <main className="container" role="main">
      <div className="row">
        <div className="col-sm-8 blog-main">
          {props.blogs.map((blog) => (
            <PostBlog id={blog.id} year={blog.year} title={blog.title}
              content={blog.content} />
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
  const res = await fetch('')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`);
  return {
    blogs: data
  }
}

export default Index
