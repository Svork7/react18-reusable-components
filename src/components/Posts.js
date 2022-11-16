//Компонент в котором создается запрос на сервер по сообщениям, они обрабатфываются и выводятся (каждый пост дополнительно отконфигурирован в компоненте Post)
// Для создания запроса необходимо использовать и useState и useEffect
import { useEffect, useState } from 'react'
import Post from './Post'

function Posts() {
  const [posts, setPosts] = useState([])
  //ошибка
  const [error, setError] = useState('')
  //лоадеp
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    console.log('Callback in useEffect called')
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((posts) => {
        //console.log(posts)
        setPosts(posts)
      })
      //отлов, обработка и вывод ошибок
      .catch((error) => setError(error.message))
      //процесс загрузки завершен
      .finally(() => setIsLoading(false))
  }, [])

  //лоадер. Можно добавлять анимацию и что угодно. Ожидает finally и прекращается
  //перенесено вниз и выполняется тернарным оператором
  //if (isLoading) {
  //  return
  //}

  if (error) {
    return <h2>Error: {error}</h2>
  }

  return (
    <>
      <h2>Posts</h2>
      <hr />
      {isLoading ? (
        <h2>Loading</h2>
      ) : (
        posts.map((post) => <Post key={post.id} {...post} />)
      )}
    </>
  )
}

export default Posts
