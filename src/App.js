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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
