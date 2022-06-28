import { useState } from "react";
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
  const todoArr = [ 
    { text: "Купить сахар 5кг", status: false },
    { text: "Купить сахар 6кг", status: true },
  ];
  const [ state, setState ] = useState(todoArr) // [ "", f() ] 

  return (
    <div className="App">
      <button onClick={() => {
        setState([ ...state, { text: "Купить сахар 12кг", status: false } ])
        // todoArr.push({ text: "Купить сахар 12кг", status: false },)
        // console.log(todoArr)
      }}>
        Add
      </button>
      <Header />
      <div className="todo_body">
        <CreateTodo />
        <div className="todo_items">
          {/* <Todo checked={true} text="Azamat" /> */}
          {
            state.map( (item) => <Todo text={item.text} checked={item.status} />)
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
