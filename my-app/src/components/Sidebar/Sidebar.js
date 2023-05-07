import './Sidebar.css'


export default function Sidebar() {
  return (
    <div>
<div className="sidebar">
        <div className="sidebar-item active-item">
          <span className="material-icons-outlined hover active">lightbulb</span>
          <span className="sidebar-text">Notes</span>
        </div>
        <div className="sidebar-item">
          <span className="material-icons-outlined hover">notifications</span>
          <span className="sidebar-text">Reminders</span>
        </div>
        <div className="sidebar-item">
          <span className="material-icons-outlined hover">edit</span>
          <span className="sidebar-text">Edit Labels</span>
        </div>
        <div className="sidebar-item">
          <span className="material-icons-outlined hover">archive</span>
          <span className="sidebar-text">Archive</span>
        </div>
        <div className="sidebar-item">
          <span className="material-icons-outlined hover">delete</span>
          <span className="sidebar-text">Trash</span>
        </div>
      </div>
      <div className="form-container inactive-form">
        <form>
          <input className="note-text" type="text" placeholder="Take a note..." />
          <div className="form-actions">
            <div className="tooltip">
              <span className="material-icons-outlined hover">check_box</span>
              <span className="tooltip-text">New List</span>
            </div>
            <div className="tooltip">
              <span className="material-icons-outlined hover">brush</span>
              <span className="tooltip-text">New Drawing</span>
            </div>
            <div className="tooltip">
              <span className="material-icons-outlined hover">image</span>
              <span className="tooltip-text">New Image</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
