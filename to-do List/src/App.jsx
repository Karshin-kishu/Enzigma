import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const initialTasks = [
  {
    id: 1,
    assignedTo: "User 1",
    status: "Completed",
    dueDate: "12/10/2024",
    priority: "Low",
    comments: "This task is good",
  },
  {
    id: 2,
    assignedTo: "User 2",
    status: "In Progress",
    dueDate: "14/09/2024",
    priority: "High",
    comments: "",
  },
  {
    id: 3,
    assignedTo: "User 3",
    status: "Not Started",
    dueDate: "18/08/2024",
    priority: "Low",
    comments: "",
  },
  {
    id: 4,
    assignedTo: "User 4",
    status: "In Progress",
    dueDate: "12/06/2024",
    priority: "Normal",
    comments: "This task is good",
  },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const updateTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="App">
      <h1>Tasks</h1>
      <TaskList tasks={tasks} onEdit={setEditingTask} onDelete={deleteTask} />
      <button onClick={() => setEditingTask({})}>New Task</button>
      {editingTask && (
        <TaskForm
          task={editingTask}
          onSave={editingTask.id ? updateTask : addTask}
          onCancel={() => setEditingTask(null)}
        />
      )}
    </div>
  );
}

export default App;
