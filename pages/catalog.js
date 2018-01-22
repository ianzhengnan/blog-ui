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

      const blogs = data.content
      // if (data.content && data.content.length !== 0) {
      //   const result = data.content.map((blog) => {
      //     let rObj = {}
      //     rObj['year'] = blog.year
      //
      //   })
      // }

      return {
        blogs
      }
    }

    constructor(props){
      super(props)
      // this.state = {
      //   blogs: []
      // }
    }

    render(){
      return (
        <Layout title="类别">
          <main className="container" role="main">

            <Breadcrumb />
            <div className="row">
              <div className="col-sm-8 archieves">
                {
                  this.props.blogs.map((blog) => (
                    <ArchieveYear key={blog.year} year={blog.year} blogs={this.props.blogs}/>
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
