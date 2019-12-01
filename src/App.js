import React from 'react';
import './App.css';

import TodoList from './components/TodoList/TodoList';
// function App() {
//   const [ number, setNumber ] = useState(0);
//   return (
//     <div className="App">
//       <div>{number}</div>
//       <button onClick={() => setNumber(number + 1)}>+</button>
//       <button onClick={() => setNumber(number - 1)} >-</button>
//     </div>
//   );
// }
function App() {

  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;
