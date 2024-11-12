import { Task } from "./Task";

export function Tasks({ tasksArray, onDeleteTask }) {
  return (
    <div className="mt-6 w-full space-y-4">
      {tasksArray.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          name={task.name}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}
