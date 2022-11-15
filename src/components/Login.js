import { useState } from 'react'

function Login() {
  //можно вызвать юзстейт 1 раз создав объект
  //const [username, setUsername] = useState('')
  //const [password, setPassword] = useState('')

  const [data, setData] = useState({ username: '', password: '' })

  function handleFormSubmit(event) {
    event.preventDefault()
    /*const userData = {
      //используется сокращенная запись так как название ключа и свойства одинаковые (без дублирования названия username: username)
      username,
      password,
    }*/
    console.log(data)
    //console.log(userData)
    alert(JSON.stringify(data))
    //alert(JSON.stringify(userData))
  }

  function handleInputChange(e, name) {
    setData({ ...data, [name]: e.target.value })
  }
  return (
    <>
      <h3>Login form</h3>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            //value={username}
            // можно упростить, так как однотипная функция вызывается дважды. Она вынесена наверх handleInputChange
            // onChange={(e) => setData({ ...data, username: e.target.value })}
            onChange={(e) => handleInputChange(e, 'username')}
            //onChange={(e) => setUsername(e.target.value)}
            //инпуты контролируемые, поэтому можно убрать name="username"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            //value={password}
            // можно упростить, так как однотипная функция вызывается дважды. Она вынесена наверх handleInputChange
            //onChange={(e) => setData({ ...data, password: e.target.value })}
            onChange={(e) => handleInputChange(e, 'password')}
            //onChange={(e) => setPassword(e.target.value)}
            //инпуты контролируемые, поэтому можно убрать name="password"
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
