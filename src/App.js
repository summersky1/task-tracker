import { useState } from 'react'
import Header from "./components/Header"
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "task 1",
      day: "Monday"
    },
    {
      id: 2,
      text: "task 2",
      day: "Wednesday"
    },
    {
      id: 3,
      text: "task 3",
      day: "Friday"
    },
  ])

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      { tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        "No tasks."
      )}
    </div>
  );
}

export default App;
