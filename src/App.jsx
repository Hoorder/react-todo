import { useState } from "react";
import { TaskCreator } from "./components/TaskCreator";
import { Tasks } from "./components/Tasks";
import "./App.css";

const initialTasks = [];

function App() {
  const [isAddBtnClicked, setIsAddBtnClicked] = useState(false);
  const [tasks, setTasks] = useState(initialTasks);

  const grammar =
    tasks.length === 1 ? (
      <h2 className="text-gray-400">{tasks.length} zadanie</h2>
    ) : tasks.length >= 2 && tasks.length <= 4 ? (
      <h2 className="text-gray-400">{tasks.length} zadania</h2>
    ) : (
      <h2 className="text-gray-400">{tasks.length} zadań</h2>
    );

  function handleShowAddButton() {
    setIsAddBtnClicked(true);
  }

  function handleHideAddButton() {
    setIsAddBtnClicked(false);
  }

  function handleAddTask(inputValue) {
    setTasks((prevTask) => [
      {
        name: inputValue,
        done: false,
        id: prevTask.length + 1,
      },
      ...prevTask,
    ]);
  }

  function handleDeleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="bg-gray-800 text-white border w-full max-w-md p-6 rounded-lg shadow-lg">
          <div className="flex flex-row justify-between items-center mb-4">
            <div>
              <h1 className="font-bold text-3xl mb-2">Do zrobienia</h1>
              {tasks.length === 0 ? (
                <h2 className="text-gray-400">Brak zadań</h2>
              ) : (
                grammar
              )}
            </div>
            <div>
              {!isAddBtnClicked && (
                <button
                  className="w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white text-2xl rounded-full flex items-center justify-center shadow-lg"
                  onClick={handleShowAddButton}
                >
                  +
                </button>
              )}
            </div>
          </div>
          {isAddBtnClicked && (
            <TaskCreator
              isTaskAded={handleHideAddButton}
              onAddTaskSubmit={handleAddTask}
            />
          )}
          {tasks.length > 0 && (
            <Tasks tasksArray={tasks} onDeleteTask={handleDeleteTask} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
