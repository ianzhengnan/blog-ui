import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import PostContent from '../components/PostContent'
import Comments from '../components/Comments'
import fetch from 'isomorphic-unfetch'

const Detail = (props) => (
  <Layout title="明细">
    <div className="container blog-content">
      <style jsx>{`
        .container {
          max-width: 960px;
        }
      `}</style>

      <Breadcrumb />

      <PostContent title={props.blog.title} datetime={props.blog.datetime}
        content={props.blog.content}/>

      <Comments count="2"/>

    </div>
  </Layout>
)

Detail.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`http://localhost:8080/blogs/${id}`)
  const blog = await res.json()

  console.log(`Fetched blog: ${blog.title}`);

  return {
    blog
  }
}

export default Detail
