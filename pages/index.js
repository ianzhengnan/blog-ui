import Layout from '../components/Layout'
import PostBlog from '../components/PostBlog'
import Catalogs from '../components/Catalogs'
import Card from '../components/Card'

export default () => (
  <Layout title="首页">
    <main className="container" role="main">
      <div className="row">
        <PostBlog />
        <aside className="col-sm-3 ml-sm-auto blog-sidebar">
          <Card />
          <Catalogs />
        </aside>
      </div>
    </main>
  </Layout>
)
