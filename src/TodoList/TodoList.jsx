import React, { useEffect, useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://dummyjson.com/todos?limit=10&skip=80"
        );
        const data = await response.json();
        setTodos(data.todos);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []);

  const groupTodosByUser = (todos) => {
    return todos.reduce((acc, todo) => {
      const { userId } = todo;
      if (!acc[userId]) {
        acc[userId] = [];
      }
      acc[userId].push(todo);
      return acc;
    }, {});
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const groupedTodos = groupTodosByUser(todos);
  console.log("groupedTodos", groupedTodos, todos);

  return (
    <div className="App">
      <h1>Todo List</h1>
      {Object.keys(groupedTodos).map((userId) => (
        <div key={userId} className="user-block">
          <h2>User ID: {userId}</h2>
          <ul>
            {groupedTodos[userId].map((todo) => (
              <li key={todo.id} className={todo.completed ? "completed" : ""}>
                {todo.todo}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
