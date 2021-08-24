// Encargado de tener la parte superior de nuestra app
export const TaskBanner = props => (
    <h4 className="bg-primary text-white text-center p-4">
        Hello {props.username}, there are {props.taskItems.filter(t => !t.done).length} tasks to do.
    </h4>
);