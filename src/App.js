import './App.css'
import { useState } from 'react'
import MyComponent from './components/MyComponent'
import OtherComponent from './components/OtherComponent'
import PetInfo from './components/PetInfo'
import RandomNumber from './components/RandomNumber'
import Button from './components/Button'
import Counter from './components/Counter'

function App() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
  }
  return (
    <div className="App">
      <MyComponent />
      <OtherComponent />
      <PetInfo animal="cat" age={9} hasPet />
      <PetInfo animal="other cat" age="5" hasPet={true} />
      <PetInfo hasPet={false} />
      <RandomNumber maxNum={500} />
      <Counter count={count} />
      {/*передача свойства напрямую
      <Button count={count} onClick={setCount} />
  "*/}
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
    </div>
  )
}

export default App
