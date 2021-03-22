import React from 'react';

const TodoList = (props) => {
    return (
     <div className="todos">
      <span className={ `todo-field ${props.listItem.completed ? "completed" : ""}`}>
      {props.listItem.Text} </span>

      <button className="button-primary check-btn" 
       onClick={() => props.onCheck(props.listItem)}>
         <i class="fas fa-check"></i>
         </button>

      <button className="button-primary delete-btn "
       onClick={() => props.onDelete(props.listItem.id)}>
         <i class="fas fa-trash"></i>
         </button>
    </div>
      );
}
 
export default TodoList;