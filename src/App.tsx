import { useState } from "react"
import Icon from "./components/Icon"
import Input from "./components/Input"
import Toggle from "./components/Toggle"
import Rating from "./components/Rating"
import ProgressBar from "./components/ProgressBar"

function App() {
  
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const handleClick = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <Icon name='search' size={22} color="blue" />

      <Input label='Имя' placeholder='Введите имя' isRequired={true} />
      <Input label="Email" placeholder="examp@mail.con" />

      <Toggle label="Получать уведомления" isChecked={isChecked} onChange={handleClick} />

      <Rating value={3} max={10} />

      <ProgressBar progress={75} label="Загрузка..." />
      <ProgressBar progress={20} /> 
    </>
  )
}

export default App
