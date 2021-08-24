import { useState } from "react";

// Sirve para definir un formulario que sirva para que el usuario guarde una tarea
export const TaskCreator = props => {

    const [newTaskName, setnewTaskName] = useState('');

    // Permite actualizar el valor
    const updateTaskValue = e => setnewTaskName(e.target.value);

    const createNewTask = () => {
        props.crear(newTaskName);
        setnewTaskName('');
    }

    return (
        <div className="my-1">
            <input 
                type="text"
                className="form-control"
                value={newTaskName}
                onChange={updateTaskValue}
            />
            <button className="btn btn-primary mt-1" onClick={createNewTask}>OK</button>
        </div>
    );
}