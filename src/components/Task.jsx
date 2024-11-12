import { useState } from "react";

export function Task({ id, name, onDeleteTask }) {
  const [isTaskDone, setIsTaskDone] = useState(false);

  function handleDoneButton() {
    setIsTaskDone(true);
  }

  function handleDeleteButton() {
    if (!isTaskDone) return alert("Nie zrobiłeś zadania!");
    onDeleteTask(id);
  }

  return (
    <div className="flex flex-col gap-3 p-4 bg-gray-700 rounded-lg shadow-lg">
      {isTaskDone ? (
        <p className="text-gray-500 line-through">{name}</p>
      ) : (
        <p className="text-white">{name}</p>
      )}
      <div className="flex gap-3">
        {!isTaskDone && (
          <button
            onClick={handleDoneButton}
            className="bg-green-700 text-white py-1 px-3 rounded-lg hover:bg-green-800 transition-colors"
          >
            Zrobione
          </button>
        )}
        <button
          onClick={handleDeleteButton}
          className="bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-800 transition-colors"
        >
          Usuń
        </button>
      </div>
    </div>
  );
}
