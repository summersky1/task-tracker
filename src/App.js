import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
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

  const toggleAdd = () => {
    setShowAddTask(!showAddTask)
  }

  const addTask = task => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleReminder = id => {
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onToggle={toggleAdd} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      { tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks."
      )}
    </div>
  );
}

export default App;
