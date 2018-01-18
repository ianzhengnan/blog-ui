import Comment from './Comment'
import InputComment from './InputComment'

const Comments = (props) => (
  <div className="comments">
    <h2>留言（{props.count}条）</h2>
    <hr />
    <Comment user="Ian Zheng" content="分析地透彻" datetime="2017年12月11日 11:28"/>
    <Comment user="郑楠" content="写得好" datetime="2017年12月10日 11:28"/>
    <InputComment />
  </div>
)

export default Comments
