const Task = ({ task, onDelete }) => {
  return (
    <div className="task">
      <h3>
        {task.text}
        <span
          className="fa fa-times"
          onClick={() => onDelete(task.id)}
          style={{ color: "red" }}>
        </span>
      </h3>
      <p>{task.day}</p>
    </div>
  )
}

export default Task
