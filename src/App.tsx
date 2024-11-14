import React, { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
import TaskInput from "./components/TaskInput";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string) => {
    if (title.trim() === "") return;
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <main className="bg-zinc-900 text-white w-screen h-screen border-2 border-zinc-800 px-20 py-10 text-center flex flex-col items-center">
      <h2 className="text-4xl font-semibold mb-8">.focus</h2>
      <TaskInput addTask={addTask} />
      {tasks.length === 0 ? (
        <p className="text-gray-400 mt-4">
          Add Your First Task with <span className="font-semibold">.focus</span>
        </p>
      ) : (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      )}
    </main>
  );
};

export default App;
