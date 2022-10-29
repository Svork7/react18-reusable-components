// передача компонента напрямую

/*function Button({ count, onClick }) {
  return <button onClick={() => onClick(count + 1)}>Click me!</button>
}*/
function Button({ onClick, btnName }) {
  console.log('Btn rendered')
  return <button onClick={onClick}>Click me! {btnName}</button>
}

export default Button
