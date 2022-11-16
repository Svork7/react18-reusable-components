//элементБ выводимый в UI
import './Post.css'

function Post(props) {
  //console.log(props)
  const { id, title, userId, body } = props
  return (
    <div className="post">
      <small>{id}</small>
      <h3>{title}</h3>
      <p>{body}</p>
      <h4>User ID: {userId}</h4>
    </div>
  )
}

export default Post
