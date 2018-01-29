import React from 'react'
import PostBlog from '../components/PostBlog'
import Pagination from '../components/Pagination'
import fetch from 'isomorphic-unfetch'
import pkg from '../package.json'
import $ from 'jquery'

class PostBlogs extends React.Component{
  constructor(props){
    super(props)
    this.state = { blogs: [], isLoad: false, page: 0 , isEnd: false}
    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
    this.fetchData()
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll)
  }
  
  handleScroll(e){
    e.preventDefault()
    let scrollHeight = $(document).height();
    let scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
      this.setState({isLoad: false})
      this.fetchData(this.state.page + 1)
    }
    
  }
  
  fetchData(page = 0){
    fetch(`${pkg.backendurl}/blogs?page=${page}`)
    .then(r => r.json())
    .then(data => {
      this.setState({ isLoad: true })
      if (data && data.content.length > 0) {
        this.setState({ blogs: this.state.blogs.concat(data.content), page: page})
      }else {
        this.setState({ isEnd: true })
        window.removeEventListener('scroll', this.handleScroll)
        setTimeout(() => {
          window.addEventListener('scroll', this.handleScroll)
        }, 5000);
      }
        console.log(`the data's length is ${data.content.length}`);
      })
  }

  render() {
    return (
      <div className="col-sm-8 blog-main">
        {this.state.blogs.map((blog) => (
          <PostBlog key={blog.id} blog={blog} />
        ))}
        <div style={{display: this.state.isLoad?'none':'block'}} className="loading">
          <img src="/static/images/loading2.gif"/>
        </div>
        <div className="alert alert-success" style={{display: this.state.isEnd?'block':'none'}}>^_^没有更多文章了</div>
      </div>
    )
  }
}

export default PostBlogs