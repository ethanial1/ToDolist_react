// Guarda las filas de las tablas que vamos a crear para mostrar las tareas (datos)

export const TaskRow = props => (
    <tr key={props.task.name}>
        <td>
            {props.task.name}
        </td>
        <td>
            <input type="checkbox" id="" checked = {props.task.done} onChange={props.toggleTask}/>
        </td>
    </tr>
);