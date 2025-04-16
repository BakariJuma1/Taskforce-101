import React from "react";

function TaskList({ tasks, deleteTask }) {
  console.log({ tasks });

  function handleClick(id) {
    console.log("clicked");
    deleteTask(id);
  }
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <div className="taskContainer">
            <strong>Category:</strong> {task.category}
            <br></br>
            <strong>Activity:</strong> {task.activity}
            <br />
            <button onClick={() => handleClick(task.id)}>delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
