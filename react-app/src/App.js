import React, { useState } from 'react';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, { taskName: newTask, completed: false }]);
  };

  return (
    <div className="container mt-5">
      <Header />
      <TodoForm addTask={addTask} />
      <TodoList tasks={tasks} />
    </div>
  );
}

export default App;