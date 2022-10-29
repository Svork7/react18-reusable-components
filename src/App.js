import './App.css'
import { useState } from 'react'
import MyComponent from './components/MyComponent'
import OtherComponent from './components/OtherComponent'
import PetInfo from './components/PetInfo'
import RandomNumber from './components/RandomNumber'
import Counter from './components/Counter'
import Button from './components/Button'
import Person from './components/Person'
import persons from './data/persons'

const btnNames = ['Press me', 'Push me', 'Click me']

function App() {
  console.log('App rendered')
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
    console.log(count)
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
      {/*добавление кнопок с содержимым из массива
      Необходимо добавлять ключи(хотя и без них будет работать)*/}
      {btnNames.map((btnName, index) => {
        return <Button onClick={incrementCount} btnName={btnName} key={index} />
      })}
      {/*передача свойства напрямую
      <Button count={count} onClick={setCount} />
  "*/}

      {/*Из массива напрямую
      <Button onClick={incrementCount} btnName={'Нажми меня'} />
      <Button onClick={incrementCount} btnName={btnNames[0]} />
      <Button onClick={incrementCount} btnName={btnNames[1]} />
      <Button onClick={incrementCount} />*/}
      {/*<Button onClick={incrementCount} btnName={'Нажми меня'} />
      <Button onClick={incrementCount} btnName={btnNames[0]} />
      <Button onClick={incrementCount} btnName={btnNames[1]} />
    <Button onClick={incrementCount} />*/}
      {persons.map((person) => {
        return <h3>{person.firstName}</h3>
      })}
    </div>
  )
}

export default App
