import Link from 'next/link'

const Breadcrumb = (props) => (
  <nav aria-label="breadcrumb">
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link href="/">
          <a>首页</a>
        </Link>
      </li>
      <li className="breadcrumb-item">
        <Link href={`/catalog?id=${props.cat.id}`} as={`/c/${props.cat.id}.html`}>
          <a>{props.cat.name}</a>
        </Link>
      </li>
    </ol>
  </nav>
)

export default Breadcrumb
