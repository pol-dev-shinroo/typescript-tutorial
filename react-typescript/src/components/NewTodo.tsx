import React, { useRef } from "react";

type NewTodoProps = {
  todoAddHandler: (text: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = ({ todoAddHandler }) => {
  const textInput = useRef<HTMLInputElement>(null);
  console.log(textInput);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const text = textInput.current!.value;
    todoAddHandler(text);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="todo-text">Todo text</label>
        <input type="text" id="todo-text" ref={textInput} />
      </div>
      <button type="submit">ADD TODO</button>
    </form>
  );
};

export default NewTodo;
