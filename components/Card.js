import Link from 'next/link'

const Card = () => (
  <div className="card" >
    <div className="card-body">
      <h4 className="card-title">关于</h4>
      <h6 className="card-subtitle mb-2 text-muted">简介</h6>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <Link href="/about" as="/about.html">
        <a className="card-link">更多....</a>
      </Link>
    </div>
  </div>
)

export default Card
