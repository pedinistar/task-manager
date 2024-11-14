import React from "react";
import { FaTrashAlt } from "react-icons/fa";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  deleteTask: (id: number) => void;
  toggleComplete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({
  task,
  deleteTask,
  toggleComplete,
}) => {
  return (
    <li className="flex border-b-2 py-4 items-center justify-between mb-4">
      <span
        onClick={() => toggleComplete(task.id)}
        className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
      >
        {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)} className="text-red-500 ml-4">
        <FaTrashAlt />
      </button>
    </li>
  );
};

export default TaskItem;
