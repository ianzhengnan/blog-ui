import React from 'react'
import Link from 'next/link'
import $ from 'jquery'
import Router from 'next/router'

export default class extends React.Component {

    constructor(props){
      super(props)
      this.state = { isVisible: 'block' }

      this.handlePrevBtn = this.handlePrevBtn.bind(this)
      this.handleNextBtn = this.handleNextBtn.bind(this)
    }

    componentDidMount(){
      // const blogs = this.props.pageInfo
      // if (blogs.first && blogs.last) {
      //   this.setState({ isVisible: 'none' })
      // }else if (blogs.first) {
      //   this.setState({ isVisible: 'block' })
      //   $('#prev').addClass('btn-outline-secondary disabled')
      //   $('#next').addClass('btn-outline-primary')
      // }else{
      //   this.setState({ isVisible: 'block' })
      //   $('#prev').addClass('btn-outline-primary')
      //   $('#next').addClass('btn-outline-secondary disabled')
      // }

    }

    handlePrevBtn(e) {
      console.log('older button is clicked');
      const href = {
        pathname: '/',
        query: { page: 0 }
      }
      
      const as = {
        pathname: '/'
      }

      Router.push(href, as)
    }

    handleNextBtn(e) {
      console.log('Newer button is clicked');

    }

    render(){
      return (
        <nav className="blog-pagination" style={{display: this.state.isVisible}}>
          <a id="prev" className="btn " onClick={this.handlePrevBtn}>Older</a>
          <a id="next" className="btn " onClick={this.handleNextBtn}>Newer</a>
        </nav>
      )
    }

}
