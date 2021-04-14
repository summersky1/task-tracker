const AddTask = () => {
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input type="text" placeholder="Add task" />
      </div>
      <div className="form-control">
        <label>Date and time</label>
        <input type="text" placeholder="Add date and time" />
      </div>
      <div className="form-control form-control-check">
        <label>Set reminder</label>
        <input type="checkbox" />
      </div>
      <input className="btn btn-block" type="Submit" value="Save task" />
    </form>
  )
}

export default AddTask
