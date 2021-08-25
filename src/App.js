import { useState, useEffect } from 'react';
import { TaskRow } from './components/TaskRow';
import { TaskBanner } from './components/TaskBanner';
import { TaskCreator } from './components/TaskCreator';
import { VisibilityControl } from './components/VisibilityControl';
import './App.css';

function App() {
  // Definimos algunos estados
  const [username, setuserName] = useState('Ethan');
  const [taskItems, settaskItems] = useState([
    
  ]);

  // Muestra las tareas completadas
  const [showCompleted, setshowCompleted] = useState(true);

  // Ejecuta una función
  useEffect(() => {
    let data = localStorage.getItem("task");
    if(data != null){
      settaskItems(JSON.parse(data));
    }else{
      setuserName('Ethan');
      settaskItems([
        { name: "Correr", done: false },
        { name: "Task two", done: true },
        { name: "Task three", done: false },
        { name: "Task Four", done: false },
      ]);
      setshowCompleted(true);
    }
  }, []);

  useEffect(() => {
    // guardamos los cambios en el localStorage
    localStorage.setItem('task', JSON.stringify(taskItems))
  }, [taskItems]);

  // Cambiamos el estado de DONE, recorriendo cada tarea                            se hace una copia (...)
  const toggleTask = task => settaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done} : t)));

  // Crea multipler tr que luego son pintados en la tabla
  const taskTableRows = (doneValue) => taskItems.filter(task => task.done === doneValue).map( task => (
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
          {taskTableRows(false)}
        </tbody>
      </table>
      <div className="bg-secondary-text-white text-center p-2">
        <VisibilityControl descrip = "completed tasks" isCheked = {showCompleted} onChange={cheked => setshowCompleted(cheked)}/>
      </div>
      <div>
        {showCompleted && (
          <table className="table table-striped table-bordered container">
            <thead>
              <tr>
                <th>Descripction</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>
            {taskTableRows(true)}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
