import './App.css'

import MyComponent from './components/MyComponent'
import OtherComponent from './components/OtherComponent'
import PetInfo from './components/PetInfo'

function App() {
  return (
    <div className="App">
      <MyComponent />
      <MyComponent />
      <MyComponent />
      <OtherComponent />
      <PetInfo animal="cat" age={9} />
      <PetInfo animal="other cat" age="5" />
    </div>
  )
}

export default App
