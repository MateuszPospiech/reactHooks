import React, { useState } from 'react';

import Todo from './Todo';

function TodoList() {
   const [ todoList, setTodoList ] = useState([]);
   const [ inputValue, setInputValue ] = useState("");

   const handleInputChange = (event) => {
      setInputValue(event.target.value);
   }
   
   const handleButtonClick = () => {
      if (todoList.some((todo) => todo === inputValue)) {
         alert('Masz już to zadanie na liście');
         return;
      }
      setTodoList([...todoList, inputValue]);
      setInputValue("");
   }
   return (
     <div>
         <h1>Moje zadania:</h1><br/>
         <input 
            placeholder="Co chcesz dodać do listy?" 
            value={inputValue} 
            onChange={handleInputChange}
         />
         <button
            onClick={handleButtonClick}
         >Dodaj zadanie</button>
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