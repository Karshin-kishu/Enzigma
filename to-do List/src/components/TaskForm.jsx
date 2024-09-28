import React, { useState, useEffect } from "react";

const TaskForm = ({ task, onSave, onCancel }) => {
  const [formTask, setFormTask] = useState({
    id: task.id || Date.now(),
    assignedTo: task.assignedTo || "",
    status: task.status || "Not Started",
    dueDate: task.dueDate || "",
    priority: task.priority || "Normal",
    comments: task.comments || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormTask({ ...formTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formTask);
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Assigned To</label>
        <input
          type="text"
          name="assignedTo"
          value={formTask.assignedTo}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Status</label>
        <select
          name="status"
          value={formTask.status}
          onChange={handleChange}
          required
        >
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
      <div>
        <label>Due Date</label>
        <input
          type="date"
          name="dueDate"
          value={formTask.dueDate}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Priority</label>
        <select
          name="priority"
          value={formTask.priority}
          onChange={handleChange}
          required
        >
          <option value="Low">Low</option>
          <option value="Normal">Normal</option>
          <option value="High">High</option>
        </select>
      </div>
      <div>
        <label>Comments</label>
        <textarea
          name="comments"
          value={formTask.comments}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default TaskForm;
