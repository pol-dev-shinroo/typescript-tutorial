import { RequestHandler } from "express";

import { Todo } from "../models/todo";

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as { text: string }).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  return res.status(200).json({ TODOS });
};

export const getTodos: RequestHandler = (req, res, next) => {
  return res.status(200).json({ TODOS });
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const id = req.params.id;
  console.log(typeof id);
  const updatedText = (req.body as { text: string }).text;
  const todoIndex = TODOS.findIndex((item) => item.id === id);
  console.log(todoIndex);
  if (todoIndex < 0) {
    throw new Error("Could not find todo!");
  }
  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);
  return res.status(200).json({ todos: TODOS, updatedTodo: TODOS[todoIndex] });
};

export const deleteTodo: RequestHandler = (req, res) => {
  const todoId = req.params.id;
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error("Could not find todo!");
  }

  TODOS.splice(todoIndex, 1);
  return res.json({ message: "Todo deleted!" });
};
