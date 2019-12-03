import React from 'react';

function Todo(props) {
   const { todo, handleCloseClick } = props;
   return (
      <div>
         <span>{todo}</span>
         <button
            onClick={() => handleCloseClick(todo)}
         >
            X
         </button>
      </div>
   )
}

export default Todo;