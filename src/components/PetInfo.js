function PetInfo(props) {
  console.log(props)
  // пример с дуструктуризацией
  const { animal, age, hasPet } = props
  //возврат через JSX
  return hasPet ? (
    <h3>{`my ${animal} is ${age} years old`}</h3>
  ) : (
    <h3>I don't have a pet</h3>
  )
}
//возврат через переменную с тернарным оператором
/*const text = hasPet
    ? `my ${animal} is ${age} years old`
    : "I don't have a pet"
 return <h3>{text}</h3>
}
  */
// просто возврат с текстом
/*
    return (
    <h3>
      About props: my {animal} is {age} years old
      )
      </h3>
    }
      */

/*
console.log(props)
  return (
    <h3>
      About props: my {props.animal} is {props.age} years old
    </h3>
  )
}
*/

export default PetInfo
