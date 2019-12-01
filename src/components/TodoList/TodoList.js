import React, { useState } from 'react';

import Todo from './Todo';

function TodoList() {
   const [ todoList, setTodoList ] = useState(["Zadanie1", "Zadanie2", "Zadanie3"]);
   return (
     <div>
       {todoList.map((todo)=> (
         <Todo
            todo={todo}
            key={todo}
         />
       ))}
     </div>
   );
 }
 

export default TodoList;