import Link from 'next/link'

const ArchieveYear = (props) => (
  <div className="archieve-year">
    <div className="archieve-year-header">
      <h2>{props.year}年</h2>
    </div>
    <div className="archieve-year-content">
      <ul>
        <li><a href="#">张江风景</a><span className="cmt-count">（12@2017.12.05）</span></li>
        <li><a href="#">张江风景</a><span className="cmt-count">（12@2017.12.05）</span></li>
        <li><a href="#">张江风景</a><span className="cmt-count">（12@2017.12.05）</span></li>
        <li><a href="#">张江风景</a><span className="cmt-count">（12@2017.12.05）</span></li>
      </ul>
    </div>
  </div>
)

export default ArchieveYear
