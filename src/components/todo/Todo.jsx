import "./Todo.css";

// props = { text: "Aziz" }
const Todo = (props) => {
  const onDelete = () => {
    alert(props.text);
  };
  return (
    <div className="todoWrapper">
      <div className="d-flex align-items-center">
        <input checked={props.checked} type="checkbox" />
        <span className={ props.checked ? "checked" : "" }>{props.text}</span>
      </div>

      <div>
        <button className="btn btn-success">Edit</button>
        <button onClick={onDelete} className="btn btn-danger delete">Del</button>
      </div>
    </div>
  );
};

export default Todo;
