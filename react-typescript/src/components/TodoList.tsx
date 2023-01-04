import React from "react";

interface TodoListProps {
  todos: { id: string; text: string }[];
  deleteHandler: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteHandler }) => {
  return (
    <ul>
      {todos.map((item) => {
        const { id, text } = item;
        return (
          <li key={id}>
            <span>{text}</span>
            <button onClick={() => deleteHandler(id)}>DELETE</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
