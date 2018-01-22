import React from 'react'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import pkg from '../package.json'

class Catalogs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      catalogs: []
    }

  }

  componentDidMount(){
    this.fetchData()
  }

  fetchData() {
    fetch(`${pkg.backendurl}/catalogs`)
      .then(r => r.json())
      .then(data => {
        this.setState({ catalogs: data })
      })
  }

  render() {
    const cats = this.state.catalogs
    return (
      <div className="sidebar-module">
        <h4>分类</h4>
        <ol className="list-unstyled catalogs">
          {
            cats.map((cat) => (
              <li key={cat.id}>
                <Link href={`/catalog?id=${cat.id}`}
                  as={`/c/${cat.id}.html`} >
                  <a>{cat.name}（{cat.articleCount}）</a>
                </Link>
              </li>
            ))
          }
        </ol>
      </div>
    )
  }
}

export default Catalogs
