// Encargado de mostrar las tareas completadas (otra tabla más)

export const VisibilityControl = props => {
    return (
        <div className="form-check">
            <input type="checkbox" className="form-check-input" checked={props.isCheked} onChange={e => props.change(e.target.checked)}/>
            <label htmlFor="form-check-label">
                Show {props.descrip}
            </label>
        </div>
    );
}