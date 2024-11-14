import React from "react";
import TaskItem from "./TaskItem";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: number) => void;
  toggleComplete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  deleteTask,
  toggleComplete,
}) => {
  return (
    <ul className="w-[90%] sm:w-[40%]">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
