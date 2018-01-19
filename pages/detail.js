import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import PostContent from '../components/PostContent'
import Comments from '../components/Comments'
import fetch from 'isomorphic-unfetch'
import pkg from '../package.json'

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
        content={props.markdownfile}/>

      <Comments count="2" blogId={props.blog.id} />

    </div>
  </Layout>
)

Detail.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`${pkg.backendurl}/blogs/${id}`)
  const blog = await res.json()

  console.log(`Fetched blog: ${blog.title}`);

  const markdown = await fetch(`${pkg.backendurl}/upload/files/${blog.content}`)
  const markdownfile = await markdown.text()

  return {
    blog,
    markdownfile
  }
}

export default Detail
