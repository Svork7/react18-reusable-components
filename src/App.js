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
import Reset from './components/Reset'
import Card from './components/Card'
import Login from './components/Login'
import Wrapper from './components/Wrapper'

const btnNames = ['Press me', 'Push me', 'Click me']

function App() {
  console.log('App rendered')
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1)
    console.log(count)
  }

  const buttonStyle = { backgroundColor: 'lightgreen' }
  const resetCount = () => {
    setCount(0)
  }
  return (
    <div className="App">
      <MyComponent />
      <Card />
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
      {count > 0 && (
        <div>
          <Reset style={buttonStyle} onClick={resetCount}>
            Reset
          </Reset>
        </div>
      )}

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
      {/*Неконтролируемый инпут*/}
      <Login />
      {
        //передача компонента через свойство children
      }
      <Wrapper color="lightblue">
        <h4>text inside of wrapper</h4>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h4>text inside of wrapper</h4>
      </Wrapper>
    </div>
  )
}

export default App
