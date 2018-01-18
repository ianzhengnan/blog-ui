import React from 'react'
import Link from 'next/link'
import marked from 'marked'
import dynamic from 'next/dynamic'

const Highlight = dynamic(import('react-highlight'))

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
})

class PostContent extends React.Component {

  renderMarkdown() {
    if (/```/.test(this.props.content)) {
      return (
        <div>
          <Highlight innerHTML>
            {marked(this.props.content)}
          </Highlight>
        </div>
      )
    }

    return (
      <div
        dangerouslySetInnerHTML={{__html: marked(this.props.content)}}
      />
    )
  }

  render() {
    return (
      <div className="blog-post">
        <h2 className="blog-post-title">{this.props.title}</h2>
        <p className="blog-post-meta">{this.props.datetime}</p>
        { this.renderMarkdown() }
      </div>
    )
  }
}

export default PostContent
