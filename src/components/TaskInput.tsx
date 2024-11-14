import React, { useState } from "react";

interface TaskInputProps {
  addTask: (title: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleAdd = () => {
    addTask(taskTitle);
    setTaskTitle("");
  };

  return (
    <div className="mb-8">
      <input
        type="text"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        placeholder="Add a new task"
        className="outline-none border-2 border-zinc-700 mr-2 rounded-lg p-2 bg-transparent"
      />
      <button
        className="bg-white text-black py-2 px-3 rounded-md"
        type="button"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
