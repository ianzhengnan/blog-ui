import React from 'react'
import Layout from '../components/Layout'
import PostBlogs from '../components/PostBlogs';
import Catalogs from '../components/Catalogs'
import Card from '../components/Card'
import fetch from 'isomorphic-unfetch'
import pkg from '../package.json'

export default class extends React.Component {
  
  render(){
    return (
      <Layout title="首页">
        <main className="container" role="main">
          <div className="row">
            <PostBlogs />
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
