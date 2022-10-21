import './App.css'

import MyComponent from './components/MyComponent'
import OtherComponent from './components/OtherComponent'
import PetInfo from './components/PetInfo'
import RandomNumber from './components/RandomNumber'

function App() {
  return (
    <div className="App">
      <MyComponent />
      <MyComponent />
      <MyComponent />
      <OtherComponent />
      <PetInfo animal="cat" age={9} hasPet />
      <PetInfo animal="other cat" age="5" hasPet={true} />
      <PetInfo hasPet={false} />
      <RandomNumber maxNum={500} />
    </div>
  )
}

export default App
