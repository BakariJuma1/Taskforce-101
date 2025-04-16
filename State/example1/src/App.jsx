import Tasks from "../../../mini-todo/src/Data/data";
import TaskList from "../../../mini-todo/src/Components/TaskList";
import AddTask from "../../../mini-todo/src/Components/AddTask";
import { useState } from "react";

function App() {
  const [task, setTask] = useState(Tasks);

  function updateTask(newTask) {
    const updatedTask = [...task, newTask];
    setTask(updatedTask);
  }

  function deleteTask(id) {
    const updatedTasks = task.filter((item) => item.id !== id);
    setTask(updatedTasks);
  }
  return (
    <>
      <AddTask onAdd={updateTask} task={setTask} />
      <TaskList tasks={task} deleteTask={deleteTask} />
    </>
  );
}

export default App;
