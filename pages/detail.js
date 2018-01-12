import Layout from '../components/Layout'
import Breadcrumb from '../components/Breadcrumb'
import PostContent from '../components/PostContent'
import Comments from '../components/Comments'

const blog = {
  title: 'kaka',
  datetime: '3月20日',
  content: `
Creating a page in a Next.js app is pretty simple.

Simply create a directory called "pages".
Then add the following content in a file called \`pages/index.js\`

~~~js
export default () => (
  <div>
    <p>Next.js is great!</p>
  </div>
)
~~~
  `
}

export default () => (
  <Layout title="明细">
    <div className="container blog-content">
      <style jsx>{`
        .container {
          max-width: 960px;
        }
      `}</style>

      <Breadcrumb />

      <PostContent title={blog.title} datetime={blog.datetime} content={blog.content}/>

      <Comments count="2"/>

    </div>
  </Layout>
)
