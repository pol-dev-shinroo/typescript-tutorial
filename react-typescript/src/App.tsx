import React, { useState } from "react";
import { Todo } from "./interfaces/todo.model";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prev) => {
      return [...prev, { id: Math.random().toString(), text }];
    });
  };

  const deleteHandler = (id: string) => {
    setTodos((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };
  return (
    <div className="App">
      <TodoList todos={todos} deleteHandler={deleteHandler} />
      <NewTodo todoAddHandler={todoAddHandler} />
    </div>
  );
};

export default App;
