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
  const todoArr = JSON.parse(localStorage.getItem("todo")) || [];
  const [state, setState] = useState(todoArr); // [ "", f() ]
  const [isPending, setPending] = useState(true) 

  console.log(state);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    setTimeout(() => {
      setPending(false);
    }, 3000)
  }, [])

  const addNewTodo = (str) => {
    setState([...state, { text: str, status: false, id: Date.now() }]);
  };

  const deleteTodo = (id) => {
    const newArr = state.filter((item) => item.id !== id);
    setState(newArr);
  };

  const onCheck = (id) => {
    const newArr = state.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setState(newArr);
  };

  const onEditText = (newText, id) => {
    const newArr = state.map((todo) => {
      if (todo.id === id) {
        todo.text = newText;
      }
      return todo;
    });

    setState(newArr);
  };
  
  if (isPending) {
    return <div className="preloader">
      <img src="https://icon-library.com/images/loading-icon-animated-gif/loading-icon-animated-gif-7.jpg" alt="Preloader" />
    </div>;
  }
  return (
    <div className="App">
      <Header state={state} />
      <div className="todo_body">
        <CreateTodo addNew={addNewTodo} />
        <div className="todo_items">
          {/* <Todo checked={true} text="Azamat" /> */}
          {state.length ? (
            state.map((item) => (
              <Todo
                key={item.id}
                text={item.text}
                checked={item.status}
                id={item.id}
                onDelete={deleteTodo}
                onCheck={onCheck}
                onEditText={onEditText}
              />
            ))
          ) : (
            <h1 className="add-todo">Please add todo</h1>
          )}
          {/* {
            [ <Todo text={"Купить сахар 5кг"} /> ]
          } */}
        </div>
      </div>
    </div>
  );
}

export default App;
