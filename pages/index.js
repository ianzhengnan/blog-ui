import React from 'react'
import Layout from '../components/Layout'
import PostBlog from '../components/PostBlog'
import Catalogs from '../components/Catalogs'
import Card from '../components/Card'
import fetch from 'isomorphic-unfetch'
import pkg from '../package.json'
import Pagination from '../components/Pagination'

export default class extends React.Component {
  static async getInitialProps () {
    // fetch blogs
    const res = await fetch(`${pkg.backendurl}/blogs`)
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.content.length}`);

    return {
      blogs: data
    }
  }

  
  constructor(props){
    super(props)
    // this.state = { blogs: {} }
  }
  
  // componentDidMount(){
  //   this.fetchData()
  // }

  // fetchData(){
  //   // fetch data
  //   fetch(`${pkg.backendurl}/blogs`)
  //     .then( r => r.json())
  //     .then( data => {
  //       this.setState({ blogs: data })
  //     })
  // }

  render(){
    
    return (
      <Layout title="首页">
        <main className="container" role="main">
          <div className="row">
            <div className="col-sm-8 blog-main">
              {this.props.blogs.content.map((blog) => (
                <PostBlog key={blog.id} blog={blog} />
              ))}
              <Pagination pageInfo={this.props.blogs}/>
            </div>
            <aside className="col-sm-3 ml-sm-auto blog-sidebar">
              <Card />
              <Catalogs />
            </aside>
          </div>
        </main>
      </Layout>
    )
  }
}
