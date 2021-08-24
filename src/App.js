import { useState } from 'react';
import { TaskRow } from './components/TaskRow';
import { TaskBanner } from './components/TaskBanner';
import { TaskCreator } from './components/TaskCreator';
import './App.css';

function App() {
  // Definimos algunos estados
  const [username, setuserName] = useState('Ethan');
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

  // Creamos una nueva tarea
  const crearNuevaTarea = taskName => {
    if(!taskItems.find(t => t.name === taskName)){
      settaskItems([...taskItems, {name: taskName, done: false}]);
    }
  }
   
  return (
    <div className="App">
      <TaskBanner username={username} taskItems = {taskItems}/>
      <TaskCreator crear={crearNuevaTarea}/>
      <table className="table table-striped table-bordered container">
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
