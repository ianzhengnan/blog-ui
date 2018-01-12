import Link from 'next/link'

const Breadcrumb = (props) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><a href="#">首页</a></li>
      <li className="breadcrumb-item"><a href="#">分类</a></li>
      <li className="breadcrumb-item active" aria-current="page">散文</li>
    </ol>
  </nav>
)

export default Breadcrumb
