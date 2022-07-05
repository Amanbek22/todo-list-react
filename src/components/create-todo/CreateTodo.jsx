import { useState } from "react";
import "./CreateTodo.css"

function CreateTodo(props) { // props = { addNew: f() }

  const [ inputValue, setInputValue ] = useState("")

  const submit = (event) => {
    event.preventDefault(); // Stops prevent default of form action
    props.addNew( inputValue )
    setInputValue("")
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <form onSubmit={submit} className="formWrapper">
        <input 
          value={inputValue} 
          type="text" 
          placeholder="Enter todo here" 
          onChange={handleChange}
        />
        <button>+Submit</button>
    </form>
  )
}

export default CreateTodo;