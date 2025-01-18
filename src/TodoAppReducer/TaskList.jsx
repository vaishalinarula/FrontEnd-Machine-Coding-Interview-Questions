import { useState } from "react";
import { TasksContext, TasksDispatchContext } from "./TasksContext.js";
import { useContext } from "react";

export default function TaskList() {
  const tasks = useContext(TasksContext);
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useContext(TasksDispatchContext);
  let taskContent;
  if (isEditing) {
    taskContent = (
      <div style={{ display: "flex", gap: "10x" }}>
        <input
          value={task.text}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </div>
    );
  } else {
    taskContent = (
      <div style={{ display: "flex", gap: "10x" }}>
        {task.text}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    );
  }
  return (
    <div>
      <label style={{ display: "flex", gap: "5px", width: "100%" }}>
        <input
          type="checkbox"
          checked={task.done}
          onChange={(e) => {
            dispatch({
              type: "changed",
              task: {
                ...task,
                done: e.target.checked,
              },
            });
          }}
          style={{ width: "200px" }}
        />
        {taskContent}
        <button
          onClick={() => {
            dispatch({
              type: "deleted",
              id: task.id,
            });
          }}
        >
          Delete
        </button>
      </label>
    </div>
  );
}
