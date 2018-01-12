import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import PostContent from '../components/PostContent'
import Comments from '../components/Comments'

export default () => (
  <Layout title="明细">
    <div className="container blog-content">
      <style jsx>{`
        .container {
          max-width: 960px;
        }
      `}</style>

      <Breadcrumb />

      <PostContent />

      <Comments count="2"/>

    </div>
  </Layout>
)
