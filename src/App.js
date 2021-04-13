import { useState } from 'react'
import Header from "./components/Header"
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "task 1",
      day: "Monday",
      reminder: true,
    },
    {
      id: 2,
      text: "task 2",
      day: "Wednesday",
      reminder: true,
    },
    {
      id: 3,
      text: "task 3",
      day: "Friday",
      reminder: false,
    },
  ])

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = id => {
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header />
      { tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks."
      )}
    </div>
  );
}

export default App;
