import AddTask from "./AddTask.jsx";
import { TasksProvider } from "./TasksContext.js";
import TaskList from "./TaskList.jsx";

export default function TaskApp() {
  return (
    <TasksProvider>
      <h2>Task App using Reducer</h2>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
