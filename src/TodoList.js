import React from 'react';

const TodoList = (props) => {
    return (
     <div className="todos">
      <span className="todo-field">{props.listItem.Text}</span>
      <button className="button-primary check-btn"  onClick={() => props.onCheck(props.listItem)}>Compeleted</button>
      <button className="button-primary delete-btn" onClick={() => props.onDelete(props.listItem.id)}>Delete</button>
    </div>
      );
}
 
export default TodoList;