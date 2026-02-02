import { useState } from "react"
import Icon from "./components/Icon"
import Input from "./components/Input"
import Toggle from "./components/Toggle"

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

    </>
  )
}

export default App
