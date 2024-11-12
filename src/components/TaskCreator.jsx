import { useState } from "react";

export function TaskCreator({ onAddTaskSubmit, isTaskAded }) {
  const [inputValue, setInputValue] = useState("");

  function handleAddTaskButton(e) {
    e.preventDefault();
    onAddTaskSubmit(inputValue);
    isTaskAded(false);
    setInputValue("");
  }

  return (
    <form onSubmit={handleAddTaskButton} className="flex flex-col gap-3 mt-4 w-full">
      <input
        required
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Dodaj nowe zadanie..."
        className="p-2 rounded-lg border border-gray-400 focus:border-blue-500 outline-none bg-gray-700 text-white"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition-colors"
      >
        Dodaj
      </button>
    </form>
  );
}
