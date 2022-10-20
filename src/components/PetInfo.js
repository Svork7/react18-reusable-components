function PetInfo(props) {
  console.log(props)
  // пример с дуструктуризацией
  const { animal, age } = props
  return (
    <h3>
      About props: my {animal} is {age} years old
    </h3>
  )
}
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
