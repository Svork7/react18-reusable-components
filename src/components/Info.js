import './Info.css'

//импорт модуля
import styles from './Info.module.css'

console.log(styles)
// {
//   "info": "Info_info__PpUIQ",
//   "myOtherButton": "Info_myOtherButton__NvlFI"
// }

// нужно использовать классы. Тэги все равно работают глобально. Применение стилей через точечную запись
function Info() {
  return (
    <div className={styles.info}>
      <h2>Hello from info component</h2>
      <button className={styles.myOtherButton}>Click info</button>
    </div>
  )
}

export default Info
