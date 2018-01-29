import React from 'react'
import PostBlog from '../components/PostBlog'
import Pagination from '../components/Pagination'
import fetch from 'isomorphic-unfetch'
import pkg from '../package.json'

class PostBlogs extends React.Component{
  constructor(props){
    super(props)
    this.state = { blogs: {}, isLoad: false }
  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData(){
    fetch(`${pkg.backendurl}/blogs`)
      .then(r => r.json())
      .then(data => {
        this.setState({ blogs: data, isLoad: true})
        console.log(`the data's length is ${data.content.length}`);
      })
  }

  render() {
    let blogs = this.state.blogs
    if (!blogs.content) {
      blogs = {
        content: []
      }
    }
    return (
      <div className="col-sm-8 blog-main">
        <div style={{display: this.state.isLoad?'none':'block'}}>loading...</div>
        {blogs.content.map((blog) => (
          <PostBlog key={blog.id} blog={blog} />
        ))}
        {/* <Pagination pageInfo={blogs}/> */}
      </div>
    )
  }
}

export default PostBlogs