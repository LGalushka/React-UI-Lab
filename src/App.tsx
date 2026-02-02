import Icon from "./components/Icon"
import Input from "./components/Input"

function App() {
  
  return (
    <>
      <Icon name='search' size={22} color="blue" />

      <Input label='Имя' placeholder='Введите имя' isRequired={true} />
      <Input label="Email" placeholder="examp@mail.con" />
    </>
  )
}

export default App
