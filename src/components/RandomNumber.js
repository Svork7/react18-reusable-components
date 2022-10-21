import { useState } from 'react'
import generateRandomNum from '../utils/generateRandomNum'

function RandomNumber({ maxNum }) {
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum))
  const changeRandomNum = () => {
    setRandomNum(generateRandomNum(maxNum))
  }

  return (
    <div>
      <h3>{randomNum}</h3>
      <button onClick={changeRandomNum}>Generate new Random Number</button>
    </div>
  )
}

export default RandomNumber
