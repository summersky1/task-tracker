import { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()

    if (!text) {
      alert("Please add text")
      return
    }

    onAdd({ text, day, reminder })
    // reset input fields
    setText("")
    setDay("")
    setReminder(false)
  }

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input type="text" value={text} onChange={(event) => setText(event.target.value)} placeholder="Add task" />
      </div>
      <div className="form-control">
        <label>Day and time</label>
        <input type="text" value={day} onChange={(event) => setDay(event.target.value)} placeholder="Add day and time" />
      </div>
      <div className="form-control form-control-check">
        <label>Set reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          value={reminder}
          onChange={(event) => setReminder(event.currentTarget.checked)}
        />
      </div>
      <input className="btn btn-block" type="Submit" defaultValue="Save task" />
    </form>
  )
}

export default AddTask
