import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import Breadcrumb from '../components/Breadcrumb'
import ArchieveYear from '../components/ArchieveYear'
import Catalogs from '../components/Catalogs'
import pkg from '../package.json'

export default class extends React.Component {
    static async getInitialProps({query}){
      const id = query ? query.id : ''
      const res = await fetch(`${pkg.backendurl}/blogs?catalogId=${id}`)
      const data = await res.json()

      const response = await fetch(`${pkg.backendurl}/catalogs/${id}`)
      const catalog = await response.json()

      return {
        blogs: data.content,
        catalog: catalog
      }
    }

    constructor(props){
      super(props)
    }

    render(){
      const blogs = this.props.blogs
      let blog = { year: blogs[0].year, bs: [] }

      let result = []
      let i = 0
      for ( ;i < blogs.length; i++) {
        if (blogs[i].year !== blog.year) {
          result.push({year: blog.year, bs: blog.bs.slice(0)})
          blog.year = blogs[i].year
          blog.bs.length = 0
        }
        blog.bs.push(blogs[i])
      }
      if (blog.bs && blog.bs.length > 0) {
        result.push({year: blog.year, bs: blog.bs.slice(0)})
      }

      return (
        <Layout title="类别">
          <main className="container" role="main">

            <Breadcrumb cat={this.props.catalog}/>
            <div className="row">
              <div className="col-sm-8 archieves">
                {
                  result.map((blog) => (
                    <ArchieveYear key={blog.year} year={blog.year} blogs={blog.bs}/>
                ))
              }
              </div>
              <aside className="col-sm-3 ml-sm-auto">
                <Catalogs />
              </aside>
            </div>
          </main>
        </Layout>
      )
    }
}
