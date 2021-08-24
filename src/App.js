import { useState } from 'react';
import { TaskRow } from './components/TaskRow';
import './App.css';

function App() {
  // Definimos algunos estados
  const [username, setuserName] = useState('ethan');
  const [taskItems, settaskItems] = useState([
    { name: "Task one", done: false },
    { name: "Task two", done: true },
    { name: "Task three", done: false },
    { name: "Task Four", done: false },
  ]);

  // Cambiamos el estado de DONE, recorriendo cada tarea                            se hace una copia (...)
  const toggleTask = task => settaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done} : t)));

  // Crea multipler tr que luego son pintados en la tabla
  const taskTableRows = () => taskItems.map( task => (
      <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
    ));
   
  return (
    <div className="App">
      <h1>To-Do</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>
          {taskTableRows()}
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
