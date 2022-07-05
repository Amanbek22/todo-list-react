import { useState } from "react";
import "./Todo.css";

// props = { text: "Aziz" }
const Todo = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [inpVal, setInpVal] = useState(props.text);

  const onDelete = () => {
    props.onDelete(props.id);
  };

  const handleCheck = () => {
    props.onCheck(props.id);
  };

  const onEdit = () => {
    setIsEdit(!isEdit)
  };

  const editSubmit = (e) => {
    e.preventDefault();
    props.onEditText(inpVal, props.id);
    setIsEdit(false)
  }

  return (
    <div className="todoWrapper">
      {isEdit ? (
        <form onSubmit={editSubmit} className="formWrapper">
          <input 
            value={inpVal}
            type="text" 
            placeholder="Enter todo here" 
            onChange={(e) => setInpVal(e.target.value)}
          />
          <button>+Submit</button>
        </form>
      ) : (
        <div className="d-flex align-items-center">
          <input
            checked={props.checked}
            onChange={handleCheck}
            type="checkbox"
          />
          <span className={props.checked ? "checked" : ""}>{props.text}</span>
        </div>
      )}

      <div>
        <button onClick={onEdit} className="btn btn-success">
          Edit
        </button>
        <button onClick={onDelete} className="btn btn-danger delete">
          Del
        </button>
      </div>
    </div>
  );
};

export default Todo;
