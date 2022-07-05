import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./components/header/Header";
import CreateTodo from "./components/create-todo/CreateTodo";
import Todo from "./components/todo/Todo";

// const arr = ["Hello", "World"]
// const [ first, second ] = arr
// console.log(first); // "Hello"
// console.log(second); // "World"

// function useCustomState(initialState) {

//   return [ initialState, function() {} ]
// }

// const [ aman, setAman ] = useCustomState("")

function App() {
  const todoArr = JSON.parse(localStorage.getItem("todo")) || []
  const [ state, setState ] = useState(todoArr) // [ "", f() ] 

  console.log(state);
  
  useEffect( () => {
    localStorage.setItem("todo", JSON.stringify(state))
  }, [state]);

  const addNewTodo = ( str ) => {
    setState( [ ...state, { text: str, status: false, id: Date.now() } ] )
  }

  const deleteTodo = (id) => {
    const newArr = state.filter( (item) => item.id !== id);
    setState(newArr)
  }

  const onCheck = (id) => {
    const newArr = state.map( (item) => {
      if(item.id === id) {
        item.status = !item.status
      }
      return item
    })
    setState(newArr)
  }

  const onEditText = (newText, id) => {
    const newArr = state.map((todo) => {
      if( todo.id ===  id) {
        todo.text = newText;
      }
      return todo
    });

    setState(newArr)
  }

  return (
    <div className="App">
      <Header />
      <div className="todo_body">
        <CreateTodo addNew={addNewTodo} />
        <div className="todo_items">
          {/* <Todo checked={true} text="Azamat" /> */}
          {
            state.map( (item) => <Todo 
              text={item.text} 
              checked={item.status} 
              id={item.id}
              onDelete={deleteTodo}
              onCheck={onCheck}
              onEditText={onEditText}
            />)
          }
          {/* {
            [ <Todo text={"Купить сахар 5кг"} /> ]
          } */}
        </div>
      </div>
    </div>
  );
}

export default App;
